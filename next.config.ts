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
};

export default nextConfig;
