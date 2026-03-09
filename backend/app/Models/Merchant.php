<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Merchant extends Model
{
    protected $fillable = ['name', 'address', 'phone', 'status'];

    public function merchantUsers()
    {
        return $this->hasMany(MerchantUser::class);
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function units()
    {
        return $this->hasMany(Unit::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    public function auditLogs()
    {
        return $this->hasMany(AuditLog::class);
    }
}