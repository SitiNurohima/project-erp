<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('roles')->insert([
            [
                'name' => 'Owner',
                'description' => 'Pemilik merchant',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kasir',
                'description' => 'Petugas transaksi penjualan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Gudang',
                'description' => 'Petugas stok dan pembelian',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}