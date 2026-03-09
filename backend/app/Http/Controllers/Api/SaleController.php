<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleItem;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::with(['merchant', 'cashier', 'items.product'])
            ->latest()
            ->get();

        return response()->json([
            'message' => 'Daftar transaksi penjualan',
            'data' => $sales
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'payment_method' => 'nullable|string|max:50',
            'discount' => 'nullable|numeric|min:0',
            'tax' => 'nullable|numeric|min:0',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        $sale = DB::transaction(function () use ($request) {
            $subtotal = 0;

            $sale = Sale::create([
                'merchant_id' => $request->merchant_id,
                'cashier_user_id' => $request->user()->id,
                'invoice_number' => 'INV-' . now()->format('YmdHis') . '-' . rand(100, 999),
                'subtotal' => 0,
                'discount' => $request->discount ?? 0,
                'tax' => $request->tax ?? 0,
                'total_amount' => 0,
                'payment_method' => $request->payment_method,
            ]);

            foreach ($request->items as $item) {
                $product = Product::findOrFail($item['product_id']);
                $stock = Stock::where('product_id', $product->id)->first();

                if (! $stock) {
                    abort(response()->json([
                        'message' => "Stok untuk produk {$product->name} tidak ditemukan"
                    ], 422));
                }

                if ($stock->qty < $item['quantity']) {
                    abort(response()->json([
                        'message' => "Stok produk {$product->name} tidak mencukupi"
                    ], 422));
                }

                $lineSubtotal = $product->price * $item['quantity'];
                $subtotal += $lineSubtotal;

                SaleItem::create([
                    'sale_id' => $sale->id,
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'price' => $product->price,
                    'subtotal' => $lineSubtotal,
                ]);

                $stock->decrement('qty', $item['quantity']);
            }

            $totalAmount = $subtotal - ($request->discount ?? 0) + ($request->tax ?? 0);

            $sale->update([
                'subtotal' => $subtotal,
                'total_amount' => $totalAmount,
            ]);

            return $sale->load(['merchant', 'cashier', 'items.product']);
        });

        return response()->json([
            'message' => 'Transaksi penjualan berhasil dibuat',
            'data' => $sale
        ], 201);
    }

    public function show(string $id)
    {
        $sale = Sale::with(['merchant', 'cashier', 'items.product'])
            ->findOrFail($id);

        return response()->json([
            'message' => 'Detail transaksi penjualan',
            'data' => $sale
        ]);
    }
}