/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				news: ["Newsreader"],
				inter: ["Inter"],
			},
			colors: {
				sec: "#E4D2C3",
				mainBg: "#fef7f2",
				dkgrey: "#484848",
			},
		},
	},

	plugins: [],
};
