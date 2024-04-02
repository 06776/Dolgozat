<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kolcsonzok extends Model
{
    use HasFactory;
    protected $fillable = ['nev', 'szulIdo'];
    
    public function kolcsonzesek()
    {
        return $this->hasMany(Kolcsonzesek::class, 'kolcsonzokId');
    }
}
