import React from "react";
import { Link } from "@inertiajs/inertia-react";

function LinkButton({ className = "", href = "", label }) {
    return (
        <Link
            className={
                `bg-blue-700 text-white dark:text-white dark:bg-gray-800 px-3 py-1.5 rounded-md dark:hover:bg-gray-800/50 duration-300  ` +
                className
            }
            href={route(href)}
        >
            {label}
        </Link>
    );
}

export default LinkButton;
