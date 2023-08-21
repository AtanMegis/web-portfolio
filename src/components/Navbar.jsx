import React, { useState } from "react";
import logo from "../assets/logo.PNG";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center pr-8 bg-[#00264C]  text-gray-300 shadow-lg shadow-blue-500/50 z-100">
			<div>
				<img src={logo} alt="tai" style={{ height: "120px", width: "auto" }} />
			</div>

			{/* menu */}
			<ul className="hidden md:flex gap-4">
				<Link to="home" duration={300} smooth={true}>
					<li className="font-bold hover:border-b-2 py-2 hover:text-orange-700 transition-all duration-200">
						Home
					</li>
				</Link>
				<Link to="about" duration={300} smooth={true}>
					<li className="font-bold hover:border-b-2 py-2 hover:text-orange-700 transition-all duration-200">
						About Me
					</li>
				</Link>
				<Link to="skills" duration={300} smooth={true}>
					<li className="font-bold hover:border-b-2 py-2 hover:text-orange-700 transition-all duration-200">
						Skills
					</li>
				</Link>
				<Link to="projects" duration={300} smooth={true}>
					<li className="font-bold hover:border-b-2 py-2 hover:text-orange-700 transition-all duration-200">
						Projects
					</li>
				</Link>
				<Link to="contact" duration={300} smooth={true}>
					<li className="font-bold hover:border-b-2 py-2 hover:text-orange-700 transition-all duration-200">
						Contact
					</li>
				</Link>
			</ul>

			{/* menu */}

			{/* hamburger */}
			<div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
				{!nav ? <FaBars size={"20px"} /> : <FaTimes size={"25px"} />}
			</div>
			{/* hamburger */}

			{/* Mobile Menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen flex  flex-col bg-[#00264C]  justify-center items-center"
				}
			>
				<Link onClick={handleClick} to="home" duration={300} smooth={true}>
					<li className="py-5 text-3xl">Home</li>
				</Link>
				<Link onClick={handleClick} to="about" duration={300} smooth={true}>
					<li className="py-5 text-3xl">About Me</li>
				</Link>
				<Link onClick={handleClick} to="skills" duration={300} smooth={true}>
					<li className="py-5 text-3xl">Skills</li>
				</Link>
				<Link onClick={handleClick} to="projects" duration={300} smooth={true}>
					<li className="py-5 text-3xl">Projects</li>
				</Link>
				<Link onClick={handleClick} to="contact" duration={300} smooth={true}>
					<li className="py-5 text-3xl">Contact</li>
				</Link>
			</ul>
			{/* Mobile Menu */}

			<ul className="hidden lg:flex fixed flex-col top-[40%] left-0">
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-t-md ">
					<a
						href="https://www.linkedin.com/in/christian-megis"
						target="_blank"
						rel="noreferrer"
						className="flex justify-between items-center w-full text-gray-300 font-bold"
					>
						LinkedIn <FaLinkedin size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
					<a
						href="https://github.com/AtanMegis"
						target="_blank"
						rel="noreferrer"
						className="flex justify-between items-center w-full text-gray-300 font-bold "
					>
						Github <FaGithub size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-b-md">
					<a
						href="https://drive.google.com/drive/folders/1IjnBwXC02HvB9CAeVqXnpVbbloQcXlHj"
						target="_blank"
						rel="noreferrer"
						className="flex justify-between items-center w-full text-gray-300 font-bold "
					>
						Resume <IoDocumentText size={30} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
