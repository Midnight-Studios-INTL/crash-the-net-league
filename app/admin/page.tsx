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
    // User Management
    { name: 'User Management', href: '/admin/users', icon: Users, description: 'Manage users and permissions' },
    { name: 'Banned Users', href: '/admin/banned-users', icon: Shield, description: 'View banned users' },
    { name: 'User Moderation', href: '/admin/user-moderation', icon: Eye, description: 'Moderate user activity' },
    
    // System Administration
    { name: 'System Settings', href: '/admin/settings', icon: Settings, description: 'Configure system settings' },
    { name: 'Security Dashboard', href: '/admin/security-dashboard', icon: Shield, description: 'Monitor security' },
    { name: 'System Logs', href: '/admin/system-logs', icon: Database, description: 'View system logs' },
    { name: 'League Settings', href: '/admin/league-settings', icon: Settings, description: 'Configure league' },
    
    // EA Sports Integration
    { name: 'EA Stats', href: '/admin/ea-stats', icon: GameController, description: 'EA Sports integration' },
    { name: 'Player Mappings', href: '/admin/player-mappings', icon: Users, description: 'Map EA players' },
    { name: 'Sync EA Stats', href: '/admin/sync-ea-stats', icon: RefreshCw, description: 'Sync EA data' },
    
    // Discord Integration
    { name: 'Discord Bot', href: '/admin/scs-bot', icon: Bot, description: 'Discord bot config' },
    { name: 'Discord Debug', href: '/admin/discord-debug', icon: Wrench, description: 'Debug Discord bot' },
    
    // Bidding System
    { name: 'Bidding Recap', href: '/admin/bidding-recap', icon: DollarSign, description: 'Bidding system recap' },
    { name: 'Fix Bidding System', href: '/admin/fix-bidding-system', icon: Wrench, description: 'Fix bidding issues' },
    
    // Content Management
    { name: 'News Management', href: '/admin/news', icon: Newspaper, description: 'Manage news articles' },
    { name: 'Photo Gallery', href: '/admin/photos', icon: ImageIcon, description: 'Manage photos' },
    { name: 'Forum Moderation', href: '/admin/forum', icon: MessageSquare, description: 'Moderate forum' },
    { name: 'Daily Recap', href: '/admin/daily-recap', icon: Clock, description: 'Daily recap' },
    
    // Database & System Tools
    { name: 'Database Migrations', href: '/admin/migrations', icon: Database, description: 'Run migrations' },
    { name: 'Debug Tools', href: '/admin/debug', icon: Wrench, description: 'System diagnostics' },
    { name: 'Statistics', href: '/admin/statistics', icon: BarChart3, description: 'System analytics' },
    { name: 'Token System', href: '/admin/tokens', icon: DollarSign, description: 'Manage tokens' },
    
    // Quick Actions
    { name: 'Recalculate Standings', href: '/admin/recalculate-standings', icon: Trophy, description: 'Recalc standings' },
    { name: 'Reset Password', href: '/admin/reset-password', icon: Shield, description: 'Reset user passwords' },
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
