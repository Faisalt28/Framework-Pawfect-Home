<?php

namespace App\Http\Controllers;

use App\Models\Adopt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdoptController extends Controller
{
  public function index()
  {
    $adopts = Auth::user()->role === 'Admin'
      ? Adopt::with(['user', 'pet'])->get()
      : Adopt::where('user_id', Auth::id())->with('pet')->get();

    return Inertia::render('Adopts/Index', ['adopts' => $adopts]);
  }

  public function store(Request $request)
  {
    Adopt::create([
      'user_id' => Auth::id(),
      'pet_id' => $request->pet_id,
      'status' => 'pending',
    ]);

    return redirect()->route('adopts.index')->with('success', 'Permohonan adopsi berhasil diajukan.');
  }

  public function updateStatus(Request $request, Adopt $adopt)
  {
    if (Auth::user()->role !== 'Admin') {
      abort(403, 'Unauthorized action.');
    }

    $adopt->update(['status' => $request->status]);
    return redirect()->route('adopts.index')->with('success', 'Status adopsi berhasil diperbarui.');
  }

  public function destroy(Adopt $adopt)
  {
    if (Auth::user()->role !== 'Admin' && $adopt->user_id !== Auth::id()) {
      abort(403, 'Unauthorized action.');
    }

    $adopt->delete();
    return redirect()->route('adopts.index')->with('success', 'Adopsi berhasil dihapus.');
  }
}
