<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogController extends Controller
{
    function index()
    {
        $logs = Log::with(['student', 'station'])->paginate(20);
        return Inertia::render('Logs', ['logs' => $logs]);
    }
}
