/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;
