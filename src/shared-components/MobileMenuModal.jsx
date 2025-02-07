import { motion } from "framer-motion";
import React, { useRef } from "react";
import { navbarLinks } from "./util";
import { Link } from "react-router-dom";
import clsx from "clsx";

const MobileMenuModal = ({ isOpen, handleClose }) => {
	const backgroundRef = useRef();
	if (!isOpen) {
		return null;
	}

	return (
		<div
			ref={backgroundRef}
			onClick={(e) => {
				if (e.target === backgroundRef.current) {
					handleClose();
				}
			}}
			className="fixed top-28 right-0 w-full h-[72%] font-lato z-20 bg-sec p-4">
			<motion.div
				initial={{ translateX: "100%" }}
				animate={{ translateX: 0 }}
				transition={{ duration: 0.5 }}
				className="h-full bg-bkgrd w-full max-w-lg flex flex-col pb-8 text-dkgrey items-center">
				<div
					className="w-1/2 flex justify-center items-center mb-4"
					data-img-url="assets/img/about/1.jpg">
					<img
						src="https://res.cloudinary.com/dzgmrgcuo/image/upload/v1738956878/AI_avi_icfhyq.webp"
						alt=""
					/>
				</div>
				<ul className="font-medium w-full">
					{navbarLinks.map((navbarLink, idx) => (
						<li
							key={idx}
							className={clsx(
								"font-medium  transition-all duration-300 hover:text-mainBg hover:bg-dkgrey w-full text-center my-4 px-6 py-2",
								location.pathname === navbarLink.route &&
									"bg-dkgrey text-mainBg"
							)}>
							<Link
								onClick={() => {
									setActiveSection(navbarLink.name);
									handleClose();
								}}
								to={navbarLink.route}>
								{navbarLink.name}
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</div>
	);
};

export default MobileMenuModal;
