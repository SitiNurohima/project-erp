<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\MerchantUser;
use Illuminate\Http\Request;

class AuditLogController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $merchantIds = MerchantUser::where('user_id', $user->id)
            ->where('status', 'active')
            ->pluck('merchant_id');

        $query = AuditLog::with(['merchant', 'user'])
            ->whereIn('merchant_id', $merchantIds)
            ->latest();

        if ($request->has('merchant_id')) {
            $query->where('merchant_id', $request->merchant_id);
        }

        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        if ($request->has('action')) {
            $query->where('action', $request->action);
        }

        $logs = $query->get();

        return response()->json([
            'message' => 'Daftar audit log',
            'data' => $logs
        ]);
    }

    public function show(Request $request, string $id)
    {
        $user = $request->user();

        $merchantIds = MerchantUser::where('user_id', $user->id)
            ->where('status', 'active')
            ->pluck('merchant_id');

        $log = AuditLog::with(['merchant', 'user'])
            ->whereIn('merchant_id', $merchantIds)
            ->findOrFail($id);

        return response()->json([
            'message' => 'Detail audit log',
            'data' => $log
        ]);
    }
}