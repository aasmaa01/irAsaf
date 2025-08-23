<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['title', 'description', 'price', 'quantity', 'image_url', 'user_id'];
    public function creator() {
    return $this->belongsTo(User::class, 'user_id');
}
}

