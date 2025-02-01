import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Footer from "./shared-components/Footer";
import Navbar from "./shared-components/Navbar";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Service from "./pages/Service";
import Contact from "./pages/Contact";

const App = () => {
	// const location = useLocation();

	const [activeSection, setActiveSection] = useState("home");

	const renderContent = () => {
		switch (activeSection) {
			case "about":
				return <About />;
			case "home":
				return <Home />;
			case "contact":
				return <Contact />;
			case "portfolio":
				return <Portfolio />;
			default:
				return <Home />;
		}
	};

	useEffect(() => {
		const newStr = location.pathname.replace(/\//g, "");
		// console.log(newStr);
		setActiveSection(newStr);
	}, []);

	return (
		<BrowserRouter basename="/">
			{/* <ScrollToTop> */}
			<div className="h-screen w-screen flex flex-col font-inter text-dkgrey">
				<Navbar setActiveSection={setActiveSection} className="shrink-0" />

				<div className="flex flex-1 h-0">
					<div className="hidden md:flex w-2/5 h-full">
						<div className="left_col bg-mainBg w-16"></div>
						<div className="img flex-1">
							<img
								src="/src/assets/AI_avi.png"
								alt="Image Description"
								className="object-cover object-center h-full w-full"
							/>
						</div>
					</div>
					<div className="flex w-full md:w-3/5 h-full">
						<div className="content flex-1 bg-sec overflow-auto max-h-full text-wrap">
							{renderContent()}
						</div>
						<div className="right_col bg-mainBg w-16 md:block hidden"></div>
					</div>
				</div>

				<div className="footer min-h-[10%] flex items-center justify-center py-6 md:py-0 md:px-16 px-4 bg-mainBg text-center text-2xl">
					<Link to="https://www.linkedin.com/in/tara-oliver">
						<i className="fa-brands fa-linkedin mr-3"></i>
					</Link>
					<Link to="https://github.com/Tara-Oliver/">
						{" "}
						<i className="fa-brands fa-github"></i>
					</Link>
				</div>
			</div>
			{/* </ScrollToTop> */}
		</BrowserRouter>
	);
};

export default App;

{
	/* <Navbar setActiveSection={setActiveSection} />
			<div className="bg-sec cavani_tm_mainpart absolute inset-[70px]  middle:inset-x-0 middle:bottom-0 middle:top-[55px] hidden md:block">
				<div className="w-[35%] absolute top-0 left-0 bottom-0  z-[15] ">
					<div
						className="main absolute inset-0 bg-no-repeat bg-cover bg-center "
						data-img-url="assets/img/about/1.jpg"
						style={{ backgroundImage: 'url("/src/assets/AI_avi.png")' }}></div>
				</div>
			</div>
			<div className="main_content absolute top-0 right-0 bottom-0 md:w-[65%] w-full bg-sec md:bg-inherit overflow-y-scroll">
				{renderContent()}

			</div>
			<Footer /> */
}
