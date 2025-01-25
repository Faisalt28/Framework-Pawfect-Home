<?php

namespace Database\Factories;

use App\Models\Adopt;
use App\Models\Pet;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AdoptFactory extends Factory
{
  protected $model = Adopt::class;

  public function definition(): array
  {
    return [
      'user_id' => User::where('role', '!=', 'Admin')->inRandomOrder()->first()->id,
      'pet_id' => Pet::inRandomOrder()->first()->id,
      'status' => $this->faker->randomElement(['Pending', 'Approved', 'Rejected']),
    ];
  }
}
