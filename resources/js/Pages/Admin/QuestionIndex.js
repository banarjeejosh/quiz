import React, { useEffect } from 'react';
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

const QuestionIndex = (props) => {
    const chechAns = (question) =>{
        if(question.correct_answer == 'answer_one'){
            console.log(question.answer_one)
            return question.answer_one
        }else if(question.correct_answer == 'answer_two') {
            return question.answer_two
        }else if(question.correct_answer == 'answer_three') {
            return question.answer_three
        }else if(question.correct_answer == 'answer_four'){
            return question.answer_four
        }
    }
    const user  =  props.auth.user;
  return (
    <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Questions</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-12">



                    <div>
<div className="container mx-auto">
    <div className="flex items-center justify-between mb-6">
        <InertiaLink
            className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
            href={route("questions.create")}
        >
            Create Post
        </InertiaLink>
             <InertiaLink
                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                href={route("questions.trashbin")}
            >
                Trash
            </InertiaLink>
    </div>

    <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
            <thead className="text-white bg-gray-600">
                <tr className="font-bold text-left">
                    <th className="px-6 pt-5 pb-4">#</th>
                    <th className="px-6 pt-5 pb-4">Question</th>
                    <th className="px-6 pt-5 pb-4">Currect Answer</th>
                    <th className="px-6 pt-5 pb-4">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.questions.filter(question => question.active ==1).map((question) => {
                   return <tr key={question.id} className="">
                        <td className="border-t">
                            <InertiaLink
                                href={route("questions.edit", question.id)}
                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                            >
                                {question.id}
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                href={route("questions.edit", question.id)}
                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                            >
                                {question.question}
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                tabIndex="1"
                                className="flex items-center px-6 py-4"
                                href={route("questions.edit", question.id)}
                            >
                                {chechAns(question)}
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                tabIndex="1"
                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                href={route("questions.edit", question.id)}
                            >
                                Edit
                            </InertiaLink>
                            <InertiaLink
                                tabIndex="1"
                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded m-1"
                                href={route("questions.trash", question.id)}
                            >
                                Delete
                            </InertiaLink>
                        </td>
                    </tr>

                    


                    })}
                {props.questions.filter(question => question.active ==1).length === 0 && (
                    <tr>
                        <td
                            className="px-6 py-4 border-t"
                            colSpan="4"
                        >
                            No Question found. 
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</div>
</div>






                    </div>
                </div>
            </div>
        </Authenticated>
  )
}

export default QuestionIndex