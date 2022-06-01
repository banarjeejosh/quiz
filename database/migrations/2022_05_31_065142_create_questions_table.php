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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string('question')->nullable();
            $table->string('correct_answer')->nullable();
            $table->boolean('active')->default(true);
            $table->string('answer_one')->nullable();
            $table->string('answer_two')->nullable();
            $table->string('answer_three')->nullable();
            $table->string('answer_four')->nullable();
            $table->boolean('answer_is_bool')->default(false);
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
        Schema::dropIfExists('questions');
    }
};
