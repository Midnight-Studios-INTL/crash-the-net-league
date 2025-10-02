"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Footer } from '@/components/footer'
import Link from 'next/link'
import {
  Users,
  Settings,
  BarChart3,
  Newspaper,
  Database,
  GamepadIcon as GameController,
  Bot,
  MessageSquare,
  Clock,
  DollarSign,
  Shield,
  Eye,
  Wrench,
  ImageIcon,
  RefreshCw,
  Calendar,
  Trophy,
} from "lucide-react"

export default function AdminDashboardPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simple admin check - in a real app, this would check authentication
    // For now, we'll simulate admin access
    const checkAdminAccess = () => {
      // You can implement proper authentication here
      // For demo purposes, we'll allow access
      setIsAdmin(true)
      setLoading(false)
    }

    checkAdminAccess()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-red-600" />
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-4">You don't have permission to access this page.</p>
          <Link href="/" className="text-blue-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    )
  }
  const adminPages = [
    { name: 'User Management', href: '/admin/users', icon: Users, description: 'Manage users and permissions' },
    { name: 'System Settings', href: '/admin/settings', icon: Settings, description: 'Configure system settings' },
    { name: 'Security Dashboard', href: '/admin/security-dashboard', icon: Eye, description: 'Monitor security' },
    { name: 'EA Integration', href: '/admin/ea-stats', icon: GameController, description: 'EA Sports integration' },
    { name: 'Discord Bot', href: '/admin/scs-bot', icon: Bot, description: 'Discord bot configuration' },
    { name: 'Bidding System', href: '/admin/bidding-recap', icon: DollarSign, description: 'Manage bidding system' },
    { name: 'News Management', href: '/admin/news', icon: Newspaper, description: 'Manage news articles' },
    { name: 'Photo Gallery', href: '/admin/photos', icon: ImageIcon, description: 'Manage photo gallery' },
    { name: 'Forum Moderation', href: '/admin/forum', icon: MessageSquare, description: 'Moderate forum posts' },
    { name: 'Database Tools', href: '/admin/migrations', icon: Database, description: 'Database management' },
    { name: 'Debug Tools', href: '/admin/debug', icon: Wrench, description: 'System diagnostics' },
    { name: 'Daily Recap', href: '/admin/daily-recap', icon: Clock, description: 'Daily system recap' },
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="hero-title mb-4">Admin Dashboard</h1>
            <p className="hero-subtitle">
              Select an admin tool to manage the system
            </p>
            <div className="hero-divider mt-6"></div>
          </div>

          {/* Admin Pages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {adminPages.map((page) => {
              const Icon = page.icon
              return (
                <Link key={page.href} href={page.href} className="group">
                  <div className="hero-card p-6 text-center group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700" />
                    <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                      {page.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {page.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
