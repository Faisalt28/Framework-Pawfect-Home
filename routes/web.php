<?php

use App\Http\Controllers\{AdoptController, PetController, ProfileController, UserController};
use App\Models\{Adopt, Pet};
use Illuminate\Support\Facades\{Auth, Route};
use Inertia\Inertia;

Route::redirect('/', '/login');

Route::middleware('auth')->group(function () {
  Route::get('/dashboard', function () {
    $user = Auth::user();
    $pets = Pet::all();

    // Ambil data adopsi dengan status 'Approved'
    $adopts = Adopt::with('user', 'pet')
      ->where('status', 'Approved')
      ->get();

    // Hitung total pets berdasarkan kategori (hanya untuk Admin)
    $groupedPets = $pets->groupBy('category')->map->count();

    // Hitung total adopsi per pengguna (hanya adopsi dengan status Approved)
    $groupedAdopts = $adopts->groupBy('user.name')->map->count();

    // Hitung total pets yang diadopsi oleh pengguna saat ini (hanya adopsi dengan status Approved)
    $groupedPetsAdopter = Adopt::where('user_id', $user->id)
      ->where('status', 'Approved') // Filter adopsi dengan status Approved
      ->with('pet') // Ambil data pet yang terkait
      ->get()
      ->groupBy('pet.category') // Kelompokkan berdasarkan kategori pet
      ->map->count(); // Hitung jumlah per kategori

    return Inertia::render('Dashboard', [
      'pets' => $user->role === 'Admin' ? $groupedPets : $groupedPetsAdopter,
      'adopts' => $groupedAdopts,
      'notification' => session()->pull('notification'),
    ]);
  })->name('dashboard');

  Route::resources([
    'users' => UserController::class,
    'pets' => PetController::class,
    'adopts' => AdoptController::class,
    'profile' => ProfileController::class,
  ]);

  Route::put('/adopts/{adopt}/status', [AdoptController::class, 'updateStatus'])
    ->name('adopts.updateStatus');
});

require __DIR__ . '/auth.php';
