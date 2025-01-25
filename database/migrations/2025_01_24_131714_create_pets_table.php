<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('pets', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->enum('category', ['Cat', 'Dog']);
      $table->string('breed')->nullable();
      $table->integer('age')->nullable();
      $table->enum('gender', ['Male', 'Female'])->nullable();
      $table->string('color')->nullable();
      $table->decimal('weight', 5, 2)->nullable();
      $table->decimal('height', 5, 2)->nullable();
      $table->text('description')->nullable();
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('pets');
  }
};
