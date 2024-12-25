'use client'

import { useState } from "react"
import { FaHome, FaUser, FaLaptopCode, FaCode } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";





export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

            <div className="md:hidden fixed top-6 left-3 z-50" >
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-12 h-12 bg-slate-200 text-gray-700 rounded-full shadow-md hover:bg-slate-400 hover:shadow-lg transition"
                >
                    {isOpen ? <IoClose className="text-3xl text-secondary" /> : <GiHamburgerMenu className="text-2xl" />}
                </button>
            </div>
 
            <nav className={`fixed sm:top-20 sm:left-4 md:top-14 md:left-4 top-20 left-4 h-screen w-16 flex flex-col items-center py-8 transition-transform duration-700 ease-in-out ${isOpen? "translate-y-0" : "translate-y-full"}`}>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a className={`group`} href="#home">
                        <FaHome className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-11 w-11 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`group-active:opacity-70 group-focus:bg-red group-hover:motion-preset-wiggle font-semibold absolute left-14 px-1 py-1 rounded-2xl text-accent text-md font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Home
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#home">
                        <FaUser className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-11 w-11 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-16 px-2 py-1 rounded-2xl text-accent text-md font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        About
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#home">
                        <FaCode className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-11 w-11 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-16 px-2 py-1 rounded-2xl text-accent text-md font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Skills
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#home">
                        <IoMdPaper className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-11 w-11 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-16 px-2 py-1 rounded-2xl text-accent text-md font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Resume
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#home">
                        <FaLaptopCode className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-11 w-11 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-16 px-2 py-1 rounded-full text-accent text-md font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Projects
                    </div>
                </div>

                <div className={`group relative flex items-center w-full mb-8`}>
                    <a href="#home">
                        <MdConnectWithoutContact className="group-hover:opacity-80 group-active:p-2 group-active:text-gray-300 bg-primary p-1 h-11 w-11 md:h-12 md:w-12 rounded-full" />
                    </a>
                    <div className={`group-active:opacity-70 group-hover:motion-preset-wiggle font-semibold absolute left-16 px-2 py-1 rounded-full text-accent text-md font-body opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Contact
                    </div>
                </div>

            </nav>
        </>
    )
}