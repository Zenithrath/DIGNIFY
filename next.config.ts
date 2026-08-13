import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hzfcwarsknxbmsvkpgdr.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/website-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/id/services/website-development",
        destination: "/id/jasa-pembuatan-website",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
