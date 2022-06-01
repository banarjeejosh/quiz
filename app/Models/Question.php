<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = ['question','correct_answer','active','name','answer_one','answer_two','answer_three','answer_four','answer_is_bool'];
}
