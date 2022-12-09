/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'custom-tan': '#c7a17a',
				'custom-black-light': '#191919',
				'custom-black-dark': '#121315',
				'custom-black-mid': '#1c1c1c',
			},
		},
	},
	plugins: [],
}
