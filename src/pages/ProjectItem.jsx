import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
	return (
		<li className="my-6">
			<video loop autoPlay muted>
				<source src={project.videoSrc} type="video/mp4" />
			</video>
			<div className="my-4">
				<span className="font-bold  text-2xl font-news">{project.name}</span>
				<p className="italic">{project.desc}</p>
				<div className=" my-4 flex gap-x-4">
					<Link
						to={project.liveLink}
						className="font-semibold px-8 bg-dkgrey py-2 text-mainBg transition-all ease-in-out duration-300 border-2 border-dkgrey hover:bg-sec rounded-full hover:text-dkgrey">
						Live Link
					</Link>{" "}
					{project.gitLink && (
						<Link
							className="font-semibold px-8 bg-dkgrey py-2 text-mainBg transition-all ease-in-out duration-300 border-2 border-dkgrey hover:bg-sec rounded-full hover:text-dkgrey"
							to={project.gitLink}>
							GitHub
						</Link>
					)}
				</div>
			</div>
		</li>
	);
};

export default ProjectItem;
