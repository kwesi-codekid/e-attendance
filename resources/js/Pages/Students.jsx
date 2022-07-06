import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import LinkButton from "@/Components/LinkButton";

export default function Students({
    auth,
    errors,
    students: {
        data,
        links,
        current_page,
        prev_page_url,
        last_page_url,
        first_page_url,
    },
}) {
    console.log(links);
    return (
        <Authenticated auth={auth} errors={errors}>
            <Head title="Students" />

            <div className="bg-white flex flex-col overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-700">
                <div className="px-6 pt-6 flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Students</h1>

                    <LinkButton label="New Student" href="student" />
                </div>

                <div className="py-6 px-1 ">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Gender
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Program
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">View</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((student) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                        >
                                            {student?.first_name}{" "}
                                            {student?.middle_name}{" "}
                                            {student?.last_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {student?.gender}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student?.program_id}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                href={route("student", {
                                                    id: student?.id,
                                                })}
                                            >
                                                View Profile
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* pagination here */}
                <div className="mx-auto my-5 rounded-lg">
                    {links.map((link, i) => (
                        <Link
                            key={link.url + i}
                            href={link.url}
                            className={`border border-gray-300 bg-white py-2 px-3 leading-tight ${
                                link.active
                                    ? "bg-blue-700 text-white dark:bg-gray-700"
                                    : "dark:bg-gray-800"
                            } text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                            {link.label
                                .replace("&laquo;", "")
                                .replace("&raquo;", "")}
                        </Link>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
