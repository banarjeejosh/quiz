import React, { useState } from 'react';
import './../../css/quize.css'
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

const Quiz = (props) => {
    const questions = props.questions.map((question)=>{
       return {
			questionText: question.question,
			answerOptions: [
				{ answerText: question.answer_one, isCorrect: (question.correct_answer == 'answer_one')?true:false },
				{ answerText: question.answer_two, isCorrect: (question.correct_answer == 'answer_two')?true:false } ,
				{ answerText: question.answer_three, isCorrect: (question.correct_answer == 'answer_three')?true:false } ,
				{ answerText: question.answer_four, isCorrect: (question.correct_answer == 'answer_four')?true:false },
			],
		}
    });
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Quiz</h2>}
>
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-12">

                <div className='app'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {questions.length}
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption,key) => (
                                    <button key={key} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    </div>
</Authenticated>
  )
}

export default Quiz