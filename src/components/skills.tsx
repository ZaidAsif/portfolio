'use client';

import { Inter, Lora, Poppins } from "next/font/google";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiTypescript, SiExpress, SiMongodb, SiMui  } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export default function SkillsSection() {
    const skills = [
        { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-gray-500 text-4xl" /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-700 text-4xl" /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
        { name: "Firebase", level: 80, icon: <SiFirebase className="text-orange-500 text-4xl" /> },
        { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-500 text-4xl" /> },
        { name: "CSS", level: 80, icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: "Bootstrap", level: 75, icon: <FaBootstrap className="text-[#7e00ed] text-4xl" /> },
        { name: "Material UI", level: 70, icon: <SiMui className="text-blue-600 text-4xl" /> },
        { name: "React.js", level: 70, icon: <FaReact className="text-blue-400 text-4xl" /> },
        { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
        { name: "React Native", level: 70, icon: <TbBrandReactNative className="text-[#00d6f5] text-4xl" /> },
        { name: "Express JS", level: 65, icon: <SiExpress  className="text-green-400 text-4xl" /> },
        { name: "Mongo db", level: 70, icon: <SiMongodb  className="text-[#00a749] text-4xl" /> },
    ];

    return (
        <section id="skills" className="w-full h-full px-8 py-16 bg-gradient-to-b from-[var(--background)] to-[rgba(10,5,59,0.9)] text-foreground">
           <div className="text-center mb-12">
                <h2 className={`text-2xl font-semibold md:text-4xl lg:text-4xl ${poppins.className} text-[#00ffcc]`} style={{textShadow: '0 4px 10px rgb(58, 154, 209)'}}>
                My Skills.
                </h2>
                <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                    <span className="h-1 bg-white w-10 md:w-16 lg:w-16"></span>
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-6xl mx-auto px-4 md:px-8 lg:px-8 group">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="relative p-6 rounded-lg bg-[rgba(15,15,50,0.8)] shadow-lg transform hover:scale-105 transition-transform duration-300 group-hover:"
                    >
                        <div className="flex items-center gap-4">
                            {skill.icon}
                            <div className="flex flex-col">
                                <h3 className={`text-lg md:text-xl font-semibold text-[#c8cad0] ${lora.className}`}>{skill.name}</h3>
                                <span className={`text-sm md:text-lg text-gray-400 ${inter.className}`}>{skill.level}% Proficiency</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="w-full bg-gray-700 h-2 rounded-full">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-accent to-primary"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
