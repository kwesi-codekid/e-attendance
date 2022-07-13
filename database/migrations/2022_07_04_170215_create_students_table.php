<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string("student_code");
            $table->string("first_name");
            $table->string("middle_name");
            $table->string("last_name");
            $table->string("gender");
            $table->string("class")->nullable();
            $table->string("bio")->nullable();
            $table->string("profile_image")->nullable();
            $table->date("dob");
            $table->string("rfid")->unique();
            $table->string("program_id")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
};
