<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(){
    $products = Product::orderBy('created_at', 'desc')->paginate(12);
    return Inertia::render('Products/Index', compact('products'));
    }
    public function show(Product $product){
    return Inertia::render('Products/Show', ['product' => $product]);
}

}

