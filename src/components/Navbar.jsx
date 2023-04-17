import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/index.js";

function Navbar() {

    // Tracking state for Mobile Navbar's toggle button (to show/hide collapsible navLinks list).
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">

            {/* HooBank Logo */}
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

            {/* Desktop Navbar Code */}
            <ul className="list-none hidden sm:flex justify-end items-center flex-1">
                {navLinks.map((navLink, idx) => (
                    <li key={navLink.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${idx === navLinks.length - 1 ? "mr-0" : "mr-10"} pt-[5px] hover:text-secondary`}>
                        <a href={`#${navLink.id}`}>{navLink.title}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile Navbar Code */}
            <div className="flex flex-1 sm:hidden justify-end items-center">
                {/* Mobile Navbar Code - Hamburger Menu Button & Close Button */}
                <img
                    src={toggleNav ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    // onClick={() => setToggleNav(!toggleNav)} -- use below line of code using 'prev' callback function. 
                    onClick={() => setToggleNav((prev) => !prev)}
                />

                {/* Mobile Navbar Code - Collapsible navLinks List */}
                <div className={`${toggleNav ? "flex" : "hidden"} p-6 bg-black-gradient absolute z-[1] top-20 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-1 flex-col justify-end items-center">
                        {navLinks.map((navLink, idx) => (
                            <li key={navLink.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${idx === navLinks.length - 1 ? "mb-0" : "mb-4"} hover:text-secondary`}>
                                <a href={`#${navLink.id}`}>{navLink.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;