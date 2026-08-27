import type { NextConfig } from "next";

const wpHost = process.env.WORDPRESS_API_URL
  ? new URL(process.env.WORDPRESS_API_URL).hostname
  : "cms.tahirhafeez.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: wpHost,
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
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
