import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Attendance(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Attendance" />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                <div className="px-6 pt-6 ">
                    <h1 className="font-bold text-2xl">Attendance</h1>
                </div>

                <div className="p-6 border-b border-gray-200">
                    <p>Attendance</p>
                </div>
            </div>
        </Authenticated>
    );
}
