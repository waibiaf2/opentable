/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				// protocol: 'https',
				hostname: 'resizer.otstatic.com',
				// port: '',
				// pathname: '/account123/**',
			},
		],
	},
}

module.exports = nextConfig
