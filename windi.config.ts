import { defineConfig } from 'windicss/helpers';
import type { Plugin } from 'windicss/types/interfaces';

// plugins
import TypographyPlugin from 'windicss/plugin/typography';
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio';
import FiltersPlugin from 'windicss/plugin/filters';

export default defineConfig({
	darkMode: 'class',
	attributify: false,
	extract: {
		include: [
			'./components/**/*.{vue,js}',
			'./composables/**/*.{js,ts}',
			'./layouts/**/*.vue',
			'./pages/**/*.vue',
			'./plugins/**/*.{js,ts}',
			'./utils/**/*.{js,ts}',
			'./app.vue'
		]
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quicksand'],
				serif: ['Quicksand'],
				mono: ['Quicksand'],
				display: ['Quicksand'],
				body: ['Quicksand']
			}
		}
	},
	plugins: [
		// filters plugin require for navbar blur
		FiltersPlugin as Plugin,
		TypographyPlugin as Plugin,
		AspectRatioPlugin as Plugin
	] as Plugin[]
});
