/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true, /*  //er nicher line a comment kora dui line dile error fix hobe.
  // experimental: {
  serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],//
   */
  experimental: {
  serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],

  
},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
