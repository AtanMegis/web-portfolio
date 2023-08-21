import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Footer = () => {
	return (
		<div className="lg:hidden lg:bottom-0 w-full h-auto flex flex-col gap-2  justify-center items-center bg-[#00264C]  text-gray-300 shadow-inner shadow-blue-500/50 z-100 ">
			<div className="flex justify-center items-center font-bold py-4">
				Visit Here !
			</div>
			<div className="flex flex-row gap-10 justify-center items-center mb-6">
				<div className="flex flex-col justify-center items-center">
					LinkedIn
					<a
						href="https://www.linkedin.com/in/christian-megis/"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin size={50} />
					</a>
				</div>
				<div className="flex flex-col justify-center items-center">
					<a
						href="https://github.com/AtanMegis"
						target="_blank"
						rel="noreferrer"
					>
						Github
						<FaGithub size={50} />
					</a>
				</div>
				<div className="flex flex-col justify-center items-center">
					<a
						href="https://drive.google.com/drive/folders/1IjnBwXC02HvB9CAeVqXnpVbbloQcXlHj"
						target="_blank"
						rel="noreferrer"
					>
						Resume
						<IoDocumentText size={50} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
