import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/dl/serviceguide',
        destination: '/numphoto-service-guide20260428_x8K92LmQs.pdf',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;