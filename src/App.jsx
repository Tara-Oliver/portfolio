import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./shared-components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	const renderContent = () => {
		switch (activeSection) {
			case "about":
				return <About mobileMenuOpen={mobileMenuOpen} />;
			case "home":
				return <Home mobileMenuOpen={mobileMenuOpen} />;
			case "contact":
				return <Contact />;
			case "portfolio":
				return <Portfolio />;
			default:
				return <Home mobileMenuOpen={mobileMenuOpen} />;
		}
	};

	useEffect(() => {
		const newStr = location.pathname.replace(/\//g, "");

		setActiveSection(newStr);
	}, []);

	return (
		<BrowserRouter basename="/">
			<div className="h-screen w-screen flex flex-col font-inter text-dkgrey">
				<Navbar
					setActiveSection={setActiveSection}
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
					className="shrink-0"
				/>

				<div className="flex flex-1 h-0">
					<div className="hidden md:flex w-2/5 h-full">
						<div className="left_col bg-mainBg w-16"></div>
						<div className="img flex-1">
							<img
								src="https://res.cloudinary.com/dzgmrgcuo/image/upload/v1738964699/avi_mrqhbh.png"
								alt="Image Description"
								className="object-cover object-center h-full w-full"
							/>
						</div>
					</div>
					<div className="flex w-full md:w-3/5 h-full">
						<div className="content flex-1 bg-sec overflow-auto max-h-full text-wrap z-0">
							{renderContent()}
						</div>
						<div className="right_col bg-mainBg w-16 md:block hidden"></div>
					</div>
				</div>

				<div className="footer min-h-[10%] md:flex hidden items-center justify-center py-6 md:py-0 md:px-16 px-4 bg-mainBg text-center text-2xl">
					<Link to="https://www.linkedin.com/in/tara-oliver">
						<i className="fa-brands fa-linkedin mr-3"></i>
					</Link>
					<Link to="https://github.com/Tara-Oliver/">
						{" "}
						<i className="fa-brands fa-github"></i>
					</Link>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
