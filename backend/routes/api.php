<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\UnitController;
use App\Http\Controllers\Api\MerchantController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\PurchaseController;
use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\AuditLogController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::apiResource('audit-logs', AuditLogController::class)->only(['index', 'show']);

    Route::get('/my-merchants', [MerchantController::class, 'myMerchants']);
    Route::apiResource('merchants', MerchantController::class);

    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('units', UnitController::class);
    Route::apiResource('products', ProductController::class);
    Route::apiResource('stocks', StockController::class)->only(['index', 'show']);
    Route::apiResource('sales', SaleController::class)->only(['index', 'store', 'show']);
    Route::apiResource('purchases', PurchaseController::class)->only(['index', 'store', 'show']);
});