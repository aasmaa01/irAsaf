<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2)->default(0);//default 0
            $table->integer('quantity')->default(0); 
            $table->string('image_url')->nullable();

            $table->unsignedBigInteger('user_id')->nullable();//lowner
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null'); 

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
