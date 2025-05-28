import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        // source: '/api/:path*',
        // destination: 'http://192.168.0.12:8080/:path*',
        source: '/api/:path((?!auth/).*)', // /api/ 로 시작하고, auth/ 로 시작하지 않는 모든 경로를 :path로 캡처
        destination: `http://192.168.0.12:8080/:path*`,
      }
    ]
  }
};

export default nextConfig;
