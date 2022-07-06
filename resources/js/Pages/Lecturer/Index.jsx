import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Lecturer({ auth, errors, lecturer }) {
    console.log(lecturer);
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head
                title={` ${lecturer.first_name} ${lecturer.middle_name} ${lecturer.last_name} | Lecturer `}
            />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="font-bold text-2xl">
                        {lecturer.first_name} {lecturer.middle_name}{" "}
                        {lecturer.last_name}
                    </h1>
                </div>
            </div>
        </Authenticated>
    );
}
