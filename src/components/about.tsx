'use client'

import { Roboto, Merriweather, Poppins } from 'next/font/google';

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
        <div className={`flex flex-col justify-center align-center gap-8`}>
            <h4 
                className={`group text-left text-xl font-semibold md:text-2xl ${poppins.className}`}
                style={{
                    color: '#00ffcc', textShadow: '0 4px 10px rgb(58, 154, 209)'
                }}
            >
                About Me. 
                <span className='ml-6 md:ml-0 border-[1px] block box-content relative bottom-[17px] w-[56.7%] left-[38%] border-[#303c55] md:w-[20rem] md:w-3/5'></span>

            </h4>
            <div className={`md:flex md:justify-around`}>
            <div className={`gap-4 flex flex-col md:justify-evenly`}>
                <h2 className={`text-2xl md:text-5xl text-center font-mono`}> <span className='text-red-300'>Web</span> & <span className='text-orange-300'>App</span> Developer</h2>
                <p style={{color: '#71738e'}} className={`text-xl md:text-2xl text-center font-bold  ${roboto.className}`}>I am a young ambitious teen thriving for success in this field</p>
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

        <div className="flex flex-col gap-6 md:justify-center md:items-center">
        <div className="flex flex-col gap-6 md:gap-10">
          <h3 
            className="text-2xl font-semibold text-center text-accent"
            style={{ textShadow: '0 4px 10px rgba(255, 215, 0, 0.5)' }}
          >My Journey</h3>

          <div className=''>
            <p className={`text-md md:text-lg text-right ${merriweather.className}`}>
              My journey started as a Front-End Developer where I studied HTML, CSS, and JavaScript at SMIT. These foundational
              technologies helped me build a strong understanding of web development. I then advanced my skills with React and Next.js,
              where I focused on building dynamic and responsive web applications. I am also proficient in popular libraries like
              Bootstrap and Tailwind, which help streamline the design and styling process.
            </p>
          </div>

          <div>
            <p className={`text-md md:text-lg text-left ${merriweather.className}`}>
              As I advanced my web development skills, I delved into mobile app development using React Native. Although I am not
              yet highly skilled in mobile development, my experience with React Native has allowed me to build basic cross-platform
              apps and further explore the world of mobile development.
            </p>
          </div>

          <div>
            <p className={`text-md md:text-lg text-center ${merriweather.className}`}>
              Currently, I am focusing on back-end technologies such as Express.js and MongoDB to deepen my understanding of full-stack
              development. I am building the foundation for more robust and scalable web applications, specializing in the MERN stack
              (MongoDB, Express, React, Node.js). My goal is to create well-rounded, dynamic applications with both front-end and
              back-end integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
