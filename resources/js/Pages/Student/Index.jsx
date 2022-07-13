import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import LinkButton from "@/Components/LinkButton";

export default function Student({ auth, errors, student }) {
    console.log(student);

    const [logs, setLogs] = useState([]);
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
        setLogs(student.logs.reverse());
        setAttendances(student.attendances.reverse());
    }, []);

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

                    <LinkButton label="Generate Report" href="students" />
                </div>
            </div>

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700 mt-5">
                <div className="py-6 px-1 flex ">
                    <div className="relative overflow-x-auto shadow-md max-h-fit min-h-fit mb-auto sm:rounded-lg flex-1">
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
                                {attendances.reverse().map((entry) => (
                                    <tr
                                        key={entry.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                        >
                                            {entry?.station?.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {entry?.status == 1 ? (
                                                <div className="flex px-3 py-1 rounded-md dark:bg-yellow-500 bg-green-600 items-center justify-center text-white dark:text-black ">
                                                    <p className="text-sm">
                                                        Present
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="flex px-3 py-1 rounded-md dark:bg-pink-700 bg-red-700 items-center justify-center text-white ">
                                                    <p className="text-sm">
                                                        Absent
                                                    </p>
                                                </div>
                                            )}
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

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-1 ml-1">
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
                                {logs.map((entry) => (
                                    <tr
                                        key={entry.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                        >
                                            {entry?.station?.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {entry?.action == 1 ? (
                                                <div className="flex px-3 py-1 rounded-md dark:bg-yellow-500 bg-green-600 items-center justify-center text-white dark:text-black ">
                                                    <p className="text-sm">
                                                        In
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="flex px-3 py-1 rounded-md dark:bg-pink-700 bg-red-700 items-center justify-center text-white ">
                                                    <p className="text-sm">
                                                        Out
                                                    </p>
                                                </div>
                                            )}
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
