// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
module.exports = {
  images: {
    loader: "custom",
  },
  imageLoader: function imageLoader({ src }) {
    return `/static/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};
// module.exports = nextConfig;
