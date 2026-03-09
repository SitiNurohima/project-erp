<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function index(Request $request)
    {
        $query = Stock::with([
            'product.category',
            'product.unit',
            'product.merchant'
        ])->latest();

        if ($request->has('merchant_id')) {
            $query->whereHas('product', function ($q) use ($request) {
                $q->where('merchant_id', $request->merchant_id);
            });
        }

        $stocks = $query->get();

        return response()->json([
            'message' => 'Daftar stok produk',
            'data' => $stocks
        ]);
    }

    public function show(string $id)
    {
        $stock = Stock::with([
            'product.category',
            'product.unit',
            'product.merchant'
        ])->findOrFail($id);

        return response()->json([
            'message' => 'Detail stok produk',
            'data' => $stock
        ]);
    }
}