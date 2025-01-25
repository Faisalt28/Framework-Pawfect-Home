<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pet extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'category',
    'breed',
    'age',
    'gender',
    'color',
    'weight',
    'height',
    'description',
  ];

  public function adopts(): HasMany
  {
    return $this->hasMany(Adopt::class);
  }
}
