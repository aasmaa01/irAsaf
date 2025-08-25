<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()

    {
        
        return [

            'title' => $this->faker->words(3, true), // "Elegant Handmade Necklace"
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->randomFloat(2, 100, 5000), // between 100 and 5000 DA
            'quantity' => $this->faker->numberBetween(1, 100),
            'image_url' => '', 
            'user_id' => \App\Models\User::factory(),

           
        ];
    }
}
