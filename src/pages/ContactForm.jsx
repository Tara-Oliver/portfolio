import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { useNavigate } from "react-router-dom"; // Import useNavigate

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const templateParams = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};

		emailjs
			.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_USER_ID
			)
			.then(
				(result) => {
					console.log("Email successfully sent!", result.text);
					navigate("/Confirmation");
				},
				(error) => {
					console.error("Error sending email:", error.text);
				}
			);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
		sendEmail(e);
	};

	return (
		<section
			className="p-8 text-center w-full mb-4 mr-8 font-inter bg-[rgba(0,0,0,.05)] rounded-2xl"
			id="contactForm">
			{/* <h2 className="text-2xl font-bold mb-4 tracking-tight">Get in Touch</h2> */}
			<form
				className="text-dkblue max-w-xl mx-auto space-y-4 "
				onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					className="w-full p-3 bg-transparent focus:outline-none focus:border-dkgrey border-b-2 border-[#a09389] placeholder:text-[#a09389] focus:placeholder:text-dkgrey"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					className="w-full p-3 bg-transparent focus:outline-none focus:border-dkgrey border-b-2 border-[#a09389] placeholder:text-[#a09389] focus:placeholder:text-dkgrey"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<textarea
					required
					name="message"
					className="w-full p-3 bg-transparent focus:outline-none  placeholder:text-[#a09389] focus:placeholder:text-dkgrey"
					rows="5"
					placeholder="Message"
					value={formData.message}
					onChange={handleChange}></textarea>
				<button
					type="submit"
					className="font-semibold px-8 bg-dkgrey py-3 text-mainBg transition-all ease-in-out duration-300  border-2 border-dkgrey hover:bg-sec rounded-full hover:text-dkgrey">
					Send Message
				</button>
			</form>
		</section>
	);
};

export default ContactForm;
