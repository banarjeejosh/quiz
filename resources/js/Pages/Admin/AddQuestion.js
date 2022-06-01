import React, { useEffect } from 'react';

import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

const AddQuestion = (props) => { const { data, setData, post, processing, errors, reset } = useForm({
    question: '',
    correct_answer: '',
    answer_one: '',
    answer_two: '',
    answer_three: '',
    answer_four: '',
});

useEffect(() => {
    return () => {
        reset('password');
    };
}, []);

const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
};

const submit = (e) => {
    e.preventDefault();

    post(route('questions.store'));
};
return (
<Authenticated
auth={props.auth}
errors={props.errors}
header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Questions</h2>}
>
<Head title="Dashboard" />

<div className="py-12">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-12">


        <form onSubmit={submit}>
            <div>
                <Label forInput="question" value="Question" />

                <Input
                    type="text"
                    name="question"
                    value={data.question}
                    className="mt-1 block w-full"
                    autoComplete="question"
                    isFocused={true}
                    handleChange={onHandleChange}
                />
            </div>

            <div className="mt-4">
                <Label forInput="answer_one" value="Answer One" />

                <Input
                    type="text"
                    name="answer_one"
                    value={data.answer_one}
                    className="mt-1 block w-full"
                    autoComplete="answer_one"
                    handleChange={onHandleChange}
                />
            </div>
            <div className="mt-4">
                <Label forInput="answer_two" value="Answer Two" />

                <Input
                    type="text"
                    name="answer_two"
                    value={data.answer_two}
                    className="mt-1 block w-full"
                    autoComplete="answer_two"
                    handleChange={onHandleChange}
                />
            </div>
            <div className="mt-4">
                <Label forInput="answer_three" value="Answer Thee" />

                <Input
                    type="text"
                    name="answer_three"
                    value={data.answer_three}
                    className="mt-1 block w-full"
                    autoComplete="answer_three"
                    handleChange={onHandleChange}
                />
            </div>
            <div className="mt-4">
                <Label forInput="answer_four" value="Answer Four" />

                <Input
                    type="text"
                    name="answer_four"
                    value={data.answer_four}
                    className="mt-1 block w-full"
                    autoComplete="answer_four"
                    handleChange={onHandleChange}
                />
            </div>
            <div className="mt-4">
                <Label forInput="correct_answer" value="Correct Answer" />

               
                <select 
                    name="correct_answer" 
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm " 
                    value={data.correct_answer} 
                    onChange={onHandleChange}
                >
                    <option value="answer_one">Answer One</option>
                    <option value="answer_two">Answer two</option>
                    <option value="answer_three">Answer Three</option>
                    <option value="answer_four">Answer Four</option>
                </select>
            </div>

            {/* <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div> */}

            <div className="flex items-center justify-end mt-4">

                <Button className="ml-4" processing={processing}>
                    Add
                </Button>
            </div>
        </form>
        <span className="text-red-600">
                                    {errors.description}
                                </span>
        </div>
    </div>
</div>
</Authenticated>
)
}

export default AddQuestion