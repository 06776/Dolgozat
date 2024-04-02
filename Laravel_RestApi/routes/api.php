<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KolcsonzesekController;
use App\Http\Controllers\KolcsonzokController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('kolcsonzesek', KolcsonzesekController::class);
Route::get('kolcsonzok', [KolcsonzokController::class, 'home']);
Route::get('kolcsonzok/{id}', [KolcsonzokController::class, 'show']);