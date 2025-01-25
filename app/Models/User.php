<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
  use HasFactory, Notifiable;

  protected $fillable = [
    'name',
    'email',
    'password',
    'role',
    'address',
  ];

  protected $hidden = [
    'password',
    'remember_token',
  ];

  public function setNameAttribute($value): void
  {
    $this->attributes['name'] = ucwords(strtolower(preg_replace('/\s+/', ' ', trim($value))));
  }

  public function setEmailAttribute($value): void
  {
    $this->attributes['email'] = strtolower($value);
  }

  public function setPasswordAttribute($value): void
  {
    $this->attributes['password'] = Hash::make($value);
  }

  public function setRoleAttribute($value): void
  {
    $this->attributes['role'] = ucwords($value);
  }

  public function adopts(): HasMany
  {
    return $this->hasMany(Adopt::class);
  }

  protected function casts(): array
  {
    return [
      'email_verified_at' => 'datetime',
      'password' => 'hashed',
    ];
  }
}
