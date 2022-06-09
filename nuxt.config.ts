import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// auto import components
	components: true,
	css: [
		'virtual:windi-base.css',
		'virtual:windi-components.css',
		'virtual:windi-utilities.css',
		'~/assets/styles/main.scss'
	],
	modules: ['nuxt-windicss', '@vueuse/nuxt'],
	// vueuse
	vueuse: {
		ssrHandlers: true
	},
	// windicss
	windicss: {
		analyze: {
			analysis: {
				interpretUtilities: false
			},
			server: {
				port: 4000,
				open: false
			}
		},
		scan: true
	}
});
