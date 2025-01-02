import { Poppins } from "next/font/google";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaFacebook, FaLocationDot } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import { SiGmail } from "react-icons/si";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

export default function ContactSection() {

    return (
        <section id="contact" className={`flex flex-col px-10 py-10 md:px-14 lg:px-18 justify-center items-center gap-10`}>
            <div className="text-center mb-8 md:mb-10 lg:mb-10 mt-12">
                <h2 className={`text-2xl font-semibold md:text-4xl lg:text-4xl ${poppins.className} text-[#00ffcc]`} style={{ textShadow: '0 4px 10px rgb(58, 154, 209)' }}>
                    Contact.
                </h2>
                <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                    <span className="h-1 bg-white w-10 md:w-16 lg:w-16"></span>
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                </div>
            </div>

            <div className={`flex flex-col gap-6`}>

                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-accent font-semibold text-center">Get In Touch</h2>

                <div className="flex justify-center gap-3">
                    <a href="https://github.com/zaidAsif" target="_blank" className="hover:text-accent">
                        <FaGithub className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" />
                    </a>
                    <a href="https://www.linkedin.com/in/mrzaidasif/" target="_blank" className="hover:text-accent">
                        <IoLogoLinkedin className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl" />
                    </a>
                    <a href="https://facebook.com" target="_blank" className="hover:text-accent">
                        <FaFacebook className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl hover:text-accent hover:shadow-[0px_0px_8px_1px_rgba(255,215,0,.6)] rounded-full" />
                    </a>
                </div>

                <div className={`flex flex-col gap-2 justify-center items-center`}>
                    <div className={`flex gap-2`}>
                        <SiGmail className={`text-2xl text-orange-500`} />
                        <span className={`text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl`}>mr.zaidasif@gmail.com</span>
                    </div>

                    <div className={`flex gap-2`}>
                        <BsFillTelephoneFill className={`text-2xl text-gray-400`} />
                        <span className={`text-lg mg:text-xl lg:text-xl xl:text-xl 2xl:text-2xl`}>(+92)333 275 4446</span>
                    </div>

                    <div className={`flex gap-2`}>
                        <FaLocationDot className={`text-2xl text-primary`} />
                        <span className={`text-lg mg:text-xl lg:text-xl xl:text-xl 2xl:text-2xl`}>Karachi, Pakistan</span>
                    </div>
                </div>

                <p className="text-center text-xl md:text-xl lg:text-2xl xl:text-2xl text-gray-400 mt-6 px-2 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                    I&apos;m open to new opportunities and collaborations. Whether it&apos;s a project or a simple hello, feel free to reach out—I’ll be happy to connect!  
                </p>



                <div className="flex justify-center items-center">
                    <a
                        href="mailto:mr.zaidasif@gmail.com"
                        className={`p-4 text-[#00ffdf] hover:bg-[#d0fff91f] active:bg-[#d0fff92e] text-md md:text-lg lg:text-lg rounded-sm`}
                        style={{
                            border: '1px solid #00ffdf', filter: 'drop-shadow(0 0 12px #00ffdf)',
                        }}
                    >
                        Say Hello
                    </a>
                </div>

            </div>
        </section>
    )
}