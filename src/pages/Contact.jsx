import React from "react";
import ContactForm from "./ContactForm";
const Contact = () => {
	return (
		<div className="flex flex-col h-full px-4 md:px-14 py-20 sect-con">
			<div className="leading-relaxed">
				<h3 className="text-3xl font-bold mb-4 font-news text-dkgrey">
					Get In Touch
				</h3>
				<div className="mb-10 w-20 bg-dkgrey h-1 rounded-full"></div>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
