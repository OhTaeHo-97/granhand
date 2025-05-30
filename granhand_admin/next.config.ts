import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path((?!auth/).*)', // /api/ 로 시작하고, auth/ 로 시작하지 않는 모든 경로를 :path로 캡처
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path`,
      },
    ]
  }
};

export default nextConfig;
