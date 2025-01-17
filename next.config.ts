import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  mages: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
