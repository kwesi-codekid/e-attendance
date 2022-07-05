import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Student(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Student | fasfasf" />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                <div className="p-6 border-b border-gray-200">
                    Student | fasfasf
                </div>
            </div>
        </Authenticated>
    );
}
