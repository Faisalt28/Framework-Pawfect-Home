<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
  public function show(Request $request): Response
  {
    return Inertia::render('Profile/Show', [
      'user' => $request->user(),
      'notification' => session()->pull('notification'),
    ]);
  }

  public function edit(Request $request): Response
  {
    return Inertia::render('Profile/Edit', [
      'user' => $request->user(),
      'notification' => session()->pull('notification'),
    ]);
  }

  public function update(Request $request): RedirectResponse
  {
    $user = $request->user();
    $user->update([
      'name' => $request->name,
      'email' => $request->email,
      'address' => $request->address,
    ]);

    if ($user->isDirty('email')) {
      $user->email_verified_at = null;
      $user->save();
    }

    return Redirect::route('profile.show', $user)->with('notification', [
      'status' => 'success',
      'message' => 'Profil berhasil diperbarui.',
    ]);
  }

  public function destroy(Request $request): RedirectResponse
  {
    $user = $request->user();
    $user->delete();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return Redirect::to('/')->with('notification', [
      'status' => 'success',
      'message' => 'Akun berhasil dihapus.',
    ]);
  }
}
