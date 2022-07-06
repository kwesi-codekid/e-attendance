<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Attendance>
 */
class AttendanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "station_id" => $this->faker->uuid(),
            "user_id" => $this->faker->uuid(),
            "status" => $this->faker->boolean(),
            "occasion_id" => $this->faker->uuid(),
        ];
    }
}
