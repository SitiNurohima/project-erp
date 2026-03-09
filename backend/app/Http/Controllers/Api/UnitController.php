<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    public function index()
    {
        $units = Unit::latest()->get();

        return response()->json([
            'message' => 'Daftar satuan',
            'data' => $units
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'name' => 'required|string|max:255',
        ]);

        $unit = Unit::create([
            'merchant_id' => $request->merchant_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Satuan berhasil ditambahkan',
            'data' => $unit
        ], 201);
    }

    public function show(string $id)
    {
        $unit = Unit::findOrFail($id);

        return response()->json([
            'message' => 'Detail satuan',
            'data' => $unit
        ]);
    }

    public function update(Request $request, string $id)
    {
        $unit = Unit::findOrFail($id);

        $request->validate([
            'merchant_id' => 'required|exists:merchants,id',
            'name' => 'required|string|max:255',
        ]);

        $unit->update([
            'merchant_id' => $request->merchant_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Satuan berhasil diupdate',
            'data' => $unit
        ]);
    }

    public function destroy(string $id)
    {
        $unit = Unit::findOrFail($id);
        $unit->delete();

        return response()->json([
            'message' => 'Satuan berhasil dihapus'
        ]);
    }
}