import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      // The domain previously hosted a different site with a /ru locale.
      // Send any leftover links/crawled URLs to the new homepage.
      { source: "/ru", destination: "/az", permanent: true },
      { source: "/ru/:path*", destination: "/az", permanent: true },
      { source: "/:locale(az|en)/ru", destination: "/:locale", permanent: true },
      { source: "/:locale(az|en)/ru/:path*", destination: "/:locale", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
