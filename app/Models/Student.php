<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;


    protected $fillable = [
        'first_name',
        'last_name',
        'rfid'
    ];



    public function attendances()
    {
        return $this->hasMany(Attendance::class, 'user_id', 'student_code');
    }


    public function logs()
    {
        return $this->hasMany(Log::class, 'user_id', 'student_code');
    }
}
