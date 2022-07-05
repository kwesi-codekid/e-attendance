<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    function getAllAttendance()
    {
        return Inertia::render('Attendance');
    }
}
