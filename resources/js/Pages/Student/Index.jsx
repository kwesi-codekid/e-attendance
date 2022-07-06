import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Student({ auth, errors, student }) {
    console.log(student.attendances);
    let attendances = student.attendances;
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head
                title={` ${student.first_name} ${student.middle_name} ${student.last_name} | Student `}
            />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                <div className="p-6 border-b border-blue-700">
                    <h1 className="font-bold text-2xl">
                        {student.first_name} {student.middle_name}{" "}
                        {student.last_name}
                    </h1>
                </div>
            </div>

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700 mt-5">
                <div className="py-6 px-1 ">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Station
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Timestamp
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">View</span>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {attendances.map((entry) => (
                                    <tr
                                        key={entry.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                        >
                                            {entry?.station_id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {entry?.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(
                                                entry.created_at
                                            ).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
