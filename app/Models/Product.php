<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model

{
    use HasFactory;
    protected $fillable = ['title', 'description', 'price', 'quantity', 'image_url', 'user_id']; 

    
    protected $casts = [
        'price' => 'float', 
    ];

    public function creator() {
    return $this->belongsTo(User::class, 'user_id');

    
}
}

