import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Calendar from "react-calendar";

let mainLinks = [
    { id: 1, title: "Students", number: "4,045" },
    { id: 2, title: "Lecturers", number: "133" },
    { id: 3, title: "Staff", number: "59" },
];

export default function Dashboard(props) {
    const [value, onChange] = useState(new Date());

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="flex">
                <section className="flex flex-col flex-1">
                    <div className="flex justify-between my-3">
                        {mainLinks.map((link) => (
                            <div
                                className={`flex flex-1 bg-blue-700 py-2 px-4 rounded-md text-white items-center shadow-md dark:bg-blue-800  ${
                                    link.id == 2 ? "mx-2" : ""
                                } `}
                            >
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
                            <div className="p-6 border-b dark:border-blue-600 border-gray-200">
                                <p>Attendance Overview</p>
                            </div>
                        </div>
                        <div className="w-2/6 ml-3 bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                            <div className="p-6 border-b dark:border-blue-600 border-gray-200">
                                <p>Productivity</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700 w-72 ml-5 p-4">
                    <div className="h-60">
                        <p>Calender</p>
                        <Calendar onChange={onChange} value={value} />
                    </div>

                    <div className="h-72">
                        <p>Schedule (Upcoming Events/Lectures)</p>
                    </div>
                </section>
            </div>
        </Authenticated>
    );
}
