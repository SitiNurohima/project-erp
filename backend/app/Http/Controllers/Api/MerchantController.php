<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Merchant;
use App\Models\MerchantUser;
use App\Models\Role;
use Illuminate\Http\Request;

class MerchantController extends Controller
{
    public function index()
    {
        $merchants = Merchant::latest()->get();

        return response()->json([
            'message' => 'Daftar merchant',
            'data' => $merchants
        ]);
    }

    public function myMerchants(Request $request)
    {
        $merchantUsers = MerchantUser::with(['merchant', 'role'])
            ->where('user_id', $request->user()->id)
            ->where('status', 'active')
            ->get();

        return response()->json([
            'message' => 'Daftar merchant milik user',
            'data' => $merchantUsers
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:50',
            'status' => 'nullable|in:active,inactive',
        ]);

        $merchant = Merchant::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'status' => $request->status ?? 'active',
        ]);

        $ownerRole = Role::where('name', 'Owner')->first();

        MerchantUser::create([
            'merchant_id' => $merchant->id,
            'user_id' => $request->user()->id,
            'role_id' => $ownerRole->id,
            'status' => 'active',
        ]);

        return response()->json([
            'message' => 'Merchant berhasil dibuat',
            'data' => $merchant
        ], 201);
    }

    public function show(string $id)
    {
        $merchant = Merchant::findOrFail($id);

        return response()->json([
            'message' => 'Detail merchant',
            'data' => $merchant
        ]);
    }

    public function update(Request $request, string $id)
    {
        $merchant = Merchant::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:50',
            'status' => 'required|in:active,inactive',
        ]);

        $merchant->update([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'status' => $request->status,
        ]);

        return response()->json([
            'message' => 'Merchant berhasil diupdate',
            'data' => $merchant
        ]);
    }

    public function destroy(string $id)
    {
        $merchant = Merchant::findOrFail($id);
        $merchant->delete();

        return response()->json([
            'message' => 'Merchant berhasil dihapus'
        ]);
    }
}