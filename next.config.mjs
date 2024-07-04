/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:controler/:action",
        destination: "/api/:controler?action=:action",
      },
    ];
  },
};

export default nextConfig;
