'use client'

import { Roboto, Merriweather, Poppins } from 'next/font/google';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';


const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export default function AboutSection() {
    return (
        <section id="about" className="group flex-col mt-10 w-full h-full flex gap-12 px-12 py-10 md:px-24 md:py-16">
            <div className={`flex flex-col justify-around items-center gap-8`}>
            <div className="text-center mb-12">
                <h2 className={`text-2xl font-semibold md:text-4xl lg:text-4xl ${poppins.className} text-[#00ffcc]`} style={{textShadow: '0 4px 10px rgb(58, 154, 209)'}}>
                About Me.
                </h2>
                <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                    <span className="h-1 bg-white w-10 md:w-16 lg:w-16"></span>
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                </div>
            </div>
                <div className={`md:flex md:justify-around`}>
                    <div className={`gap-4 flex flex-col md:justify-evenly`}>
                        <h2 className={`text-2xl md:text-5xl text-center font-mono`}> <span className='text-red-300'>Web</span> & <span className='text-orange-300'>App</span> Developer</h2>
                        <p style={{ color: '#71738e' }} className={`text-xl md:text-2xl text-center font-bold  ${roboto.className}`}>I am a young ambitious teen thriving for success in this field</p>
                        <div className="mt-4">
                            <blockquote className="text-lg font-semibold text-gray-200 italic border-l-4 border-teal-400 pl-4">
                            &quot;First, solve the problem. Then, write the code&quot; – John Johnson
                            </blockquote>
                        </div>
                    </div>
                    <div
                        className={`flex justify-center md:w-80`}
                        style={{
                            borderBottom: '2px solid #0a84ff',
                        }}
                    >
                        <img
                            src="myself.png"
                            alt="my-image"
                            className={`w-60 md:w-80 hover:motion-preset-pulse motion-ease-spring-bounciest`}
                            style={{
                                filter: 'drop-shadow(0 0 12px rgb(96, 98, 182))',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgb(111, 99, 223)] via-[rgba(54, 52, 52, 0.9)] to-[rgb(44, 37, 116)]"></div>

            <h3
                className="text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-12 text-accent"
                style={{ textShadow: "0 0 10px var(--accent), 0 0 20px var(--accent)" }}
            >
                My Journey
            </h3>

            <div className="flex flex-col gap-16 items-center">
                <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-4xl">
                    {/* Icon */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="motion-preset-spin motion-duration-2000 motion-ease-spring-bouncy flex-shrink-0 p-5 rounded-full shadow-lg border-4 border-accent bg-[rgba(10,5,59,1)] text-accent"
                            style={{
                                boxShadow: "0 0 15px var(--accent), 0 0 30px var(--accent)",
                            }}
                        >
                            <FaCode size={40} />
                        </div>
                        <div className="hidden md:block w-1 bg-accent h-24"></div>
                    </div>
                    {/* Content */}
                    <div className="bg-primary shadow-md p-6 rounded-lg flex-1 text-center md:text-right border border-[rgba(255,215,0,0.5)]">
                        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#c8d6f6] mb-3">Front-End Foundations</h4>
                        <p className={`text-md md:text-lg lg:text-xl ${merriweather.className}`}>
                            Started learning <strong>Front-End Development at SMIT</strong>, mastering HTML, CSS, and JavaScript. I then transitioned to
                            <strong> React</strong> and <strong>Next.js</strong> becoming proficient in building dynamic apps with <strong>Firebase</strong>, using libraries like
                            <strong> Bootstrap</strong> and <strong>Tailwind</strong> for sleek designs.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 items-center w-full max-w-4xl">
                    {/* Icon */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="flex-shrink-0 p-5 rounded-full shadow-lg border-4 border-extra bg-[rgba(10,5,59,1)] text-extra"
                            style={{
                                boxShadow: "0 0 15px var(--extra), 0 0 30px var(--extra)",
                            }}
                        >
                            <FaMobileAlt className='motion-preset-oscillate motion-duration-2000 motion-ease-spring-smooth' size={40} />
                        </div>
                        <div className="hidden md:block w-1 bg-extra h-24"></div>
                    </div>
                    {/* Content */}
                    <div className="bg-primary shadow-md p-6 rounded-lg flex-1 text-center md:text-left border border-[rgba(82,238,223,0.5)]">
                        <h4 className="text-xl md:text-2xl lg:text-3xl  font-semibold text-[#c8d6f6] mb-3">Exploring Mobile Development</h4>
                        <p className={`text-md md:text-lg lg:text-xl ${merriweather.className}`}>
                            Then I learned <strong>React Native</strong> expanding my skills into mobile development. This journey enhanced my
                            coding capabilities and allowed me to experiment with app responsiveness and user experience.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-4xl">
                    {/* Icon */}
                    <div className="relative flex flex-col items-center">
                        <div
                            className="flex-shrink-0 p-5 rounded-full shadow-lg border-4 border-accent bg-[rgba(10,5,59,1)] text-accent"
                            style={{
                                boxShadow: "0 0 15px var(--accent), 0 0 30px var(--accent)",
                            }}
                        >
                            <FaServer className='motion-preset-blink motion-duration-2000 motion-ease-spring-bounce ' size={40} />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="bg-primary shadow-md p-6 rounded-lg flex-1 text-center md:text-right border border-[rgba(255,215,0,0.5)]">
                        <h4 className="text-xl md:text-2xl lg:text-3xl  font-semibold text-[#c8d6f6] mb-3">Full-Stack Development</h4>
                        <p className={`text-md md:text-lg lg:text-xl ${merriweather.className}`}>
                            Currently, I&apos;m learning Back-end Development to master Web Development with
                            <strong> MERN stack</strong>. My focus is building scalable, integrated web applications that solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
