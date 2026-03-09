<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();

        return response()->json([
            'message' => 'Daftar kategori',
            'data' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'name' => 'required|string|max:255',
        ]);

        $category = Category::create([
            'merchant_id' => $request->merchant_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Kategori berhasil ditambahkan',
            'data' => $category
        ], 201);
    }

    public function show(string $id)
    {
        $category = Category::findOrFail($id);

        return response()->json([
            'message' => 'Detail kategori',
            'data' => $category
        ]);
    }

    public function update(Request $request, string $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'name' => 'required|string|max:255',
        ]);

        $category->update([
            'merchant_id' => $request->merchant_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Kategori berhasil diupdate',
            'data' => $category
        ]);
    }

    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json([
            'message' => 'Kategori berhasil dihapus'
        ]);
    }
}