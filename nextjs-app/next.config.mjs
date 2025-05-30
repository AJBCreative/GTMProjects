/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/GTMProjects', // **CRUCIAL: This must be exactly '/GTMProjects'**
  assetPrefix: '/GTMProjects', 
  images: {
    unoptimized: true, // Also often needed for GitHub Pages
  },
};

export default nextConfig;
