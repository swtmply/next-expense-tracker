import { env } from "./src/env/server.mjs";
import pwaConfig from "next-pwa";

const withPWA = pwaConfig({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: env.NODE_ENV === "development",
});

export default withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.discordapp.com"],
  },
});
