<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'merchant_id',
        'category_id',
        'unit_id',
        'name',
        'sku',
        'price',
        'is_active'
    ];

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function stock()
    {
        return $this->hasOne(Stock::class);
    }

    public function saleItems()
    {
        return $this->hasMany(SaleItem::class);
    }

    public function purchaseItems()
    {
        return $this->hasMany(PurchaseItem::class);
    }
}