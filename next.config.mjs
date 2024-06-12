/** @type {import('next').NextConfig} */

const nextConfig = {
  // ホットリロードの設定
  webpack: (config, context) => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
