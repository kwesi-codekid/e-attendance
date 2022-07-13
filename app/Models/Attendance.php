<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'station_id',
        'occasion_id',
    ];


    public function student()
    {
        return $this->hasOne(Student::class, 'student_code', 'user_id');
    }

    // relationship with station table
    public function station()
    {
        return $this->hasOne(Station::class, 'id', 'station_id');
    }
}
