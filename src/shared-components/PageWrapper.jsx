import React from "react";

const PageWrapper = ({ children }) => {
	return (
		<div className="w-full flex items-center max-w-8xl px-8 border-2 border-rose-700">
			<div className="md:w-2/5 md:h-auto ">
				<img
					src="/src/assets/AI_avi.png"
					alt="illustration black woman typing"
					className=""
				/>
			</div>

			<div className="md:w-3/5 w-full">{children}</div>
		</div>
	);
};

export default PageWrapper;
