<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Log;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    function index()
    {
        $attendance = Attendance::with(['student', 'station'])->orderBy('id', 'desc')->paginate(20);
        return Inertia::render('Attendance', ['attendance' => $attendance]);
    }

    // create a new attendance
    function store(Request $request)
    {
        $student = Student::where('rfid', $request->rfid)->first();

        // check if user has already checked in today
        $attendance = Attendance::where('user_id', $student->student_code)->where('created_at', '>=', date('Y-m-d'))->first();
        if ($attendance) {
            //  get last log taken today order by id desc
            $isLog = Log::where('user_id', $student->student_code)->where('created_at', '>=', date('Y-m-d'))->orderBy('id', 'desc')->first();

            if ($isLog->action == 1) {
                // create a new log and set action to 0 (checked out)
                $log =  Log::create([
                    'user_id' => $student->student_code,
                    'action' => 0,
                    'station_id' => $request->station_id,
                ]);

                return $log;
            } else {
                // create a new log and set action to 1 (checked in)
                $log =  Log::create([
                    'user_id' => $student->student_code,
                    'action' => 1,
                    'station_id' => $request->station_id,
                ]);
                return $log;
            }
        } else {
            $attendance = Attendance::create([
                'user_id' => $student->student_code,
                'station_id' => $request->station_id,
                'status' => 1,
                'occasion_id' => $request->occasion_id,
            ]);

            // log all activities
            $log =  Log::create([
                'user_id' => $student->student_code,
                'station_id' => $request->station_id,
                'action' => 1,
            ]);

            return response()->json(['message' => 'Attendance and Log successfully created.', 'log' => $log, 'attendance' => $attendance]);
        }
    }
}
