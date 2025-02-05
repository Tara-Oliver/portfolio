import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "./util";
import clsx from "clsx";
import MobileMenuModal from "./MobileMenuModal";
// import { Link } from "react-router-dom";
MobileMenuModal;

const Navbar = ({ setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => {
	// const location = useLocation();
	const { pathname } = useLocation();

	return (
		<div className="min-h-[10%] flex items-center justify-between py-6 md:py-0 md:px-16 px-4 bg-mainBg">
			<div className="logo" data-type="image">
				{" "}
				<img
					className="max-w-[95px] md:max-w-[110px] max-h-[50px]"
					src="/src/assets/initial_logo.png"
					alt="image"
				/>
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
			</div>
			<MobileMenuModal
				isOpen={mobileMenuOpen}
				handleClose={() => setMobileMenuOpen(false)}
				setActiveSection={setActiveSection}
			/>
		</div>
	);
};

export default Navbar;
