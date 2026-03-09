<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MerchantUser extends Model
{
    protected $fillable = ['merchant_id', 'user_id', 'role_id', 'status'];

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}