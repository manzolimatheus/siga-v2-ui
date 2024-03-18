import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.gov.br",
        pathname: "/**",
      },
    ],
  },
};

export default withPWA(nextConfig);
