<?php

namespace App\Http\Controllers;

use App\Models\Kolcsonzok;
use Illuminate\Http\Request;

class KolcsonzokController extends Controller
{
    public function home()
    {
        return Kolcsonzok::with('kolcsonzesek')->get();
    }

    public function show($id)
    {
        return Kolcsonzok::with('kolcsonzesek')->findOrFail($id);
    }
}
