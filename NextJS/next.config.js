/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Add this line

  // The 'actions/configure-pages@v5' action will automatically handle
  // basePath and images.unoptimized: true for you.
  // So, you typically don't need to add them here unless you want
  // to manage them manually for specific reasons or debugging.
  // For example, if you wanted to manage them yourself:
  // basePath: '/GTMProjects/NextJS', // Adjust based on your GitHub Pages URL
  // assetPrefix: '/GTMProjects/NextJS/',
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = nextConfig;
