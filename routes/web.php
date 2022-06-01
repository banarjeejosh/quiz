<?php

use App\Models\Question;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\QuestionController;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () { return Inertia::render('Dashboard');})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard', function(){ return redirect()->route('dashboard');});
Route::get('/quiz', function () {
    return Inertia::render('Quiz');
})->middleware(['auth', 'verified'])->name('quiz');

Route::get('questions-trashs', [QuestionController::class, 'indexTrash'])->middleware(['auth', 'verified', 'admin'])->name('questions.trashbin');
Route::get('questions/{id}/trash', [QuestionController::class, 'trash'])->middleware(['auth', 'verified', 'admin'])->name('questions.trash');
Route::get('questions/{id}/undodelete', [QuestionController::class, 'undoDelete'])->middleware(['auth', 'verified', 'admin'])->name('questions.undo');
Route::resource('questions', QuestionController::class)->middleware(['auth', 'verified', 'admin']);

Route::get('quiz', [QuestionController::class, 'indexQuize'])->middleware(['auth', 'verified'])->name('quiz');
require __DIR__.'/auth.php';
