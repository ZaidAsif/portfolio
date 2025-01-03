import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                    <Navbar />
        {children}
      </body>
    </html>
  );
}



















// 'use client'
// import { Typewriter } from 'react-simple-typewriter';
// import { Roboto, Playfair_Display } from 'next/font/google';
// import { FaGithub, FaFacebook, FaLinkedin   } from "react-icons/fa6";
// import { IoLogoLinkedin } from "react-icons/io5";




// const roboto = Roboto({
//     subsets: ['latin'],
//     weight: ['400', '700'], // Regular and Bold
//   });
  
//   // Playfair Display Font Configuration
//   const playfair = Playfair_Display({
//     subsets: ['latin'],
//     weight: ['400', '700'], // Regular and Bold
//   });
// export default function HomeSection() {
    

//     return (
//         <div className={`z-0 pl-6 flex flex-wrap ml-2 h-screen w-full`}>
//             <div className={`  text-left p-20 flex-col justify-start justify-items-center w-full flex gap-8 h-16 motion-preset-slide-down `}>
//                 <div style={{'color': '#00ffd9',
//                     textShadow: "2px 2px 4px rgba(134, 219, 219, 0.6)"
//                 }} className={`text-3xl w-full font-semibold ${roboto.className} text-primary`}>Hello, Myself</div>
//                 <div style={{  
//                      color: "#DCE4FF",
//                      textShadow: "2px 2px 4px rgba(165, 159, 159, 0.6)",
//                 }} className={`text-5xl w-full ${roboto.className} font-semibold`}>Zaid Asif</div>
//                 <div className={`w-full ${playfair.className}`}>
//                     <span className={`text-2xl`}>I'm a </span>
//                     <span className={`text-2xl font-serif italic`}>
//                     <Typewriter
//             words={[ 'Front End Developer', 'Back End Developer', 'Mobile App Developer']}
//             loop={0} 
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={100}
//             delaySpeed={1200}
//           />
//                     </span>
//                 </div>
//             </div>
//             <div className={`w-26 p-20 text-20 motion-preset-slide-right motion-duration-200`}>
//                 <img className={`opacity-100 md:opacity-100 lg:opacity-100 w-30 h-30`} src="https://firebasestorage.googleapis.com/v0/b/nextjs-with-firebase-935b3.appspot.com/o/images%2Fcoderboy.gif?alt=media&token=10e04cfe-2180-49b9-8700-8ea76f9fddc1" alt="coding-boy" />

//                 <div className={`mt-10 flex justify-center gap-10`}>
//                 <a href="">
//                 <FaGithub className={`text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full`} />
//                 </a>

//                 <a href="" className=''>
//                 <IoLogoLinkedin className={`text-4xl hover:text-accent hover:shadow-[0px_0px_-10px_1px_rgba(255,215,0,.6)]`} />
//                 </a>
                
//                 <a href="">
//                 <FaFacebook className={`text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full`} />
//                 </a>
//                 </div>
//             </div>

//         </div>
//     )
// }