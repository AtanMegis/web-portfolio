import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#00264C] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About Me
						</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hi. I'm Christian Megis, nice to meet you.</p>
						<p>Feel free to explore.</p>
					</div>
					<div>
						<p className="text-lg">
							I'm a recent IT college graduate with a strong sense of discipline
							and responsibility. My vigorous approach to challenges and my
							excitement for learning new things have been key drivers in my
							academic and personal journey. I am eager to channel these
							qualities into my professional endeavors, contributing effectively
							to teams and embracing continuous growth.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
