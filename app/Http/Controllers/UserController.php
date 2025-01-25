<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
  public function index(): Response
  {
    $users = User::where('role', '!=', 'admin')->get()->map(function ($user) {
      $user->has_adopts = $user->adopts()->exists(); // Cek apakah pengguna memiliki data adopsi
      return $user;
    });

    return Inertia::render('Users/Index', [
      'users' => $users,
      'notification' => session()->pull('notification'),
    ]);
  }

  public function show(User $user): Response
  {
    return Inertia::render('Users/Show', [
      'user' => $user,
      'notification' => session()->pull('notification'),
    ]);
  }

  public function destroy(User $user): RedirectResponse
  {
    try {
      $user->delete();

      return redirect()->route('users.index')->with('notification', [
        'status' => 'success',
        'message' => 'Pengguna berhasil dihapus.',
      ]);
    } catch (Exception $e) {
      return redirect()->route('users.index')->with('notification', [
        'status' => 'error',
        'message' => 'Gagal menghapus pengguna. Silakan coba lagi.',
      ]);
    }
  }
}
