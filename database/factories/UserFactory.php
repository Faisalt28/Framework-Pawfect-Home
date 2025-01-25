<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
  protected static ?string $password;

  public function definition(): array
  {
    $fullName = $this->faker->firstName() . ' ' . $this->faker->lastName();
    $email = strtolower(str_replace(' ', '.', $fullName)) . '@pawfecthome.id';

    return [
      'name' => $fullName,
      'email' => $email,
      'email_verified_at' => now(),
      'address' => $this->faker->address(),
      'password' => $email,
    ];
  }

  public function unverified(): static
  {
    return $this->state(fn(array $attributes) => [
      'email_verified_at' => null,
    ]);
  }
}
