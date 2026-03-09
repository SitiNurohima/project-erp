<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('merchant_users', function (Blueprint $table) {
        $table->id();
        $table->foreignId('merchant_id')->constrained('merchants')->cascadeOnDelete();
        $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
        $table->foreignId('role_id')->constrained('roles')->cascadeOnDelete();
        $table->enum('status', ['active', 'inactive'])->default('active');
        $table->timestamps();

        $table->unique(['merchant_id', 'user_id']);
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('merchant_users');
    }
};
