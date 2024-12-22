/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
};

export default nextConfig;
