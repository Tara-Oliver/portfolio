import React from "react";
import ContactForm from "./ContactForm";
const Contact = () => {
	return (
		// <div className="cavani_tm_section animated active fadeInDown" id="contact">
		// 	<div className="section_inner">
		// 		<div className="cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]">
		// 			<div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
		// 				<span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
		// 					Get in Touch
		// 				</span>
		// 			</div>
		// 			<div className="short_info w-full h-auto clear-both float-left mt-[62px]">
		// 				<ul className="ml-[-30px] flex flex-wrap">
		// 					<li className="mb-[30px] w-1/3 pl-[30px]">
		// 						<div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
		// 							<svg
		// 								version="1.1"
		// 								id="null"
		// 								xmlns="http://www.w3.org/2000/svg"
		// 								xmlnsXlink="http://www.w3.org/1999/xlink"
		// 								x="0px"
		// 								y="0px"
		// 								viewBox="0 0 512 512"
		// 								style={{ enableBackground: "new 0 0 512 512" }}
		// 								xmlSpace="preserve"
		// 								className="svg inline-block w-[18px] h-[18px] mb-[10px] replaced-svg">
		// 								<g>
		// 									<g>
		// 										<path
		// 											d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
		// 	c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
		// 	c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"></path>
		// 									</g>
		// 								</g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 							</svg>
		// 							<span className="block">Ave Street, New York, USA</span>
		// 						</div>
		// 					</li>
		// 					<li className="mb-[30px] w-1/3 pl-[30px]">
		// 						<div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
		// 							<svg
		// 								version="1.1"
		// 								id="null"
		// 								xmlns="http://www.w3.org/2000/svg"
		// 								xmlnsXlink="http://www.w3.org/1999/xlink"
		// 								x="0px"
		// 								y="0px"
		// 								width="550.795px"
		// 								height="550.795px"
		// 								viewBox="0 0 550.795 550.795"
		// 								style={{ enableBackground: "new 0 0 550.795 550.795" }}
		// 								xmlSpace="preserve"
		// 								className="svg inline-block w-[18px] h-[18px] mb-[10px] replaced-svg">
		// 								<g>
		// 									<g>
		// 										<path
		// 											d="M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767
		// 	c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528
		// 	h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755
		// 	c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622
		// 	c9.119,8.072,19.854,12.16,32.234,12.16H501.613z"></path>
		// 										<path
		// 											d="M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541
		// 	C110.025,279.229,74.572,254.877,31.047,225.299z"></path>
		// 										<path
		// 											d="M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555
		// 	C541.98,208.396,531.736,217.306,520.059,225.299z"></path>
		// 										<path
		// 											d="M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949
		// 	c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801
		// 	c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269
		// 	c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988
		// 	c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766
		// 	c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683
		// 	c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616
		// 	c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408
		// 	c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z"></path>
		// 									</g>
		// 								</g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 							</svg>
		// 							<span className="block">
		// 								<a
		// 									className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
		// 									href="#">
		// 									hello@cavani.com
		// 								</a>
		// 							</span>
		// 						</div>
		// 					</li>
		// 					<li className="mb-[30px] w-1/3 pl-[30px]">
		// 						<div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
		// 							<svg
		// 								version="1.1"
		// 								id="null"
		// 								xmlns="http://www.w3.org/2000/svg"
		// 								xmlnsXlink="http://www.w3.org/1999/xlink"
		// 								x="0px"
		// 								y="0px"
		// 								width="348.077px"
		// 								height="348.077px"
		// 								viewBox="0 0 348.077 348.077"
		// 								style={{ enableBackground: "new 0 0 348.077 348.077" }}
		// 								xmlSpace="preserve"
		// 								className="svg inline-block w-[18px] h-[18px] mb-[10px] replaced-svg">
		// 								<g>
		// 									<g>
		// 										<g>
		// 											<path
		// 												d="M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076
		// 		c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257
		// 		c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194
		// 		C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02
		// 		C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876
		// 		c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029
		// 		C350.631,303.527,350.95,285.795,340.273,275.083z"></path>
		// 										</g>
		// 									</g>
		// 								</g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 								<g></g>
		// 							</svg>
		// 							<span className="block">+77 022 444 05 05</span>
		// 						</div>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="form w-full h-auto clear-both flex">
		// 				<div className="left w-1/2 pr-[15px]">
		// 					<div className="fields w-full h-auto clear-both float-left">
		// 						<form
		// 							action="/"
		// 							method="post"
		// 							className="contact_form"
		// 							id="contact_form">
		// 							<div
		// 								className="returnmessage"
		// 								data-success="Your message has been received, We will contact you soon."></div>
		// 							<div className="empty_notice">
		// 								<span>Please Fill Required Fields</span>
		// 							</div>
		// 							<div className="first w-full float-left">
		// 								<ul>
		// 									<li className="w-full mb-[30px] float-left">
		// 										<input
		// 											id="name"
		// 											type="text"
		// 											placeholder="Name"
		// 											autoComplete="off"
		// 										/>
		// 									</li>
		// 									<li className="w-full mb-[30px] float-left">
		// 										<input
		// 											id="email"
		// 											type="text"
		// 											placeholder="Email"
		// 											autoComplete="off"
		// 										/>
		// 									</li>
		// 								</ul>
		// 							</div>
		// 							<div className="last">
		// 								<textarea id="message" placeholder="Message"></textarea>
		// 							</div>
		// 							<div className="cavani_tm_button">
		// 								<a id="send_message" href="#">
		// 									Send Message
		// 								</a>
		// 							</div>
		// 						</form>
		// 					</div>
		// 				</div>
		// 				<div className="right w-1/2 pl-[15px] relative">
		// 					<div className="map_wrap">
		// 						<div className="mapouter">
		// 							<div className="gmap_canvas">
		// 								<iframe
		// 									width="100%"
		// 									height="355"
		// 									id="gmap_canvas"
		// 									src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
		// 									frameBorder="0"
		// 									scrolling="no"
		// 									marginHeight="0"
		// 									marginWidth="0"></iframe>

		// 								<a href="https://fmovies-online.net">fmovies</a>
		// 								<br />

		// 								{/* <style>.mapouter{position:relative;text-align:right;height:355px;width:100%;}</style> */}
		// 								<a href="https://www.embedgooglemap.net">
		// 									embedgooglemap.net
		// 								</a>
		// 								{/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}</style> */}
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
					Get In Touch
				</h3>
				<div className="mb-10 w-[20%] bg-dkgrey h-1 rounded-full"></div>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
