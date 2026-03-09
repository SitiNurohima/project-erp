<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $fillable = ['merchant_id', 'name'];

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}