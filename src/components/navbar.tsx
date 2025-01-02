'use client'

import { useState } from "react"
import { FaHome, FaUser, FaLaptopCode, FaCode } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";





export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

            <div className="md:hidden lg:hidden fixed top-4 left-3 lg:left-4 z-50" >
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-12 h-12 bg-slate-200 text-gray-700 rounded-full shadow-md hover:bg-slate-400 hover:shadow-lg transition"
                >
                    {isOpen ? <IoClose className="text-3xl text-secondary" /> : <GiHamburgerMenu className="text-2xl" />}
                </button>
            </div>
 
            <nav className={`z-50 fixed sm:top-18 sm:left-4 md:top-14 md:left-5 lg:top-18 2xl:top-22 xl:left-6 lg:left-6 top-16 left-4 h-screen w-16 flex flex-col items-center py-8 transition-transform duration-700 ease-in-out md:translate-y-0 lg:translate-y-0 ${isOpen? "translate-y-0" : "translate-y-full"}`}>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a className={`group`} href="#home">
                        <FaHome className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`text-lg group-active:opacity-70 group-focus:bg-red group-hover:motion-preset-wiggle font-bold absolute left-12 px-1 py-1 rounded-2xl text-accent font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Home
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#about">
                        <FaUser className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`text-lg group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-12 px-2 py-1 rounded-2xl text-accent font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        About
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#skills">
                        <FaCode className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`text-lg group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-12 px-2 py-1 rounded-2xl text-accent font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Skills
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#resume">
                        <IoMdPaper className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`text-lg group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-12 px-2 py-1 rounded-2xl text-accent font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Resume
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#projects">
                        <FaLaptopCode className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`text-lg group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-12 px-2 py-1 rounded-full text-accent font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Projects
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#contact">
                        <MdConnectWithoutContact className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`text-lg group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-12 px-2 py-1 rounded-full text-accent font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Contact
                    </div>
                </div>

            </nav>
        </>
    )
}