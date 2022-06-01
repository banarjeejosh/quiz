import React, { useEffect } from 'react';
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

const TrashQuestion = (props) => {
    // const { posts } = props.questions;
    // const { data } = posts;
    // console.log(props,data)
    // debugger
  return (
    <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trash</h2>}
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
            href={route("questions.index")}
        >
            Question List
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
                {props.questions.map(({ id, question, correct_answer, active }) => {
                    if(active == 0) {
                   return <tr key={id} className="">
                        <td className="border-t">
                            <InertiaLink
                                href={route("questions.edit", id)}
                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                            >
                                {id}
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                href={route("questions.edit", id)}
                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                            >
                                {question}
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                tabIndex="1"
                                className="flex items-center px-6 py-4"
                                href={route("questions.edit", id)}
                            >
                                {correct_answer}
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                tabIndex="1"
                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                href={route("questions.undo", id)}
                            >
                                Undo
                            </InertiaLink>
                        </td>
                    </tr>

                    }


                    })}
                {props.questions.filter(question => question.active ==0).length === 0 && (
                    <tr>
                        <td
                            className="px-6 py-4 border-t"
                            colSpan="4"
                        >
                            No Question found in the trash. 
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

export default TrashQuestion