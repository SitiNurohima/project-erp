<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $fillable = [
        'merchant_id',
        'user_id',
        'invoice_number',
        'total_amount',
    ];

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(PurchaseItem::class);
    }
}