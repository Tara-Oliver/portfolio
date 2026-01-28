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
					After more than a decade in the fashion industry, I’ve honed my skills
					in solving complex problems, managing fast-moving projects, and
					collaborating across teams to bring ideas to life. My experience in
					product development has also sharpened my analytical thinking, ability
					to work under pressure, and attention to detail— talents that
					translate seamlessly into tech. I’m passionate about design that feels
					considered, clear, and intentional, and about building user-centered
					digital experiences. Now I’m looking forward to continuing to grow my
					visual design skills while contributing to thoughtful, well-crafted
					digital experiences that make a real impact.
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
								{/* <span className="w-2 mr-4">{skill.icon}</span> */}
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
