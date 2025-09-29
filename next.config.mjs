import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  },
  images: {
    domains: ['localhost', 'supabase.co', 'supabase.com'],
  },
}

export default nextConfig


