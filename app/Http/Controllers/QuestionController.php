<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreQuestionRequest;
use Illuminate\Support\Facades\Redirect;

use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $questions = Question::latest()->get();

        return Inertia::render('Admin/QuestionIndex', ['questions' => $questions]);

        // return Inertia::render('Quiz', [
        //     'event' => Question::all()->only('id','question','correct_answer','active','name','answer_one','answer_two','answer_three','answer_four','answer_is_bool'),
        // ]);
    }
    public function indexTrash()
    {
        $questions = Question::latest()->get();

        return Inertia::render('Admin/TrashQuestion', ['questions' => $questions]);

        // return Inertia::render('Quiz', [
        //     'event' => Question::all()->only('id','question','correct_answer','active','name','answer_one','answer_two','answer_three','answer_four','answer_is_bool'),
        // ]);
    }
    public function indexQuize()
    {
        $questions = Question::latest()->get();

        return Inertia::render('Quiz', ['questions' => $questions]);

        // return Inertia::render('Quiz', [
        //     'event' => Question::all()->only('id','question','correct_answer','active','name','answer_one','answer_two','answer_three','answer_four','answer_is_bool'),
        // ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/AddQuestion');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        Question::create(
            $request->all()
        );
        // return $request;
        return Redirect::route('questions.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $question)
    {
        //
        return Inertia::render('Admin/EditQuestion', [
            'question' => [
                'id' => $question->id,
                'question' => $question->question,
                'correct_answer' => $question->correct_answer,
                'active' => $question->active,
                'name' => $question->name,
                'answer_one' => $question->answer_one,
                'answer_two' => $question->answer_two,
                'answer_three' => $question->answer_three,
                'answer_four' => $question->answer_four,
                'answer_is_bool' => $question->answer_is_bool,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        $question->update($request->all());

        return Redirect::route('questions.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function trash($question)
    {
        $question = Question::find($question);
        $question->active= 0;
        $question->save();
        return Redirect::route('questions.index');
    }
    public function undoDelete($question)
    {
        $question = Question::find($question);
        $question->active= 1;
        $question->save();
        return Redirect::route('questions.index');
    }
}
