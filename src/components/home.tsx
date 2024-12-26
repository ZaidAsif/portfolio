'use client'
// import { Typewriter } from 'react-simple-typewriter';
// import { Roboto, Playfair_Display } from 'next/font/google';
// import { FaGithub, FaFacebook } from "react-icons/fa6";
// import { IoLogoLinkedin } from "react-icons/io5";

// const roboto = Roboto({
//     subsets: ['latin'],
//     weight: ['400', '700'],
// });

// const playfair = Playfair_Display({
//     subsets: ['latin'],
//     weight: ['400', '700'],
// });

// export default function HomeSection() {
//     return (
//         <div className="z-10 flex flex-col items-center justify-center h-screen w-full gap-8"> {/* Centering all content vertically */}

//             {/* Main Content: Hello, Myself, Name, and Typewriter */}
//             <div className="text-left px-4 sm:px-10 md:px-20 lg:px-20 flex-col justify-start w-full flex gap-6 md:gap-10 lg:gap-12 h-auto">
//                 {/* Mobile-only Image */}
//                 <img className="sm:block md:hidden lg:hidden w-full h-auto opacity-100" src="https://firebasestorage.googleapis.com/v0/b/nextjs-with-firebase-935b3.appspot.com/o/images%2Fcoderboy.gif?alt=media&token=10e04cfe-2180-49b9-8700-8ea76f9fddc1" alt="coding-boy" />

//                 {/* Hello, Myself Text */}
//                 <div 
//                     style={{ color: '#00ffd9', textShadow: "2px 2px 4px rgba(134, 219, 219, 0.6)" }}
//                     className={`motion-preset-slide-right motion-delay-300 text-3xl md:text-4xl lg:text-5xl font-semibold ${roboto.className} text-primary`}
//                 >
//                     Hello, Myself
//                 </div>

//                 {/* Name Text */}
//                 <div 
//                     style={{ color: "#DCE4FF", textShadow: "2px 2px 4px rgba(165, 159, 159, 0.6)" }} 
//                     className={`motion-preset-pop motion-delay-1000 text-5xl md:text-7xl lg:text-7xl font-semibold ${roboto.className}`}
//                 >
//                     Zaid Asif
//                 </div>

//                 {/* Typewriter Effect */}
//                 <div className={`w-full ${playfair.className} motion-preset-slide-down motion-delay-1500`}>
//                     <span className="text-4xl md:text-6xl lg:text-6xl">I'm a </span>
//                     <span className="text-4xl md:text-6xl lg:text-6xl font-serif italic">
//                         <Typewriter
//                             words={['Front End Dev', 'Back End Dev', 'Mobile App Dev']}
//                             loop={0}
//                             cursor
//                             cursorStyle="|"
//                             typeSpeed={100}
//                             deleteSpeed={80}
//                         />
//                     </span>
//                 </div>
//             </div>

//             {/* Social Media Icons */}
//             <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
//                 <a href="https://github.com/zaidAsif" target="_blank">
//                     <FaGithub className="text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" />
//                 </a>
//                 <a href="https://www.linkedin.com/in/mrzaidasif/" target="_blank">
//                     <IoLogoLinkedin className="text-4xl hover:text-accent hover:shadow-[0px_0px_-10px_1px_rgba(255,215,0,.6)]" />
//                 </a>
//                 <a href="">
//                     <FaFacebook className="text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" />
//                 </a>
//             </div>
//         </div>
//     );
// }






import { Typewriter } from 'react-simple-typewriter';
import { Roboto, Playfair_Display } from 'next/font/google';
import { FaGithub, FaFacebook } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';

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
        <header className="bg-gradient-to-b from-background to-primary text-foreground">
            {/* Main Text Content */}
            <div className={`flex flex-col items-center justify-center h-screen w-full gap-8 motion-preset-slide-down motion-delay-1500`}>
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
                <p className={`text-2xl md:text-4xl mt-4`}>
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

            {/* Simple Illustration or Image */}
            <div className="flex justify-center w-3/4 md:w-2/4 lg:w-1/3 mt-8">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/nextjs-with-firebase-935b3.appspot.com/o/images%2Fcoderboy.gif?alt=media&token=10e04cfe-2180-49b9-8700-8ea76f9fddc1"
                    alt="A person coding"
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6 mt-8">
                <a href="https://github.com/zaidAsif" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/mrzaidasif/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    <IoLogoLinkedin className="text-3xl" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    <FaFacebook className="text-3xl" />
                </a>
            </div>
            </div>
        </header>
    );
}
