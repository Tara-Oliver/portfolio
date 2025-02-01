import React from "react";
import { skills } from "../shared-components/util";
import { motion } from "framer-motion";

const About = () => {
	return (
		// <div className="cavani_tm_section animated active fadeInDown" id="about">
		// 	<div className="section_inner">
		// 		<div className="cavani_tm_about w-full h-auto clear-both float-left">
		// 			<div className="biography w-full h-auto clear-both float-left mb-[87px]">
		// 				<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 					<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
		// 						About Me
		// 					</span>
		// 				</div>
		// 				<div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
		// 					<div className="left w-[40%]">
		// 						<p className="mb-[15px]">
		// 							Hello there! My name is <strong>Alan Walker.</strong> I am a
		// 							graphic designer, and I'm very passionate and dedicated to my
		// 							work.
		// 						</p>
		// 						<p>
		// 							With 20 years experience as a professional a graphic designer,
		// 							I have acquired the skills and knowledge necessary to make
		// 							your project a success.
		// 						</p>
		// 					</div>
		// 					<div className="right w-[50%]">
		// 						<ul>
		// 							<li className="mb-[8px] w-full float-left">
		// 								<span className="first inline-block min-w-[100px] font-bold">
		// 									Name:
		// 								</span>
		// 								<span className="second inline-block">Alan Walker</span>
		// 							</li>
		// 							<li className="mb-[8px] w-full float-left">
		// 								<span className="first inline-block min-w-[100px] font-bold">
		// 									Address:
		// 								</span>
		// 								<span className="second inline-block">
		// 									Ave Street, New York, USA
		// 								</span>
		// 							</li>
		// 							<li className="mb-[8px] w-full float-left">
		// 								<span className="first inline-block min-w-[100px] font-bold">
		// 									Study:
		// 								</span>
		// 								<span className="second inline-block">
		// 									Univercity of Oxford
		// 								</span>
		// 							</li>
		// 							<li className="mb-[8px] w-full float-left">
		// 								<span className="first inline-block min-w-[100px] font-bold">
		// 									Degree:
		// 								</span>
		// 								<span className="second inline-block">
		// 									Master of Science
		// 								</span>
		// 							</li>
		// 							<li className="mb-[8px] w-full float-left">
		// 								<span className="first inline-block min-w-[100px] font-bold">
		// 									Mail:
		// 								</span>
		// 								<span className="second inline-block">
		// 									<a
		// 										className="text-[#7d7789] transition-all duration-300 hover:text-dkgrey"
		// 										href="#">
		// 										hello@cavani.com
		// 									</a>
		// 								</span>
		// 							</li>
		// 							<li className="w-full float-left">
		// 								<span className="first inline-block min-w-[100px] font-bold">
		// 									Phone:
		// 								</span>
		// 								<span className="second inline-block">
		// 									+77 022 444 05 05
		// 								</span>
		// 							</li>
		// 						</ul>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className="services w-full h-auto clear-both float-left mb-[87px]">
		// 				<div className="wrapper w-full h-auto clear-both float-left flex justify-between">
		// 					<div className="service_list w-[40%]">
		// 						<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 							<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
		// 								Services
		// 							</span>
		// 						</div>
		// 						<div className="list w-full h-auto clear-both float-left mt-[55px]">
		// 							<ul>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									Web Development
		// 								</li>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									Graphic Design
		// 								</li>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									Landing Page
		// 								</li>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									On-Page SEO
		// 								</li>
		// 								<li className="w-full float-left relative pl-[25px]">
		// 									Web Hosting
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</div>
		// 					<div className="service_list w-[50%]">
		// 						<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 							<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
		// 								Interests
		// 							</span>
		// 						</div>
		// 						<div className="list w-full h-auto clear-both float-left mt-[55px]">
		// 							<ul>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									Painting &amp; Drawing
		// 								</li>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									Reading &amp; Writing
		// 								</li>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									Music &amp; Cinema
		// 								</li>
		// 								<li className="mb-[8px] w-full float-left relative pl-[25px]">
		// 									Travel &amp; Picnik
		// 								</li>
		// 								<li className="w-full float-left relative pl-[25px]">
		// 									Rain &amp; Snow
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className="skills w-full h-auto clear-both float-left mb-[65px]">
		// 				<div className="wrapper w-full h-auto clear-both float-left flex justify-between">
		// 					<div className="programming w-[40%]">
		// 						<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 							<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
		// 								Programming
		// 							</span>
		// 						</div>
		// 						<div className="cavani_progress w-full h-auto clear-both float-left mt-[55px]">
		// 							<div
		// 								style={{
		// 									height: "3px",
		// 									width: "100%",
		// 									minWidth: "100%",
		// 									backgroundColor: "#00000012",
		// 									borderRadius: "50px",
		// 									marginBottom: "55px",
		// 								}}>
		// 								<div
		// 									style={{
		// 										height: "100%",
		// 										width: "60%",
		// 										backgroundColor: "#7d7789",
		// 										borderRadius: "inherit",
		// 									}}>
		// 									<div
		// 										style={{
		// 											display: "flex",
		// 											justifyContent: "space-between",
		// 											alignItems: "start",
		// 											position: "relative",
		// 											top: "-35px",
		// 										}}>
		// 										<span
		// 											style={{
		// 												paddingTop: "5px",
		// 												paddingBottom: "5px",
		// 												color: "#7d7789",
		// 											}}>
		// 											HTML &amp; CSS
		// 										</span>
		// 										<span
		// 											style={{
		// 												paddingTop: "5px",
		// 												paddingBottom: "5px",
		// 												color: "#7d7789",
		// 											}}>
		// 											60%
		// 										</span>
		// 									</div>
		// 								</div>
		// 							</div>
		// 							<div
		// 								style={{
		// 									height: "3px",
		// 									width: "100%",
		// 									minWidth: "100%",
		// 									backgroundColor: "#00000012",
		// 									borderRadius: "50px",
		// 									marginBottom: "55px",
		// 								}}>
		// 								<div
		// 									style={{
		// 										height: "100%",
		// 										width: "85%",
		// 										backgroundColor: "#7d7789",
		// 										borderRadius: "inherit",
		// 									}}>
		// 									<div
		// 										style={{
		// 											display: "flex",
		// 											justifyContent: "space-between",
		// 											alignItems: "start",
		// 											position: "relative",
		// 											top: "-35px",
		// 										}}>
		// 										<span
		// 											style={{
		// 												paddingTop: "5px",
		// 												paddingBottom: "5px",
		// 												color: "#7d7789",
		// 											}}>
		// 											Javascript
		// 										</span>
		// 										<span
		// 											style={{
		// 												paddingTop: "5px",
		// 												paddingBottom: "5px",
		// 												color: "#7d7789",
		// 											}}>
		// 											85%
		// 										</span>
		// 									</div>
		// 								</div>
		// 							</div>
		// 							<div
		// 								style={{
		// 									height: "3px",
		// 									width: "100%",
		// 									minWidth: "100%",
		// 									backgroundColor: "#00000012",
		// 									borderRadius: "50px",
		// 									marginBottom: "55px",
		// 								}}>
		// 								<div
		// 									style={{
		// 										height: "100%",
		// 										width: "90%",
		// 										backgroundColor: "#7d7789",
		// 										borderRadius: "inherit",
		// 									}}>
		// 									<div
		// 										style={{
		// 											display: "flex",
		// 											justifyContent: "space-between",
		// 											alignItems: "start",
		// 											position: "relative",
		// 											top: "-35px",
		// 										}}>
		// 										<span
		// 											style={{
		// 												paddingTop: "5px",
		// 												paddingBottom: "5px",
		// 												color: "#7d7789",
		// 											}}>
		// 											WordPress
		// 										</span>
		// 										<span
		// 											style={{
		// 												paddingTop: "5px",
		// 												paddingBottom: "5px",
		// 												color: "#7d7789",
		// 											}}>
		// 											90%
		// 										</span>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="language w-[50%]">
		// 						<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 							<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
		// 								Language
		// 							</span>
		// 						</div>
		// 						<div className="circular_progress_bar w-full h-auto clear-both float-left mt-[62px]">
		// 							<ul>
		// 								<li>
		// 									<div className="list_inner">
		// 										<div
		// 											className="myCircle w-[120px] h-[120px]"
		// 											// style="width:120px;height:120px"
		// 										>
		// 											<svg
		// 												className="CircularProgressbar "
		// 												viewBox="0 0 100 100"
		// 												data-test-id="CircularProgressbar">
		// 												<path
		// 													className="CircularProgressbar-trail"
		// 													style={{
		// 														stroke: "rgba(0,0,0,0)",
		// 														strokeDasharray:
		// 															"304.7344873982099px 304.7344873982099px",
		// 														strokeDashoffset: "0px",
		// 													}}
		// 													d="
		//   M 50,50
		//   m 0,-48.5
		//   a 48.5,48.5 0 1 1 0,97
		//   a 48.5,48.5 0 1 1 0,-97
		// "
		// 													strokeWidth="3"
		// 													fillOpacity="0"></path>
		// 												<path
		// 													className="CircularProgressbar-path"
		// 													style={{
		// 														stroke: "#7d7789",
		// 														strokeDasharray:
		// 															"304.7344873982099px 304.7344873982099px",
		// 														strokeDashoffset: "15.23672436991051px",
		// 													}}
		// 													d="
		//   M 50,50
		//   m 0,-48.5
		//   a 48.5,48.5 0 1 1 0,97
		//   a 48.5,48.5 0 1 1 0,-97
		// "
		// 													strokeWidth="3"
		// 													fillOpacity="0"></path>
		// 											</svg>
		// 											<span className="number">95%</span>
		// 											<div className="title">
		// 												<span>English</span>
		// 											</div>
		// 										</div>
		// 									</div>
		// 								</li>
		// 								<li>
		// 									<div className="list_inner">
		// 										<div
		// 											className="myCircle w-[120px] h-[120px]"
		// 											// style="width:120px;height:120px"
		// 										>
		// 											<svg
		// 												className="CircularProgressbar "
		// 												viewBox="0 0 100 100"
		// 												data-test-id="CircularProgressbar">
		// 												<path
		// 													className="CircularProgressbar-trail"
		// 													style={{
		// 														stroke: "rgba(0,0,0,0)",
		// 														strokeDasharray:
		// 															"304.7344873982099px 304.7344873982099px",
		// 														strokeDashoffset: "0px",
		// 													}}
		// 													d="
		//   M 50,50
		//   m 0,-48.5
		//   a 48.5,48.5 0 1 1 0,97
		//   a 48.5,48.5 0 1 1 0,-97
		// "
		// 													strokeWidth="3"
		// 													fillOpacity="0"></path>
		// 												<path
		// 													className="CircularProgressbar-path"
		// 													style={{
		// 														stroke: "#7d7789",
		// 														strokeDasharray:
		// 															"304.7344873982099px 304.7344873982099px",
		// 														strokeDashoffset: "60.94689747964197px",
		// 													}}
		// 													d="
		//   M 50,50
		//   m 0,-48.5
		//   a 48.5,48.5 0 1 1 0,97
		//   a 48.5,48.5 0 1 1 0,-97
		// "
		// 													strokeWidth="3"
		// 													fillOpacity="0"></path>
		// 											</svg>
		// 											<span className="number">80%</span>
		// 											<div className="title">
		// 												<span>Russian</span>
		// 											</div>
		// 										</div>
		// 									</div>
		// 								</li>
		// 								<li>
		// 									<div className="list_inner">
		// 										<div
		// 											className="myCircle w-[120px] h-[120px]"
		// 											// style="width:120px;height:120px"
		// 										>
		// 											<svg
		// 												className="CircularProgressbar "
		// 												viewBox="0 0 100 100"
		// 												data-test-id="CircularProgressbar">
		// 												<path
		// 													className="CircularProgressbar-trail"
		// 													style={{
		// 														stroke: "rgba(0,0,0,0)",
		// 														strokeDasharray:
		// 															"304.7344873982099px 304.7344873982099px",
		// 														strokeDashoffset: "0px",
		// 													}}
		// 													d="
		//   M 50,50
		//   m 0,-48.5
		//   a 48.5,48.5 0 1 1 0,97
		//   a 48.5,48.5 0 1 1 0,-97
		// "
		// 													strokeWidth="3"
		// 													fillOpacity="0"></path>
		// 												<path
		// 													className="CircularProgressbar-path"
		// 													style={{
		// 														stroke: "#7d7789",
		// 														strokeDasharray:
		// 															"304.7344873982099px 304.7344873982099px",
		// 														strokeDashoffset: "15.23672436991051px",
		// 													}}
		// 													d="
		//   M 50,50
		//   m 0,-48.5
		//   a 48.5,48.5 0 1 1 0,97
		//   a 48.5,48.5 0 1 1 0,-97
		// "
		// 													strokeWidth="3"
		// 													fillOpacity="0"></path>
		// 											</svg>
		// 											<span className="number">90%</span>
		// 											<div className="title">
		// 												<span>Arabic</span>
		// 											</div>
		// 										</div>
		// 									</div>
		// 								</li>
		// 							</ul>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className="resume w-full h-auto clear-both float-left mb-[75px]">
		// 				<div className="wrapper w-full h-auto clear-both float-left flex justify-between">
		// 					<div className="education w-[40%]">
		// 						<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 							<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
		// 								Education
		// 							</span>
		// 						</div>
		// 						<div className="list w-full h-auto clear-both float-left">
		// 							<div className="univ w-full h-auto clear-both float-left mt-[55px]">
		// 								<ul className="relative inline-block pt-[10px]">
		// 									<li className="w-full float-left relative pl-[20px] pb-[45px]">
		// 										<div className="list_inner w-full h-auto clear-both flex relative">
		// 											<div className="time w-1/2 pr-[20px]">
		// 												<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
		// 													2014 - 2016
		// 												</span>
		// 											</div>
		// 											<div className="place w-1/2 pl-[20px]">
		// 												<h3 className="text-[16px] mb-[2px] font-semibold">
		// 													Oxford Univercity
		// 												</h3>
		// 												<span className="text-[14px]">Master Degree</span>
		// 											</div>
		// 										</div>
		// 									</li>
		// 									<li className="w-full float-left relative pl-[20px] pb-[45px]">
		// 										<div className="list_inner w-full h-auto clear-both flex relative">
		// 											<div className="time w-1/2 pr-[20px]">
		// 												<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
		// 													2010 - 2014
		// 												</span>
		// 											</div>
		// 											<div className="place w-1/2 pl-[20px]">
		// 												<h3 className="text-[16px] mb-[2px] font-semibold">
		// 													Texas Univercity
		// 												</h3>
		// 												<span className="text-[14px]">Bachelor Degree</span>
		// 											</div>
		// 										</div>
		// 									</li>
		// 									<li className="w-full float-left relative pl-[20px]">
		// 										<div className="list_inner w-full h-auto clear-both flex relative">
		// 											<div className="time w-1/2 pr-[20px]">
		// 												<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
		// 													2008 - 2010
		// 												</span>
		// 											</div>
		// 											<div className="place w-1/2 pl-[20px]">
		// 												<h3 className="text-[16px] mb-[2px] font-semibold">
		// 													Simone College
		// 												</h3>
		// 												<span className="text-[14px]">
		// 													Associate Degree
		// 												</span>
		// 											</div>
		// 										</div>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="experience w-1/2">
		// 						<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 							<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
		// 								Experience
		// 							</span>
		// 						</div>
		// 						<div className="list w-full h-auto clear-both float-left">
		// 							<div className="univ w-full h-auto clear-both float-left mt-[55px]">
		// 								<ul className="relative inline-block pt-[10px]">
		// 									<li className="w-full float-left relative pl-[20px] pb-[45px]">
		// 										<div className="list_inner w-full h-auto clear-both flex relative">
		// 											<div className="time w-1/2 pr-[20px]">
		// 												<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
		// 													2018 - running
		// 												</span>
		// 											</div>
		// 											<div className="place w-1/2 pl-[20px]">
		// 												<h3 className="text-[16px] mb-[2px] font-semibold">
		// 													Envato Elements
		// 												</h3>
		// 												<span className="text-[14px]">
		// 													Exclusive Author
		// 												</span>
		// 											</div>
		// 										</div>
		// 									</li>
		// 									<li className="w-full float-left relative pl-[20px] pb-[45px]">
		// 										<div className="list_inner w-full h-auto clear-both flex relative">
		// 											<div className="time w-1/2 pr-[20px]">
		// 												<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
		// 													2015 - 2018
		// 												</span>
		// 											</div>
		// 											<div className="place w-1/2 pl-[20px]">
		// 												<h3 className="text-[16px] mb-[2px] font-semibold">
		// 													Avo Corporation
		// 												</h3>
		// 												<span className="text-[14px]">Content Manager</span>
		// 											</div>
		// 										</div>
		// 									</li>
		// 									<li className="w-full float-left relative pl-[20px]">
		// 										<div className="list_inner w-full h-auto clear-both flex relative">
		// 											<div className="time w-1/2 pr-[20px]">
		// 												<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
		// 													2012 - 2015
		// 												</span>
		// 											</div>
		// 											<div className="place w-1/2 pl-[20px]">
		// 												<h3 className="text-[16px] mb-[2px] font-semibold">
		// 													FC Barcelona
		// 												</h3>
		// 												<span className="text-[14px]">Football Player</span>
		// 											</div>
		// 										</div>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="flex flex-col  h-full px-14 py-20 sect-con">
			<div className="leading-relaxed">
				<h3 className="text-xl md:text-3xl font-bold mb-4 font-news text-dkgrey">
					About Me
				</h3>
				<div className="mb-10 w-[20%] bg-dkgrey h-1 rounded-full"></div>
				<p>
					Some careers follow a straight path—mine has been about adaptability.
					After more than a decade in the fashion industry, I’ve honed my skills
					in solving complex problems, managing fast-moving projects, and
					collaborating across teams to bring ideas to life. My experience in
					product development has also sharpened my analytical thinking, ability
					to work under pressure, and attention to detail— talents that
					translate seamlessly into tech. I’m passionate about building
					user-centered solutions, learning new technologies, and tackling
					challenges with a strategic, hands-on approach. Now I’m looking
					forward to contributing fresh perspectives, streamlining processes,
					and building intuitive digital experiences that make a real impact.
				</p>
			</div>
			<div className="py-20">
				<h3 className="text-xl md:text-3xl font-bold mb-4 font-news text-dkgrey">
					Skills
				</h3>
				<div className="mb-10 w-[20%] bg-dkgrey h-1 rounded-full"></div>
				<ul className="flex flex-wrap">
					{skills.map((skill, idx) => (
						<li
							className="px-2 py-1 m-1 bg-[rgba(0,0,0,.07)] rounded-[50px]  flex flex-nowrap items-center justify-center"
							key={idx}>
							<span className="w-2 mr-4">{skill.icon}</span>
							<span>{skill.name}</span>
						</li>
					))}
				</ul>
			</div>

			{/* <div className="mt-8">
				<div className="resume w-full h-auto clear-both float-left mb-[75px]">
					<div className="wrapper w-full h-auto clear-both float-left flex justify-between">
						<div className="education w-[40%]">
							<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
								<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
									Education
								</span>
							</div>
							<div className="list w-full h-auto clear-both float-left">
								<div className="univ w-full h-auto clear-both float-left mt-[55px]">
									<ul className="relative inline-block pt-[10px]">
										<li className="w-full float-left relative pl-[20px] pb-[45px]">
											<div className="list_inner w-full h-auto clear-both flex relative">
												<div className="time w-1/2 pr-[20px]">
													<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
														2014 - 2016
													</span>
												</div>
												<div className="place w-1/2 pl-[20px]">
													<h3 className="text-[16px] mb-[2px] font-semibold">
														Oxford Univercity
													</h3>
													<span className="text-[14px]">Master Degree</span>
												</div>
											</div>
										</li>
										<li className="w-full float-left relative pl-[20px] pb-[45px]">
											<div className="list_inner w-full h-auto clear-both flex relative">
												<div className="time w-1/2 pr-[20px]">
													<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
														2010 - 2014
													</span>
												</div>
												<div className="place w-1/2 pl-[20px]">
													<h3 className="text-[16px] mb-[2px] font-semibold">
														Texas Univercity
													</h3>
													<span className="text-[14px]">Bachelor Degree</span>
												</div>
											</div>
										</li>
										<li className="w-full float-left relative pl-[20px]">
											<div className="list_inner w-full h-auto clear-both flex relative">
												<div className="time w-1/2 pr-[20px]">
													<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
														2008 - 2010
													</span>
												</div>
												<div className="place w-1/2 pl-[20px]">
													<h3 className="text-[16px] mb-[2px] font-semibold">
														Simone College
													</h3>
													<span className="text-[14px]">Associate Degree</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="experience w-1/2">
							<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
								<span className="inline-block relative  text-dkgrey uppercase font-bold tracking-[8px]">
									Experience
								</span>
							</div>
							<div className="list w-full h-auto clear-both float-left">
								<div className="univ w-full h-auto clear-both float-left mt-[55px]">
									<ul className="relative inline-block pt-[10px]">
										<li className="w-full float-left relative pl-[20px] pb-[45px]">
											<div className="list_inner w-full h-auto clear-both flex relative">
												<div className="time w-1/2 pr-[20px]">
													<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
														2018 - running
													</span>
												</div>
												<div className="place w-1/2 pl-[20px]">
													<h3 className="text-[16px] mb-[2px] font-semibold">
														Envato Elements
													</h3>
													<span className="text-[14px]">Exclusive Author</span>
												</div>
											</div>
										</li>
										<li className="w-full float-left relative pl-[20px] pb-[45px]">
											<div className="list_inner w-full h-auto clear-both flex relative">
												<div className="time w-1/2 pr-[20px]">
													<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
														2015 - 2018
													</span>
												</div>
												<div className="place w-1/2 pl-[20px]">
													<h3 className="text-[16px] mb-[2px] font-semibold">
														Avo Corporation
													</h3>
													<span className="text-[14px]">Content Manager</span>
												</div>
											</div>
										</li>
										<li className="w-full float-left relative pl-[20px]">
											<div className="list_inner w-full h-auto clear-both flex relative">
												<div className="time w-1/2 pr-[20px]">
													<span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
														2012 - 2015
													</span>
												</div>
												<div className="place w-1/2 pl-[20px]">
													<h3 className="text-[16px] mb-[2px] font-semibold">
														FC Barcelona
													</h3>
													<span className="text-[14px]">Football Player</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default About;
