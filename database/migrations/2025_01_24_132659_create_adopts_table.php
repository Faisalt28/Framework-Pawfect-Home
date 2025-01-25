<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('adopts', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained()->onDelete('cascade');
      $table->foreignId('pet_id')->constrained()->onDelete('cascade')->unique();
      $table->enum('status', ['Pending', 'Approved', 'Rejected'])->default('Pending');
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('adopts');
  }
};
