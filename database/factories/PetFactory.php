<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PetFactory extends Factory
{
  public function definition(): array
  {
    return [
      'name' => $this->faker->firstName,
      'category' => $this->faker->randomElement(['cat', 'dog']),
      'breed' => $this->faker->randomElement(['Persian', 'Siamese', 'Bulldog', 'Golden Retriever']),
      'age' => $this->faker->numberBetween(1, 15),
      'gender' => $this->faker->randomElement(['Male', 'Female']),
      'color' => $this->faker->colorName,
      'weight' => $this->faker->randomFloat(2, 1, 50),
      'height' => $this->faker->randomFloat(2, 10, 100),
      'description' => $this->faker->sentence,
    ];
  }
}
