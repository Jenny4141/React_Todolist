/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "React_Todolist";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  distDir: "out",
};

export default nextConfig;
