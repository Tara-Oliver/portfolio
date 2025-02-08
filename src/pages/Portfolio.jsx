import React from "react";
import { projects, clientWork } from "../shared-components/util";
import ProjectItem from "./ProjectItem";

const Portfolio = () => {
	return (
		<div className="flex flex-col h-full px-4 md:px-14 py-20 sect-con">
			<div className="leading-relaxed">
				<h3 className="text-3xl font-bold mb-4 font-news text-dkgrey">
					Client Work
				</h3>
				<div className="mb-10 w-20 bg-dkgrey h-1 rounded-full"></div>
				<ul className="flex flex-wrap">
					{clientWork.map((project, idx) => (
						<ProjectItem key={idx} project={project} />
					))}
				</ul>
			</div>
			<div className="py-20">
				<h3 className="text-3xl font-bold mb-4 font-news text-dkgrey">
					Personal Projects
				</h3>
				<div className="mb-10 w-20 bg-dkgrey h-1 rounded-full"></div>
				<ul className="flex flex-wrap">
					{projects.map((project, idx) => (
						<ProjectItem key={idx} project={project} />
					))}
				</ul>

			</div>
		</div>
	);
};

export default Portfolio;
