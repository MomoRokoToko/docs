import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.web3privacy.info',
	integrations: [
		starlight({
			title: 'Web3Privacy Now Docs',
			social: {
				github: 'https://github.com/web3privacy',
				twitter: 'https://twitter.com/web3privacy',
			},
			logo: {
				src: './public/logo.svg',
				replacesTitle: true
			},
			customCss: [
				'./src/styles/custom.css'
			],
			sidebar: [
				{ label: 'Introduction', link: '/' },
				{
					label: 'About Web3Privacy Now',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Manifesto', link: '/manifesto' },
						{ label: 'Roadmap', link: '/roadmap' },
						{ label: 'History', link: '/history' },
						{ label: 'Brand', link: '/brand' },
						{ label: 'Contact us', link: '/contacts' },
					],
				},
				{
					label: 'Projects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Research', link: '/research' },
						{ label: 'Privacy Explorer', link: '/projects/privacy-explorer' },
					],
				},
				{
					label: 'Future concepts',
					items: [
						{ label: 'Privacy Tech Awards', link: '/projects/privacy-tech-awards' }
					]
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Git repositories', link: '/git' },
						{ label: 'Communication tools', link: '/communication' },
						{ label: 'Workgroups', link: '/workgroups' }
					]
				},
				{
					label: 'Community',
					items: [
						{ label: 'Follow us', link: '/follow-us' },
						{ label: 'Get involved', link: '/get-involved' },
						{ label: 'Contributors guide', link: '/contributors' },
						{
							label: 'Membership',
							link: '/membership',
							items: [
								{ label: 'Personal benefits', link: '/membership/personal-benefits' }
							]
						},
						{ label: 'Donate', link: '/donate' },
						{ label: 'Code of conduct', link: '/code-of-conduct' },
					]
				},
				{
					label: 'Governance',
					items: [
						{ label: 'Governance overview', link: '/governance' },
						{ label: 'Congress', link: '/congress' },
						{ label: 'Core Team', link: '/core-team' },
						{ label: 'Association', link: '/association' },
						{ label: 'Contributors Guild', link: '/guild' },
					]
				}
			],
		}),
	],
});
