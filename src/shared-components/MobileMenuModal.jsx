import { motion } from "framer-motion";
import React, { useRef } from "react";
import { navbarLinks } from "./util";
import { Link } from "react-router-dom";
import clsx from "clsx";
// import { RemoveScroll } from "react-remove-scroll";

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
					// console.log("modalClosed");
				}
			}}
			className="fixed top-28 right-0 w-2/5 h-auto font-lato z-20 bg-sec p-4">
			<motion.div
				initial={{ translateX: "100%" }}
				animate={{ translateX: 0 }}
				transition={{ duration: 0.5 }}
				className="h-full bg-bkgrd w-full max-w-lg flex flex-col pb-8 text-dkgrey items-end">
				{/* <motion.button
					className="z-10 p-2"
					onClick={handleClose}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}>
					<i className="text-3xl fa-solid fa-xmark text-dkgrey"></i>
				</motion.button> */}
				<div
					className="w-full flex justify-center items-center mb-4"
					data-img-url="assets/img/about/1.jpg">
					<img src="/src/assets/AI_avi.png" alt="" />
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
							<Link to={navbarLink.route}>{navbarLink.name}</Link>
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
			</motion.div>
		</div>
	);
};

export default MobileMenuModal;
