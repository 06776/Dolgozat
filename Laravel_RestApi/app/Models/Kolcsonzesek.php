<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kolcsonzesek extends Model
{
    use HasFactory;
    protected $fillable = ['kolcsonzokId', 'iro', 'mufaj', 'cim'];
}
