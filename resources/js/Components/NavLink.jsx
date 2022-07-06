import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({
    href,
    active,
    children,
    className = "",
    title,
    icon,
}) {
    return (
        <Link
            href={href}
            className={
                active
                    ? `${className} inline-flex items-center px-1 my-2 rounded-md text-sm font-medium leading-5 text-gray-900 py-2 focus:outline-none bg-blue-700 text-white dark:bg-gray-800 transition duration-150 ease-in-out border-r dark:border-blue-600 border-yellow-400`
                    : `${className} inline-flex items-center px-1 my-2 rounded-md border-transparent text-sm font-medium leading-5 py-2 text-gray-500 hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out `
            }
        >
            {icon} <div className="ml-2">{title}</div>
        </Link>
    );
}
