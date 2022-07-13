import React from "react";
import NavLink from "./NavLink";
import { IoIosSettings, IoIosDisc, IoIosPeople } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";

const links = [
    {
        id: 1,
        href: "dashboard",
        name: "Dashboard",
        icon: <IoIosDisc size={23} />,
    },
    {
        id: 3,
        href: "attendance",
        name: "Attendance",
        icon: <FiBarChart size={23} />,
    },
    {
        id: 2,
        href: "lecturers",
        name: "Lecturers",
        icon: <IoIosPeople size={23} />,
    },
    {
        id: 90,
        href: "students",
        name: "Students",
        icon: <IoIosPeople size={23} />,
    },
    {
        id: 9,
        href: "logs",
        name: "Logs",
        icon: <IoIosPeople size={23} />,
    },
    {
        id: 5,
        href: "stations",
        name: "Stations",
        icon: <IoIosPeople size={23} />,
    },
    {
        id: 6,
        href: "settings",
        name: "Settings",
        icon: <IoIosSettings size={23} />,
    },
];
function SideNavigation() {
    return (
        <div className="fixed top-0 w-56 dark:bg-gray-700 pt-14 h-screen bg-white p-3 h-full">
            <div className="flex flex-col">
                {links.map((link) => (
                    <NavLink
                        key={link.id}
                        href={route(link.href)}
                        active={route().current(link.href)}
                        title={link.name}
                        icon={link.icon}
                        className="dark:text-white "
                    />
                ))}
            </div>
        </div>
    );
}

export default SideNavigation;
