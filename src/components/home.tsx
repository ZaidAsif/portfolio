'use client'
import { Typewriter } from 'react-simple-typewriter';
import { Roboto, Playfair_Display } from 'next/font/google';
import { FaGithub, FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function HomeSection() {
    return (
        <div className="z-10 flex flex-wrap h-screen w-full gap-8 "> 
            <div className="text-left ml-4 md:ml-20 lg:ml-20 p-20 flex-col justify-start justify-items-center w-full flex gap-10 md:gap-12 lg:gap-12 h-16">
            <img className="motion-preset-slide-right motion-delay-300 opacity-100 md:opacity-0 lg:opacity-0" src="https://firebasestorage.googleapis.com/v0/b/nextjs-with-firebase-935b3.appspot.com/o/images%2Fcoderboy.gif?alt=media&token=10e04cfe-2180-49b9-8700-8ea76f9fddc1" alt="coding-boy" />

                <div style={{ color: '#00ffd9', textShadow: "2px 2px 4px rgba(134, 219, 219, 0.6)" }} className={`motion-preset-slide-right motion-delay-300 text-3xl w-full font-semibold md:text-4xl lg:text-4xl ${roboto.className} text-primary`}>
                    Hello, Myself
                </div>
                <div style={{ color: "#DCE4FF", textShadow: "2px 2px 4px rgba(165, 159, 159, 0.6)" }} className={`motion-preset-pop motion-delay-1000 text-5xl w-full md:text-7xl lg:text-7xl ${roboto.className} font-semibold`}>
                    Zaid Asif
                </div>
                <div className={`w-full ${playfair.className} motion-preset-slide-down motion-delay-1500`}>
                    <span className="text-4xl md:text-6xl lg:text-6xl">I&apos;m a </span>
                    <span className="text-4xl md:text-6xl lg:text-6xl font-serif italic">
                        <Typewriter
                            words={['Front End Dev', 'Back End Dev', 'Mobile App Dev']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={80}
                        />
                    </span>
                </div>
            </div>

            <div className="p-20 flex-1 text-20 motion-preset-slide-down motion-delay-1500">
                <div className="mt-20 flex justify-center gap-8">
                    <a href="https://github.com/zaidAsif" target="_blank"><FaGithub className="text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" /></a>
                    <a href="https://www.linkedin.com/in/mrzaidasif/" target="_blank"><IoLogoLinkedin className="text-4xl hover:text-accent hover:shadow-[0px_0px_-10px_1px_rgba(255,215,0,.6)]" /></a>
                    <a href=""><FaFacebook className="text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" /></a>
                </div>
            </div>
        </div>
    );
}
