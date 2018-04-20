<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = ['name'];

    public function photos(){
        return $this->hasMany(Photo::class); //1 para muitos
    }
}
