import { Poppins } from "next/font/google";
import { FaArrowCircleRight, FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const projectsData = [
    {
        title: 'Blogit',
        description: 'Blogit is an intuitive and seamless blogging platform designed to enhance the reading and commenting experience. Built with Next.js and Firebase, this platform allows users to explore content without the need for registration. Users can easily create an account to share their thoughts via comments on blog posts. For administrators, Blogit offers a simple content management system to efficiently add, edit, or delete blog posts as needed.',
        technologies: ['Next JS', 'Daisy UI', 'Firebase'],
        imagePath: 'blogit.png',
        githubUrl: 'https://github.com/ZaidAsif/Blogit-app',
        liveUrl: 'https://next-blogit.vercel.app/'
    },
    {
        title: 'Expense Tracker',
        description: `Expense Tracker app is designed to help users efficiently manage and track their spending in real-time. Developed with Next.js and Firebase, it allows users to sign up or log in securely and easily add and categorize expenses. This app provides users with a clear overview of their financial habits. Whether you&apos;re managing a small budget or tracking larger expenditures, Expense Tracker makes it easy to stay on top of your finances.`,
        technologies: ['Next JS', 'Material UI', 'Firebase'],
        imagePath: 'expensetracker.png',
        githubUrl: 'https://github.com/ZaidAsif/Expense-Tracker',
        liveUrl: ''
    }, {
        title: 'Food Website',
        description: 'This food website is a simple yet elegant showcase of my front-end web development skills. Built using HTML, CSS, and JavaScript, it features an intuitive design with a user-friendly layout and an interactive "Add to Cart" function. The project emphasizes the journey from browsing to purchasing, offering a clean and smooth experience for users.',
        technologies: ['HTML', 'CSS', 'Javascript'],
        imagePath: 'foodwebsite.png',
        githubUrl: 'https://github.com/ZaidAsif/food-website-javascript',
        liveUrl: 'https://food-website-javascript.vercel.app/'
    }
]

export default function ProjectsSection() {

    return (
        <section id="projects" className={`flex flex-col px-10 py-10 md:px-14 lg:px-18 justify-center items-center gap-10`}>
            <div className="text-center mb-8 md:mb-10 lg:mb-10 mt-12">
                <h2 className={`text-2xl font-semibold md:text-4xl lg:text-4xl ${poppins.className} text-[#00ffcc]`} style={{ textShadow: '0 4px 10px rgb(58, 154, 209)' }}>
                    Projects.
                </h2>
                <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                    <span className="h-1 bg-white w-10 md:w-16 lg:w-16"></span>
                    <span className="h-1 bg-gray-600 w-16 md:w-20 lg:w-20"></span>
                </div>
            </div>

            <div>

                <div className={`grid gap-10 lg:grid-cold-2 xl:grid-cols-2 2xl:grid-cols-2 md:px-4 lg:px-4 xl:px-6`}>
                    {projectsData.map(({ title, description, technologies, imagePath, githubUrl, liveUrl }, index) => (
                        <div key={title + index} className={`flex flex-col justify-center items-center gap-4 px-4 py-4`} style={{ borderBottom: '2px solid gray' }}>
                            <div className={`text-2xl md:text-3xl text-center font-mono`}>
                                {title}
                            </div>

                            <img src={imagePath} alt={title} className="h-32 sm:h-40 md:h-48 lg:h-52 xl:h-56 transition-transform duration-300 hover:scale-105" />

                            <div className={`flex md:gap-4 lg:gap-6 xl:gap-8`}>
                                {technologies.map((technology) => (
                                    <div className={`rounded-3xl h-8 w-20 border-gray-500 border-2 border-solid flex justify-center items-center text-sm`} key={technology}>
                                        {technology}
                                    </div>
                                ))}
                            </div>


                            <div className={`text-md md:text-lg lg:text-lg font-sans text-center`}>
                                {description}
                            </div>

                            <div className={`flex gap-10 justify-center w-28 text-2xl md:text-3xl lg:text-3xl xl:text-4xl`}>
                                <a href={githubUrl} target="_blank"
                                >
                                    <FaGithub style={{
                                        filter: 'drop-shadow(0 0 6px rgb(219, 207, 28))',
                                    }}
                                        className="hover:text-accent"
                                    />
                                </a>

                                <a href={liveUrl}>
                                    <TbWorld style={{
                                        filter: 'drop-shadow(0 0 12px rgb(219, 207, 28))',
                                    }}
                                        className="hover:text-accent"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <div className={`flex items-center lg:gap-4 xl:gap-6 2xl:gap-8`}>
                <p className={`text-md`}>Want to explore my more projects? Check out! my github repositories.</p>
                <a href="https://github.com/ZaidAsif?tab=repositories" target="_blank"
                >
                    <FaArrowCircleRight className={`text-3xl`} />
                </a>
            </div>
        </section>
    )
}