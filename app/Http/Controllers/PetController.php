<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PetController extends Controller
{
  public function index()
  {
    // Ambil semua pets dengan relasi adopts, diurutkan berdasarkan created_at secara descending
    $pets = Pet::with(['adopts' => function ($query) {
      $query->orderBy('created_at', 'desc'); // Urutkan adopts dari yang terbaru
    }])->get()->map(function ($pet) {
      // Ambil data adopsi terakhir jika status bukan Approved
      $latestAdopt = $pet->adopts->first();

      // Jika ada adopsi dengan status Approved, gunakan data tersebut
      $approvedAdopt = $pet->adopts->firstWhere('status', 'Approved');

      // Gunakan approvedAdopt jika ada, jika tidak, gunakan latestAdopt
      $adopt = $approvedAdopt ?? $latestAdopt;

      // Tambahkan data adopsi ke objek pet
      $pet->adopt = $adopt;

      // Hapus properti adopts karena sudah tidak diperlukan
      unset($pet->adopts);

      // Tambahkan is_adopted dan in_adoption_process
      $pet->is_adopted = $approvedAdopt ? true : false; // is_adopted true jika ada adopsi dengan status Approved
      $pet->in_adoption_process = $latestAdopt && $latestAdopt->status === 'Pending' ? true : false; // in_adoption_process true jika ada adopsi dengan status Pending

      // Tambahkan id_adopted jika status adopsi adalah Approved
      if ($approvedAdopt) {
        $pet->id_adopted = $approvedAdopt->id;
      } else {
        $pet->id_adopted = null; // Jika tidak ada adopsi yang Approved, id_adopted adalah null
      }

      return $pet;
    });

    // Tambahkan label (Me) atau (Others) ke status adopsi
    $pets = $pets->map(function ($pet) {
      if ($pet->adopt) {
        // Cek apakah adopt dimiliki oleh user yang sedang login
        $label = $pet->adopt->user_id === Auth::id() ? ' (Me)' : ' (Others)';
        // Tambahkan label ke status adopsi
        $pet->adopt->status = $pet->adopt->status . $label;
      }
      return $pet;
    });

    return Inertia::render('Pets/Index', [
      'pets' => $pets,
    ]);
  }

  public function store(Request $request)
  {
    Pet::create($request->all());
    return redirect()->route('pets.index')->with('success', 'Pet created successfully.');
  }

  public function create()
  {
    return Inertia::render('Pets/Create');
  }

  public function show(Pet $pet)
  {
    return Inertia::render('Pets/Show', ['pet' => $pet]);
  }

  public function edit(Pet $pet)
  {
    return Inertia::render('Pets/Edit', ['pet' => $pet]);
  }

  public function update(Request $request, Pet $pet)
  {
    $pet->update($request->all());
    return redirect()->route('pets.index')->with('success', 'Pet updated successfully.');
  }

  public function destroy(Pet $pet)
  {
    $pet->delete();
    return redirect()->route('pets.index')->with('success', 'Pet deleted successfully.');
  }
}
