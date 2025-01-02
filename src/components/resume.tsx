'use client'

import { Montserrat, Poppins, Quicksand } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export default function ResumeSection() {

    return (
        <section id="resume" className={`flex flex-col gap-6 md:gap-10 lg:gap-10`}>

            <div className="text-center mb-8 md:mb-10 lg:mb-10">
                <h2 className={`text-2xl font-semibold md:text-4xl lg:text-4xl ${poppins.className} text-[#00ffcc]`} style={{ textShadow: '0 4px 10px rgb(58, 154, 209)' }}>
                    Resume.
                </h2>
                <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                    <span className="h-1 bg-white w-10 md:w-16 lg:w-16"></span>
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                </div>
            </div>


                <div>
                <div className={`flex flex-col justify-center items-center bg-[#090624] px-4 py-8 shadow-2xl mx-10 md:mx-48 lg:mx-60  rounded-2xl`}>
                    <h2 className={`text-2xl md:text-4xl lg:text-4xl font-bold text-center ${montserrat.className}`}>Muhammad Zaid Asif</h2>
                    <div className={`flex flex-col md:flex-row md:gap-4 md:items-evenly justify-center items-center text-[#c8cad0] ${montserrat.className}`}>
                        <div className={`text-lg md:text-xl lg:text-xl`}>
                            mr.zaidasif@gmail.com
                        </div>

                        <div className={`text-lg md:text-xl lg:text-xl`}>
                            (+92) 333 275 4446
                        </div>
                    </div>
                </div>
            <div className={`flex flex-col gap-10 md:gap-14 lg:gap-14 bg-white mx-10 md:mx-48 lg:mx-60 py-4 md:py-8 lg:py-8 rounded-2xl`}>

                <div className={`flex flex-col justify-center items-center px-4 md:px-10 lg:px-14 gap-6`}>
                    <h2 style={{textShadow: '0 4px 10px rgba(255, 215, 0, 0.5)'}} className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-accent ${montserrat.className}`}>Summary</h2>
                    <p className={`text-center text-md md:text-lg lg:text-lg md:tracking-wide lg:tracking-wide text-black ${quicksand.className}`}>
                    I am a dedicated Front-End Developer skilled in building responsive, user-friendly web applications using React, Next.js, and modern UI frameworks like Tailwind CSS and Bootstrap. With a strong foundation in HTML, CSS, and JavaScript, I focus on creating seamless, high-performance experiences. Currently, I’m expanding my expertise into Full-Stack Development with the MERN stack, aiming to deliver scalable, end-to-end solutions that drive business success. My goal is to contribute to innovative projects that prioritize both functionality and user engagement.                    </p>
                </div>

                <div className={`flex flex-col justify-center items-center px-4 md:px-8 lg:px-10 gap-6`}>
                    <h2 style={{textShadow: '0 4px 10px rgba(255, 215, 0, 0.5)'}} className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-accent ${montserrat.className}`}>Experience</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center px-2">
                        <div className={`flex flex-col`}>
                            <h4 className={`font-semibold text-lg md:text-xl lg:text-xl text-black text-center ${montserrat.className}`}>Front-End Development: Internship</h4>
                            <p className="italic text-gray-400 text-md md:text-lg lg:text-lg text-center">Markh Developers | Nov 2024 - Dec 2024</p>
                            <ul className={`list-disc pl-5 text-black-700 mt-2 text-md md:text-lg lg:text-lg text-black ${quicksand.className}`}>
                                <li>Developed responsive projects with Vanilla Javascript and Next.js.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col px-4 md:px-8 lg:px-10 justify-center gap-6`}>
                    <h2 style={{textShadow: '0 4px 10px rgba(255, 215, 0, 0.5)'}} className={`text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-accent ${montserrat.className}`}>Key Skills</h2>

                    <div className={`flex flex-row justify-between md:justify-around px-4 text-md md:text-lg lg:text-lg font-sans font-semibold text-black`}>

                        <div>
                            <li>Next JS</li>
                            <li>Typescript</li>
                            <li>Firebase</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>Tailwind</li>
                        </div>

                        <div>
                            <li>Bootstrap</li>
                            <li>MUI</li> 
                            <li>HTML</li>
                            <li>React Native</li>
                            <li>Express JS</li>
                            <li>Mongo DB</li>
                        </div>


                    </div>
                </div>

                <div className={`flex flex-col justify-center items-center px-10  md:px-12 lg:px-14 gap-6`}>
                    <h2 style={{textShadow: '0 4px 10px rgba(255, 215, 0, 0.5)'}} className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-accent ${montserrat.className}`}>Education</h2>
                    <ul className="list-disc flex flex-col gap-6 ">
                        <li>
                            <h4 className={`text-lg md:text-xl lg:text-xl text-black`}>Cambridge O&apos;Level (2013-2027)</h4>
                            <p className={`text-md md:text-lg lg:text-lg text-gray-600 ${quicksand.className}`}>Mama Baby Care Cambridge School</p>
                        </li>

                        <li>
                            <h4 className={`text-lg md:text-xl lg:text-xl text-black`}>Mobile & Web App Development (2023-2025)</h4>
                            <p className={`text-md md:text-lg lg:text-lg text-gray-600 ${quicksand.className}`}>Saylani Mass IT Training</p>
                        </li>
                    </ul>
                </div>

                <div className={`flex justify-center items-center`}>
                    <a
                        download
                        href=""
                        className={`p-4 text-[#00ffdf] hover:bg-[#d0fff969] active:bg-[#d0fff94a] text-md md:text-lg lg:text-lg rounded-sm`}
                        style={{
                            border: '1px solid #00ffdf',
                        }}
                    >
                        Download Full Resume
                    </a>
                </div>
            </div>
            </div>

        </section>
    )
}