import { BsTerminal } from "react-icons/bs";



const About = () => {
    return (
        <div className="bg-black text-white p-16 ">
            <div className="lg:w-2/4 mx-auto lg:ml-12 flex items-center">
                <h3 className="text-6xl font-bold mr-4">About<span className="text-green-500">.</span></h3>
                <div className="border border-gray-400 h-px flex-grow w-full"></div>
            </div>
            <div className="p-16 flex flex-row ">
                <div className="w-1/2">
                    <p><span className="text-2xl">Hey,</span> <br />
                        I'm Foysal Ahamed Ovi, a MERN stack developer on a mission to blend innovation with functionality in the digital realm. With 1 year of immersion in web development, I've honed my skills to craft immersive user experiences that resonate with audiences worldwide.
                        <br />
                        <br />
                        My journey into the world of software engineering has been one of exploration and evolution. From the intricate architecture of backend systems to the pixel-perfect precision of frontend design, I find beauty in the harmony of form and function.
                        <br />
                        <br />
                        In my coding odyssey, I've embraced the versatility of MongoDB, the flexibility of Express.js, the dynamism of React.js, and the robustness of Node.js. Together, these tools have empowered me to breathe life into ideas, transforming concepts into tangible realities that drive tangible results.
                        <br />
                        <br />
                        Collaboration lies at the heart of my approach. I thrive in environments where ideas flow freely, where each line of code is a testament to collective ingenuity. Through effective communication and unwavering dedication, I've had the privilege of being part of teams that redefine what's possible in the digital landscape.
                        <br />
                        <br />
                        Beyond the confines of code, I'm driven by a desire to innovate, to challenge the status quo, and to leave a lasting imprint on the world we inhabit. I believe that technology, when wielded with purpose and passion, has the power to transcend boundaries and shape the future.
                        <br />
                        <br />
                        Looking forward to the adventure ahead!</p>
                </div>
                <div className="w-1/2 text-center">
                    <div>
                        <p className="font-bold text-2xl underline">Use At Work</p>
                    </div>
                    <div className="mt-5 ml-48 grid grid-cols-3 gap-4">
                        <p className="font-bold border-4 rounded-full border-gray-600">JavaScript</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">TypeScript</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Node JS</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">React JS</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Redux</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Express JS</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">MongoDB</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Firebase</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Github</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Netlify</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Html</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">CSS</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Tailwind CSS</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Material UI</p>
                        <p className="font-bold border-4 rounded-full border-gray-600">Chakra UI</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;