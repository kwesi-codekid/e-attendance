<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LecturerController extends Controller
{
    function getLecturers()
    {
        $lecturers = Lecturer::paginate(15);
        return Inertia::render('Lecturers', ['lecturers' => $lecturers]);
    }


    function getLecturer($id)
    {
        return Inertia::render('Lecturers/Index');
    }
}
