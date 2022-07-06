<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    function getAllAttendance()
    {
        $attendance = Attendance::with('student')->paginate(20);
        // dd($attendance);
        return Inertia::render('Attendance', ['attendance' => $attendance]);
    }
}
