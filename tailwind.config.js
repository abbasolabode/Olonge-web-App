/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				laptop: "1440px",
			},

			fontFamily: {
				montserrat: ['"Montserrat", "sans-serif"'],
		        poppins: ['"Poppins", "sans-serif"'],
				Roboto: ['"Roboto", "sans-serif"'],
			},

			colors: {
				primaryColor: "hsla(228, 28%, 20%, 1)",
				orangeColor: "hsla(16, 96%, 51%, 1)",
				lightGray: "hsla(0, 0%, 45%, 1)",
				horizontalRule: "hsla(0, 0%, 90%, 1)",
			},
		},
	},
	plugins: [],
};


