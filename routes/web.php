<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\IndexController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\SetLocale;
use Inertia\Inertia;

Route::get('/', [IndexController::class, 'index']);
Route::get('/lang/{locale}', function ($locale) {
    session(['locale' => $locale]);
    return back();
});

require __DIR__.'/auth.php';
