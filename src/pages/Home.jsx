import React from "react";
import { Link } from "react-router-dom";
import "../../animate.css";
const Home = ({ mobileMenuOpen, setActiveSection }) => {
	return (
		<div className="flex flex-col justify-center h-full md:pl-14 sect-con items-center md:items-start">
			<h3 className="text-4xl md:text-6xl font-bold mb-6 font-news">
				Tara Oliver
			</h3>
			<div className="mb-10 w-20 bg-dkgrey h-1 rounded-full"></div>

			<div className="flex w-full md:w-auto justify-center md:justify-start">
				{!mobileMenuOpen && (
					<div className="dropping-texts md:text-2xl text-xl capitalize font-medium  w-full h-9">
						<div className="absolute text-center md:w-auto w-full">
							Proactive Problem Solver
						</div>
						<div className="absolute  text-center md:w-auto w-full">
							Detail-oriented Professional
						</div>
						<div className="absolute  text-center md:w-auto w-full">
							Collaborative Team Player
						</div>
						<div className="absolute  text-center md:w-auto w-full">
							Analytical Thinker
						</div>
					</div>
				)}
			</div>

			<div className="my-8">
				<Link
					onClick={() => setActiveSection("contact")}
					to="/contact"
					className="font-semibold px-8 bg-dkgrey py-3 text-mainBg transition-all ease-in-out duration-300  border-2 border-dkgrey hover:bg-sec rounded-full hover:text-dkgrey">
					Get in Touch
				</Link>
			</div>
		</div>
	);
};

export default Home;
