import { motion } from "framer-motion";
import React, { useRef } from "react";
import { navbarLinks } from "./util";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { RemoveScroll } from "react-remove-scroll";

const MobileMenuModal = ({ isOpen, handleClose }) => {
	const backgroundRef = useRef();
	if (!isOpen) {
		return null;
	}

	return (
		<RemoveScroll>
			<div
				ref={backgroundRef}
				onClick={(e) => {
					if (e.target === backgroundRef.current) {
						handleClose();
					}
				}}
				className="fixed top-24 right-0 w-full h-full font-lato z-20 bg-sec p-4">
				<motion.div
					initial={{ translateX: "100%" }}
					animate={{ translateX: 0 }}
					transition={{ duration: 0.5 }}
					className="h-full bg-bkgrd w-full max-w-lg flex flex-col text-dkgrey items-center">
					<div
						className="w-1/2 flex justify-center items-center mb-2"
						data-img-url="assets/img/about/1.jpg">
						<img
							src="https://res.cloudinary.com/dzgmrgcuo/image/upload/v1738964699/avi_mrqhbh.png"
							alt=""
						/>
					</div>
					<ul className="font-medium w-full flex flex-col">
						{navbarLinks.map((navbarLink, idx) => (
							<Link
								key={idx}
								className={clsx(
									"font-medium  hover:text-mainBg hover:bg-dkgrey w-full text-center my-2 px-6 py-2",
									location.pathname === navbarLink.route &&
										"bg-dkgrey text-mainBg"
								)}
								onClick={() => {
									setActiveSection(navbarLink.name);
									handleClose();
								}}
								to={navbarLink.route}>
								{navbarLink.name}
							</Link>
						))}
					</ul>
				</motion.div>{" "}
			</div>
		</RemoveScroll>
	);
};

export default MobileMenuModal;
