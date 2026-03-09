<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuditLog extends Model
{
    protected $fillable = [
        'merchant_id',
        'user_id',
        'action',
        'entity',
        'entity_id',
        'description',
    ];

    public function merchant()
    {
        return $this->belongsTo(Merchant::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}