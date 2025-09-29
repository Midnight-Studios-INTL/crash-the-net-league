/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@supabase/supabase-js'],
  images: {
    domains: ['localhost', 'supabase.co', 'supabase.com'],
  },
}

export default nextConfig


