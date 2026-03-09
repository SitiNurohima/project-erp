<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\MerchantUser;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\Sale;
use App\Models\Stock;
use App\Models\Unit;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $merchantIds = MerchantUser::where('user_id', $user->id)
            ->where('status', 'active')
            ->pluck('merchant_id');

        $totalMerchants = $merchantIds->count();

        $totalCategories = Category::whereIn('merchant_id', $merchantIds)->count();
        $totalUnits = Unit::whereIn('merchant_id', $merchantIds)->count();
        $totalProducts = Product::whereIn('merchant_id', $merchantIds)->count();

        $totalStocks = Stock::whereHas('product', function ($query) use ($merchantIds) {
            $query->whereIn('merchant_id', $merchantIds);
        })->sum('qty');

        $totalSales = Sale::whereIn('merchant_id', $merchantIds)->count();
        $totalSalesAmount = Sale::whereIn('merchant_id', $merchantIds)->sum('total_amount');

        $totalPurchases = Purchase::whereIn('merchant_id', $merchantIds)->count();
        $totalPurchaseAmount = Purchase::whereIn('merchant_id', $merchantIds)->sum('total_amount');

        return response()->json([
            'message' => 'Data dashboard berhasil diambil',
            'data' => [
                'total_merchants' => $totalMerchants,
                'total_categories' => $totalCategories,
                'total_units' => $totalUnits,
                'total_products' => $totalProducts,
                'total_stock_qty' => $totalStocks,
                'total_sales' => $totalSales,
                'total_sales_amount' => $totalSalesAmount,
                'total_purchases' => $totalPurchases,
                'total_purchase_amount' => $totalPurchaseAmount,
            ]
        ]);
    }
}