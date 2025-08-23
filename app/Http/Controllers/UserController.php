<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function profile(User $user) {
    return Inertia::render('Users/Profile', compact('user'));
}
}
