import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Student({ auth, errors, student }) {
    console.log(student);
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head
                title={` ${student.first_name} ${student.middle_name} ${student.last_name} | Student `}
            />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="font-bold text-2xl">
                        {student.first_name} {student.middle_name}{" "}
                        {student.last_name}
                    </h1>
                </div>
            </div>
        </Authenticated>
    );
}
