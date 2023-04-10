/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  target: 'serverless',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
