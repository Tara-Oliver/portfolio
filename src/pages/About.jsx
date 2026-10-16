import React from "react";
import { skills } from "../shared-components/util";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

const About = () => {
	return (
		<div className="flex flex-col h-full px-4 md:px-14 py-20 sect-con">
			<div className="leading-relaxed w-full flex flex-col items-center md:items-start">
				<h3 className="text-3xl font-bold mb-4 font-news text-dkgrey">
					About Me
				</h3>
				<div className="mb-10 w-20 bg-dkgrey h-1 rounded-full"></div>
				<p className="text-lg">
					Some careers follow a straight path—mine has been about adaptability.
					After more than a decade in the fashion industry, I got good at
					solving complex problems, keeping fast-moving projects on track, and
					working across teams to turn ideas into finished products. Years in
					product development sharpened my attention to detail and my instinct
					for catching what's wrong before it reaches the customer, and those
					habits carry straight over into tech. Most recently I've worked on the
					technical side of the product, testing features and writing up bugs
					clearly enough for engineers to reproduce and fix them. I'm looking
					for a role where that attention to detail is the point, in quality,
					product data, or product operations, on a team that cares how things
					work for the people using them.
				</p>
			</div>

			<div className="py-20 flex flex-col items-center md:items-start">
				<h3 className="text-3xl font-bold mb-4 font-news text-dkgrey">
					Skills
				</h3>
				<div className="mb-10 w-20 bg-dkgrey h-1 rounded-full"></div>
				<ul className="flex flex-wrap justify-center md:justify-start">
					{skills.map((skill, idx) => {
						const Icon = skill.icon;
						return (
							<li
								className="px-2 py-1 m-1 bg-[rgba(0,0,0,.07)] rounded-[50px]  flex flex-nowrap items-center justify-center"
								key={idx}>
								<span className="w-2 mr-4">
									<Icon />
								</span>

								<span>{skill.name}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default About;
