<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  public function run(): void
  {
    User::factory()->create([
      'name' => 'Admin',
      'email' => 'admin@pawfecthome.id',
      'role' => 'admin',
      'password' => 'admin@pawfecthome.id',
    ]);


    User::factory(2)->create([
      'role' => 'Adopter',
    ]);
  }
}
