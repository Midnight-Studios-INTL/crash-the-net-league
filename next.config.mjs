/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  },
  images: {
    domains: ['localhost', 'supabase.co', 'supabase.com'],
  },
}

export default nextConfig


