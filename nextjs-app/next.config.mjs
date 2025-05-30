/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures a static HTML export

  // Set the base path for all your assets and links to your repository name
  basePath: '/gtmprojects', // Matches your GitHub repository name

  assetPrefix: '/gtmprojects/', // Matches your GitHub repository name, with a trailing slash

  images: {
    unoptimized: true, // Required for static export, as Next.js image optimization needs a server
  },
  trailingSlash: false,
};

export default nextConfig;
