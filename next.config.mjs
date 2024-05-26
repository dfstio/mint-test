/*
import path from "node:path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
        ],
      },
    ];
  },

  /*

  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    if (isServer === false) {
      //console.log("config", config);
      config.resolve.alias = {
        ...config.resolve.alias,
        o1js: path.resolve(__dirname, "node_modules/o1js/dist/web/index.js"),
      };
      //config.output.globalObject = "this";
      config.experiments = { ...config.experiments, topLevelAwait: true };
      config.optimization.minimizer = [];
    }
    return config;
  },
  */

  /*
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      o1js: path.resolve("node_modules/o1js/dist/web/index.js"),
    };
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.optimization.minimizer = [];
    config.output.globalObject = "this";
    return config;
  },
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
