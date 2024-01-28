import { Link } from "react-router-dom";
import { SiMinutemailer } from "react-icons/si";
const Contact = () => {
    return (
        <div className="bg-black">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-white">Contact<span className="text-green-500">.</span></h1>
                <p className="text-white mt-5">Shoot me an email if you want to connect! You can also find me on <span className="text-green-500"><Link to={"https://www.linkedin.com/in/foysalahamedovi/"}>Linkedin</Link></span> or
                    <br />
                    <span className="text-green-500"><Link to={"https://twitter.com/FoysalAhamedOvi"}>Twitter </Link></span>if that's more your speed.</p>
            </div>
            <div className="text-center mt-8 flex flex-row justify-center">
                <div className="text-4xl text-white mr-5">
                    <SiMinutemailer />
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-96 text-white">foysalahamedovi03@outlook.com</h2>
                </div>
            </div>



        </div>
    );
};

export default Contact;