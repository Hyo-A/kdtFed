/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopping-phinf.pstatic.net",
        // port: '', // 기본값이라 안 써도 됨
        // pathname: '/**', // 전체 경로 허용 (선택사항)
      },
    ],
  },
};

export default nextConfig;
