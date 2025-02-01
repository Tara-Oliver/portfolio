import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
	return (
		<div className="flex flex-col  h-full px-14 py-20 sect-con">
			<div className="leading-relaxed">
				<h3 className="text-xl md:text-3xl font-bold mb-4 font-news text-dkgrey">
					Client Work
				</h3>
				<div className="mb-10 w-[20%] bg-dkgrey h-1 rounded-full"></div>
				<ul className="flex flex-wrap">
					<li>
						<video loop autoPlay muted>
							<source
								src="	https://res.cloudinary.com/dzgmrgcuo/video/upload/v1738262944/LanisAutoDetailing-Profile1-MicrosoftEdge2025-01-3013-37-17-ezgif.com-crop-video_oligzf.mp4"
								type="video/mp4"
							/>
						</video>
						<Link
							to="https://www.lanisdetailing.com/"
							className="hover:font-bold hover:underline hover:underline-offset-2">
							Lani's Detailing - Work in Progress
						</Link>
						<p>
							Classic interactive coloring demo built with Vanilla JS and DOM
							manipulation
						</p>
					</li>
					<li>
						<video loop autoPlay muted>
							<source
								src="	https://res.cloudinary.com/dzgmrgcuo/video/upload/v1738186211/Family_Life_Insurance_-_Google_Chrome_2025-01-29_16-27-15_online-video-cutter.com_j7ccrn.mp4"
								type="video/mp4"
							/>
						</video>
						<Link
							to="https://gb-ail.vercel.app/"
							className="hover:font-bold hover:underline hover:underline-offset-2">
							Gwen Black for Global Life
						</Link>
					</li>
				</ul>
			</div>
			<div className="py-20">
				<h3 className="text-xl md:text-3xl font-bold mb-4 font-news text-dkgrey">
					Personal Projects
				</h3>
				<div className="mb-10 w-[20%] bg-dkgrey h-1 rounded-full"></div>
				<ul className="flex flex-wrap">
					<li>
						<video loop autoPlay muted>
							<source
								src="https://res.cloudinary.com/dzgmrgcuo/video/upload/v1738184868/YOU-nique_Designs_-_Profile_1_-_Microsoft__Edge_2025-01-29_15-37-10_1_online-video-cutter.com_j81baz.mp4"
								type="video/mp4"
							/>
						</video>
						<Link
							to="https://tara-oliver.github.io/YOU-NIQUE-DESIGNS/"
							className="hover:font-bold hover:underline hover:underline-offset-2 text-xl">
							You-nique Designs
						</Link>
						<p>
							Classic interactive coloring demo built with Vanilla JS and DOM
							manipulation
						</p>
						<Link to="https://github.com/Tara-Oliver/YOU-NIQUE-DESIGNS">
							GitHub
						</Link>
					</li>
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

export default Portfolio;
