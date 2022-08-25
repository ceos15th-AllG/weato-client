/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
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
