/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		extend: {
			fontFamily: {
				sans: ["Geist", ...defaultTheme.fontFamily.sans],
			},

			animation: {
				'infinite-scroll': 'infinite-scroll 20s linear infinite',
			  },

			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
			}  
		},
		animation: {
			'skew-scroll': 'skew-scroll 20s linear infinite',
		  },
		  keyframes: {
			'skew-scroll': {
			  '0%': {
				transform: 'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
			  },
			  '100%': {
				transform:
				  'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
			  },
			},
		  },

	},
	plugins: [require('@tailwindcss/typography'),],
}
