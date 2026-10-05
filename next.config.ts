import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/developer",
        destination: "/studio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
