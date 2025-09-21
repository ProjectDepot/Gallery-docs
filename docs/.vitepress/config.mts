import { defineConfig } from 'vitepress';

export default defineConfig({
	base: '/Gallery-docs/',
	title: 'Project Depot Gallery Docs',
	description:
		'Documentation for Project Depot Gallery - a zero-maintenance landing page for your GitHub repositories',
	themeConfig: {
		nav: [
			{ text: 'Getting Started', link: '/getting-started' },
			{ text: 'Configuration', link: '/configuration' },
			{ text: 'Development', link: '/development' },
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/ProjectDepot/Gallery' },
		],
	},
});
