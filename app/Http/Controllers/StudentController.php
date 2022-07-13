<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    function getStudents()
    {
        $students = Student::paginate(15);
        return Inertia::render('Students', ['students' => $students]);
    }


    function getStudent($id)
    {
        $student = Student::with('attendances.station')->findOrFail($id);
        // dd($student);
        return Inertia::render('Student/Index', ['student' => $student]);
    }
}
