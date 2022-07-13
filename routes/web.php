<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/attendance', [AttendanceController::class, 'index'])->middleware(['auth', 'verified'])->name('attendance');


Route::get('/staff', function () {
    return Inertia::render('Staff');
})->middleware(['auth', 'verified'])->name('staff');



Route::get('/students', [StudentController::class, 'getStudents'])->middleware(['auth', 'verified'])->name('students');
Route::get('/students/{id?}', [StudentController::class, 'getStudent'])->middleware(['auth', 'verified'])->name('student');


Route::get('/lecturers', [LecturerController::class, 'getLecturers'])->middleware(['auth', 'verified'])->name('lecturers');
Route::get('/lecturers/{id?}', [LecturerController::class, 'getLecturer'])->middleware(['auth', 'verified'])->name('lecturer');


Route::get('/settings', function () {
    return Inertia::render('Settings');
})->middleware(['auth', 'verified'])->name('settings');

Route::get('/stations', function () {
    return Inertia::render('Stations');
})->middleware(['auth', 'verified'])->name('stations');

Route::get('/logs', [LogController::class, 'index'])->middleware(['auth', 'verified'])->name('logs');

require __DIR__ . '/auth.php';
