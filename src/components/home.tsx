'use client'

import { Typewriter } from 'react-simple-typewriter';
import { Roboto, Playfair_Display } from 'next/font/google';
import { FaGithub, FaFacebook } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';



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
    <header className="z-10 bg-gradient-to-b from-background to-primary text-foreground">
      <div className={`flex flex-col items-center justify-center h-screen w-full gap-8 motion-preset-slide-down motion-delay-2000`}>
        <div className="text-center px-6 md:px-16">
          <h1
            className={`text-5xl md:text-7xl font-bold ${roboto.className}`}
            style={{ color: '#00ffcc', textShadow: '0 4px 10px rgba(0, 255, 204, 0.5)' }}
          >
            Hi, Myself
          </h1>
          <h2
            className={`text-6xl md:text-8xl font-extrabold ${playfair.className}`}
            style={{ color: '#ffd700', textShadow: '0 4px 10px rgba(255, 215, 0, 0.5)' }}
          >
            Zaid Asif
          </h2>
          <p className={`text-2xl md:text-4xl mt-4 lg:text-5xl`}>
            <span className={``}>A </span>
            <span>
              <Typewriter
                words={['Front End Developer', 'Back End Developer', 'Mobile App Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
              />
            </span>
          </p>
        </div>

        <div className="flex justify-center w-3/4 md:w-2/4 lg:w-1/3 mt-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nextjs-with-firebase-935b3.appspot.com/o/images%2Fcoderboy.gif?alt=media&token=10e04cfe-2180-49b9-8700-8ea76f9fddc1"
            alt="A person coding"
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        <div className="flex gap-6 mt-8">
          <a href="https://github.com/zaidAsif" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaGithub className="text-3xl md:text-4xl lg:text-5xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/mrzaidasif/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <IoLogoLinkedin className="text-3xl md:text-4xl lg:text-5xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaFacebook className="text-3xl md:text-4xl lg:text-5xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" />
          </a>
        </div>
      </div>

      <div className="absolute top-24 left-28 z-20 hidden md:block lg:block motion-preset-expand motion-delay-500">
        <div className="sticky top-0 space-y-6">
          <div className="animate-float">
            <FaCss3Alt 
                className="text-5xl text-blue-600" 
                style={{
                    filter: 'drop-shadow(0 0 15px rgba(0, 255, 204, 0.8))',
                  }}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-2/3 right-2/3 z-20 hidden md:block lg:block motion-preset-expand motion-delay-500">
        <div className="sticky top-0 space-y-6">
          <div className="animate-float">
          <FaHtml5 
            className="text-5xl text-orange-600"
            style={{
                filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))',
              }} 
          />
          </div>
        </div>
      </div>
      
      <div className="absolute top-24 right-28 z-20 hidden md:block lg:block motion-preset-expand motion-delay-500">
        <div className="sticky top-0 space-y-6">
          <div className="animate-float">
            <FaReact 
                className="text-5xl text-blue-500" 
                style={{
                    filter: 'drop-shadow(0 0 15px rgba(0, 255, 204, 0.8))',
                  }}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-2/3 left-2/3 z-20 hidden md:block lg:block motion-preset-expand motion-delay-500">
        <div className="sticky top-0 space-y-6">
          <div className="animate-float">
            <FaJsSquare 
                className="text-5xl text-yellow-500" 
                style={{
                    filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))',
                  }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
