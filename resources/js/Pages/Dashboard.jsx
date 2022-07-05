import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

let mainLinks = [
    { id: 1, title: "Students", number: "4,045" },
    { id: 2, title: "Lecturers", number: "133" },
    { id: 3, title: "Staff", number: "59" },
];

export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="flex">
                <section className="flex flex-col flex-1">
                    <div className="flex">
                        {mainLinks.map((link) => (
                            <div className="flex flex-1 m-2 bg-blue-700 py-2 px-4 rounded-md text-white items-center shadow-md">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black">
                                    icon
                                </div>
                                <div className="ml-3">
                                    <p>{link.title}</p>
                                    <p className="font-bold text-2xl">
                                        {link.number}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex">
                        <div className="flex-1 bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                            <div className="p-6 border-b dark:border-gray-500 border-gray-200">
                                <p>Attendance Overview</p>
                            </div>
                        </div>
                        <div className="w-2/6 ml-3 bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                            <div className="p-6 border-b dark:border-gray-500 border-gray-200">
                                <p>Productivity</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700 w-64 ml-5 p-4">
                    <div className="h-60">
                        <p>Calender</p>
                    </div>

                    <div className="h-72">
                        <p>Schedule (Upcoming Events/Lectures)</p>
                    </div>
                </section>
            </div>
        </Authenticated>
    );
}
