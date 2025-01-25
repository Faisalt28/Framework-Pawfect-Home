<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
  /**
   * Handle an incoming registration request.
   *
   * @throws ValidationException
   */
  public function store(Request $request): RedirectResponse
  {
    User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => $request->password,
      'role' => 'adopter',
      'address' => $request->address,
    ]);

    return redirect(route('login', absolute: false));
  }

  /**
   * Display the registration view.
   */
  public function create(): Response
  {
    return Inertia::render('Auth/Register');
  }
}
