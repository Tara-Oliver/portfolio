import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "./util";
import clsx from "clsx";
import MobileMenuModal from "./MobileMenuModal";
// import { Link } from "react-router-dom";
MobileMenuModal;

const Navbar = ({ setActiveSection }) => {
	// const location = useLocation();
	const { pathname } = useLocation();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-[10%] flex items-center justify-between py-6 md:py-0 md:px-16 px-4 bg-mainBg">
			<div className="logo" data-type="image">
				{" "}
				{/* <a className="image" href="#"> */}
				<img
					className="max-w-[95px] md:max-w-[110px] max-h-[50px]"
					src="/src/assets/initial_logo.png"
					alt="image"
				/>
				{/* </a> */}
				{/* <a
					className="text no-underline text-dkgrey uppercase font-poppins text-[25px] font-extrabold tracking-[2px] leading-[70px]"
					href="#">
					<span className="relative top-[2px]">Cavani</span>
				</a> */}
			</div>
			<div className="menu relative">
				<ul className="font-medium  md:flex gap-x-2 hidden">
					{navbarLinks.map((navbarLink, idx) => (
						<li key={idx}>
							<Link
								onClick={() => setActiveSection(navbarLink.name)}
								className={clsx(
									"font-medium py-2 px-6 transition-all duration-300 hover:text-mainBg hover:bg-dkgrey rounded-full capitalize",
									pathname === navbarLink.route && "bg-dkgrey text-mainBg"
								)}
								to={navbarLink.route}>
								{navbarLink.name}
							</Link>
						</li>
					))}
					{/* <li className="">
						<Link

							className={clsx(
								"font-medium py-2 px-6 transition-all duration-300 hover:text-mainBg hover:bg-dkgrey",
								location.pathname === "/" && "bg-dkgrey text-mainBg"
							)}
							to="/">
							Home
						</Link>
					</li> */}
					{/* <li className=" ">
						<Link

							className={clsx(
								"font-medium py-2 px-6 transition-all duration-300 hover:text-mainBg hover:bg-dkgrey",
								location.pathname === "/about" && "bg-dkgrey text-mainBg"
							)}
							to="/about">
							About
						</Link>
					</li> */}
					{/* <li className=" ">


						<Link

							className={clsx(
								"font-medium py-2 px-6 transition-all duration-300 hover:text-mainBg hover:bg-dkgrey",
								location.pathname === "/portfolio" && "bg-dkgrey text-mainBg"
							)}
							to="/portfolio">
							Portfolio
						</Link>
					</li> */}
					{/* <li className=" ">


						<Link

							className={clsx(
								"font-medium py-2 px-6 transition-all duration-300 hover:text-mainBg hover:bg-dkgrey",
								location.pathname === "/service" && "bg-dkgrey text-mainBg"
							)}
							to="/service">
							Service
						</Link>
					</li> */}

					{/* <li className=" ">


						<Link

							className={clsx(
								"font-medium py-2 px-6 transition-all duration-300 hover:text-mainBg hover:bg-dkgrey",
								location.pathname === "/contact" && "bg-dkgrey text-mainBg"
							)}
							to="/contact">
							Contact
						</Link>
					</li> */}
				</ul>
				<button
					className="text-4xl flex md:hidden transition-all linear duration-300 z-10"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? (
						<i className="fa-solid fa-xmark"></i>
					) : (
						<i className="fa-solid fa-bars"></i>
					)}
				</button>
				{/* <span className="ccc absolute block top-[15px] bottom-[15px] bg-[#333] z-[-1] transition-all duration-500"></span> */}
			</div>
			<MobileMenuModal
				isOpen={mobileMenuOpen}
				handleClose={() => setMobileMenuOpen(false)}
			/>
		</div>
	);
};

export default Navbar;
