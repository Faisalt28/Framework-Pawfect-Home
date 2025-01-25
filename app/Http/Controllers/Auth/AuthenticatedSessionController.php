<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
  public function create(): Response
  {
    return Inertia::render('Auth/Login', [
      'notification' => session()->pull('notification'),
    ]);
  }

  public function store(LoginRequest $request): RedirectResponse
  {
    try {
      $request->authenticate();
      $request->session()->regenerate();

      $request->session()->put('notification', [
        'status' => 'success',
        'message' => 'Login berhasil! Selamat datang kembali.',
      ]);

      return redirect()->intended(route('dashboard', absolute: false));
    } catch (Exception $e) {
      $request->session()->put('notification', [
        'status' => 'error',
        'message' => 'Login gagal. Silakan cek kembali email dan password Anda.',
      ]);

      return redirect()->route('login');
    }
  }

  public function destroy(Request $request): RedirectResponse
  {
    Auth::guard('web')->logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    $request->session()->put('notification', [
      'status' => 'success',
      'message' => 'Anda telah berhasil logout.',
    ]);

    return redirect('/');
  }
}
