/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['img1.daumcdn.net'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `http://3.37.94.86/api/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
