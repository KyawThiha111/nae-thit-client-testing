/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "naethitasanv2.onrender.com",
        port: "",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        // destination: "https://salpyarzay-innovix.odoo.com/api/:path*", // for production
        destination: "https://naethitasanv2.onrender.com/:path*", // for development
      },
    ];
  },
  // i18n: {
  //   locales: ["en", "mm"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
