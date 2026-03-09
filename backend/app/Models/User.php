<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'status',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function merchantUsers()
    {
        return $this->hasMany(MerchantUser::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class, 'cashier_user_id');
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