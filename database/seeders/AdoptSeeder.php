<?php

namespace Database\Seeders;

use App\Models\Adopt;
use Illuminate\Database\Seeder;

class AdoptSeeder extends Seeder
{
  public function run(): void
  {
    Adopt::factory(20)->create();
  }
}
