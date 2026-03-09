<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Stock;
use App\Models\AuditLog;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['category', 'unit', 'stock'])->latest()->get();

        return response()->json([
            'message' => 'Daftar produk',
            'data' => $products
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'category_id' => 'required|exists:categories,id',
            'unit_id' => 'required|exists:units,id',
            'name' => 'required|string|max:255',
            'sku' => 'nullable|string|max:100',
            'price' => 'required|numeric|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $product = Product::create([
            'merchant_id' => $request->merchant_id,
            'category_id' => $request->category_id,
            'unit_id' => $request->unit_id,
            'name' => $request->name,
            'sku' => $request->sku,
            'price' => $request->price,
            'is_active' => $request->is_active ?? true,
        ]);

        Stock::create([
            'product_id' => $product->id,
            'qty' => 0,
        ]);

        AuditLog::create([
            'merchant_id' => $product->merchant_id,
            'user_id' => $request->user()->id,
            'action' => 'CREATE_PRODUCT',
            'entity' => 'products',
            'entity_id' => $product->id,
            'description' => 'Menambahkan produk baru: ' . $product->name,
        ]);

        return response()->json([
            'message' => 'Produk berhasil ditambahkan',
            'data' => $product->load(['category', 'unit', 'stock'])
        ], 201);
    }

    public function show(string $id)
    {
        $product = Product::with(['category', 'unit', 'stock'])->findOrFail($id);

        return response()->json([
            'message' => 'Detail produk',
            'data' => $product
        ]);
    }

    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'category_id' => 'required|exists:categories,id',
            'unit_id' => 'required|exists:units,id',
            'name' => 'required|string|max:255',
            'sku' => 'nullable|string|max:100',
            'price' => 'required|numeric|min:0',
            'is_active' => 'required|boolean',
        ]);

        $product->update([
            'merchant_id' => $request->merchant_id,
            'category_id' => $request->category_id,
            'unit_id' => $request->unit_id,
            'name' => $request->name,
            'sku' => $request->sku,
            'price' => $request->price,
            'is_active' => $request->is_active,
        ]);

        return response()->json([
            'message' => 'Produk berhasil diupdate',
            'data' => $product->load(['category', 'unit', 'stock'])
        ]);
    }

    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json([
            'message' => 'Produk berhasil dihapus'
        ]);
    }
}