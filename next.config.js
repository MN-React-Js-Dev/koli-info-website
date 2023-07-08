/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'localhost']
  },
};

module.exports = {
  env: {
    BASEURL: process.env.REACT_APP_BASE_URL,
  },
};

module.exports = nextConfig;
