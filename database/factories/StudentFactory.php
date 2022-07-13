<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "first_name" => $this->faker->firstName(),
            "middle_name" => $this->faker->firstName(),
            "last_name" => $this->faker->lastName(),
            "student_code" => $this->faker->uuid(),
            "program_id" => $this->faker->uuid(),
            "gender" => "male",
            "dob" => $this->faker->date(),
            "rfid" => $this->faker->uuid()
        ];
    }
}
