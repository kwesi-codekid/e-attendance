import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Staff(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Staff" />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                <div className="p-6 border-b border-gray-200">Staff</div>
            </div>
        </Authenticated>
    );
}
