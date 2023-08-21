import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
	const ref = useRef();
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				ref.current,
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			);
	};

	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#00264C] flex justify-center items-center p-4"
		>
			<form
				ref={ref}
				onSubmit={handleSubmit}
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">Submit the form below !</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
					required
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Write Your Message"
					required
				/>
				<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md">
					Send
				</button>
				{success && (
					<div className="flex justify-center sm:items-center">
						<p className="text-pink-600 sm:text-2xl text-xl">
							"Your message has been sent succesfully"
						</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default Contact;
