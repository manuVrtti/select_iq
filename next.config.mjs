/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  webpack: (config) => {
    // Ignore Node.js core modules (not available in browser)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self' https://*.vercel.app;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel.app https://*.supabase.co;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: blob: https://lh3.googleusercontent.com https://*.supabase.co;
              connect-src 'self' https://*.supabase.co https://*.vercel.app;
              font-src 'self' https://fonts.gstatic.com;
              frame-src 'self' https://*.vercel.app;
            `.replace(/\s{2,}/g, " "), // Clean up whitespace
          },
        ],
      },
    ];
  },
};

export default nextConfig;
