/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images: allow placeholder SVG paths without a domain
  images: {
    unoptimized: true
  }
};

export default nextConfig;
