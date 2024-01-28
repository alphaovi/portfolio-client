import { Link } from "react-router-dom";


const Introduction = () => {
    return (
        <div className="bg-black text-white p-16">
            <div className="lg:w-2/4 mx-auto lg:ml-12">
                <h1 className="text-8xl font-bold text-white">Hey, <br />I am  <span className="text-orange-200">Foysal Ahamed Ovi</span><span className="text-green-500">.</span></h1>
                <br />
                <h3 className="text-4xl">I'm a <span className="text-green-500 font-bold">MERN stack Developer</span></h3>
                <br />
                <p className="">As an aspiring MERN stack developer with a fervent enthusiasm for crafting compelling digital experiences. While I'm relatively new to the world of web development, my journey has been one of curiosity, exploration, and unwavering determination.
                    <br />
                    In my quest to master the art of coding, I've immersed myself in the intricacies of MongoDB, Express.js, React.js, and Node.js. These foundational technologies have become the building blocks of my budding career, offering me the tools to bring ideas to life and make meaningful contributions to the digital landscape. <br /> <br />Let's connect!</p>
                <Link ><button className="btn btn-success bg-green-600 font-bold text-white mt-5">Contact Me</button></Link>
            </div>
        </div>
    );
};

export default Introduction;