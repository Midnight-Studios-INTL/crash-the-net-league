/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  },
  images: {
    domains: ['localhost', 'supabase.co', 'supabase.com'],
  },
  // Ensure proper build output
  output: 'standalone',
  // Enable static optimization
  trailingSlash: false,
  // Ensure proper TypeScript support
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure proper ESLint support
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig


