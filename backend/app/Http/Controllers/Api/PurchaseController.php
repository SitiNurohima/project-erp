<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\PurchaseItem;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    public function index()
    {
        $purchases = Purchase::with(['merchant', 'user', 'items.product'])
            ->latest()
            ->get();

        return response()->json([
            'message' => 'Daftar pembelian',
            'data' => $purchases
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'invoice_number' => 'nullable|string|max:255',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.cost' => 'required|numeric|min:0',
        ]);

        $purchase = DB::transaction(function () use ($request) {
            $totalAmount = 0;

            $purchase = Purchase::create([
                'merchant_id' => $request->merchant_id,
                'user_id' => $request->user()->id,
                'invoice_number' => $request->invoice_number,
                'total_amount' => 0,
            ]);

            foreach ($request->items as $item) {
                $product = Product::findOrFail($item['product_id']);

                $lineSubtotal = $item['cost'] * $item['quantity'];
                $totalAmount += $lineSubtotal;

                PurchaseItem::create([
                    'purchase_id' => $purchase->id,
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'cost' => $item['cost'],
                    'subtotal' => $lineSubtotal,
                ]);

                $stock = Stock::where('product_id', $product->id)->first();

                if ($stock) {
                    $stock->increment('qty', $item['quantity']);
                } else {
                    Stock::create([
                        'product_id' => $product->id,
                        'qty' => $item['quantity'],
                    ]);
                }
            }

            $purchase->update([
                'total_amount' => $totalAmount,
            ]);

            return $purchase->load(['merchant', 'user', 'items.product']);
        });

        return response()->json([
            'message' => 'Pembelian berhasil dibuat',
            'data' => $purchase
        ], 201);
    }

    public function show(string $id)
    {
        $purchase = Purchase::with(['merchant', 'user', 'items.product'])
            ->findOrFail($id);

        return response()->json([
            'message' => 'Detail pembelian',
            'data' => $purchase
        ]);
    }
}