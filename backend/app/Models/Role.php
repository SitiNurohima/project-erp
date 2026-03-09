<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name', 'description'];

    public function merchantUsers()
    {
        return $this->hasMany(MerchantUser::class);
    }
}