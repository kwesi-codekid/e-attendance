<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasFactory;
    use UUid;

    protected $fillable = [
        'name',
        'location'
    ];

    public $incrementing = false;
    protected $keyType = 'string';
}
