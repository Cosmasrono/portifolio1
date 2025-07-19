/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['geist'], // Required for Next.js < 15 or if geist causes build issues
};

export default nextConfig;