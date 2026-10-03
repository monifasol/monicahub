const seeklientOrigin = (process.env.SEEKLIENT_ORIGIN || "").replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (!seeklientOrigin) return [];

    return {
      beforeFiles: [
        {
          source: "/lab/seeklient",
          destination: `${seeklientOrigin}/lab/seeklient`,
        },
        {
          source: "/lab/seeklient/:path*",
          destination: `${seeklientOrigin}/lab/seeklient/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
