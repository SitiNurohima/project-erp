<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = [
        'merchant_id',
        'cashier_user_id',
        'invoice_number',
        'subtotal',
        'discount',
        'tax',
        'total_amount',
        'payment_method'
    ];

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }

    public function cashier()
    {
        return $this->belongsTo(User::class, 'cashier_user_id');
    }

    public function items()
    {
        return $this->hasMany(SaleItem::class);
    }
}