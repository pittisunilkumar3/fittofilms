/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Images are pre-sized locally in /public/images — serve as-is
    unoptimized: true,
  },
};

export default nextConfig;
