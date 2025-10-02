"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useSupabase } from "@/lib/supabase/client"
import Link from "next/link"
import {
  Users,
  Trophy,
  Calendar,
  Settings,
  ImageIcon,
  BarChart3,
  ShieldCheck,
  Newspaper,
  Database,
  GamepadIcon as GameController,
  Activity,
  ClipboardList,
  Bot,
  RefreshCw,
  MessageSquare,
  Trash2,
  Clock,
  DollarSign,
  Coins,
  Crown,
  Flame,
  Shield,
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Award,
  Medal,
  Star,
  ArrowRight,
  Lock,
  Eye,
  Cog,
  Wrench,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function AdminDashboardPage() {
  const { supabase, session } = useSupabase()
  const { toast } = useToast()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuthorization() {
      if (!session?.user) {
        toast({
          title: "Unauthorized",
          description: "You must be logged in to access this page.",
          variant: "destructive",
        })
        router.push("/login")
        return
      }

      try {
        const { data: adminRoleData, error: adminRoleError } = await supabase
          .from("user_roles")
          .select("*")
          .eq("user_id", session.user.id)
          .eq("role", "Admin")

        if (adminRoleError || !adminRoleData || adminRoleData.length === 0) {
          toast({
            title: "Access denied",
            description: "You don't have permission to access the admin dashboard.",
            variant: "destructive",
          })
          router.push("/")
          return
        }

        setIsAdmin(true)
      } catch (error: any) {
        console.error("Error checking authorization:", error)
        toast({
          title: "Error",
          description: error.message || "An error occurred",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    checkAuthorization()
  }, [supabase, session, toast, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="hero-title mb-4">Admin Dashboard</h1>
          <p className="hero-subtitle">
            Comprehensive system administration and management tools
          </p>
          <div className="hero-divider mt-6"></div>
        </div>

        {/* Quick Stats */}
        <div className="hero-stats-grid mb-12">
          <Card className="hero-card">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <div className="hero-stat-value">1,247</div>
              <div className="hero-stat-label">Total Users</div>
            </CardContent>
          </Card>
          <Card className="hero-card">
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 mx-auto mb-3 text-red-600" />
              <div className="hero-stat-value">98.5%</div>
              <div className="hero-stat-label">Uptime</div>
            </CardContent>
          </Card>
          <Card className="hero-card">
            <CardContent className="p-6 text-center">
              <Database className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <div className="hero-stat-value">45ms</div>
              <div className="hero-stat-label">DB Response</div>
            </CardContent>
          </Card>
          <Card className="hero-card">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 mx-auto mb-3 text-red-600" />
              <div className="hero-stat-value">Secure</div>
              <div className="hero-stat-label">System Status</div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tools Grid */}
        <div className="hero-grid mb-12">
          {/* User Management */}
          <Card className="hero-feature-card">
            <div className="hero-feature-icon">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="hero-feature-title">User Management</h3>
            <p className="hero-feature-description mb-6">
              Manage user accounts, roles, and permissions
            </p>
            <div className="space-y-2">
              <Link href="/admin/users" className="block w-full">
                <button className="hero-button w-full">Manage Users</button>
              </Link>
              <Link href="/admin/banned-users" className="block w-full">
                <button className="hero-button-secondary w-full">Banned Users</button>
              </Link>
            </div>
          </Card>

          {/* System Administration */}
          <Card className="hero-feature-card">
            <div className="hero-feature-icon">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="hero-feature-title">System Settings</h3>
            <p className="hero-feature-description mb-6">
              Configure system settings and preferences
            </p>
            <div className="space-y-2">
              <Link href="/admin/settings" className="block w-full">
                <button className="hero-button w-full">System Settings</button>
              </Link>
              <Link href="/admin/security-dashboard" className="block w-full">
                <button className="hero-button-secondary w-full">Security</button>
              </Link>
            </div>
          </Card>

          {/* EA Sports Integration */}
          <Card className="hero-feature-card">
            <div className="hero-feature-icon">
              <GameController className="w-8 h-8 text-white" />
            </div>
            <h3 className="hero-feature-title">EA Integration</h3>
            <p className="hero-feature-description mb-6">
              Manage EA Sports data and player statistics
            </p>
            <div className="space-y-2">
              <Link href="/admin/ea-stats" className="block w-full">
                <button className="hero-button w-full">EA Stats</button>
              </Link>
              <Link href="/admin/player-mappings" className="block w-full">
                <button className="hero-button-secondary w-full">Player Mappings</button>
              </Link>
            </div>
          </Card>

          {/* Discord Integration */}
          <Card className="hero-feature-card">
            <div className="hero-feature-icon">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="hero-feature-title">Discord Bot</h3>
            <p className="hero-feature-description mb-6">
              Configure Discord integration and bot settings
            </p>
            <div className="space-y-2">
              <Link href="/admin/scs-bot" className="block w-full">
                <button className="hero-button w-full">Bot Config</button>
              </Link>
              <Link href="/admin/discord-debug" className="block w-full">
                <button className="hero-button-secondary w-full">Debug</button>
              </Link>
            </div>
          </Card>

          {/* Bidding System */}
          <Card className="hero-feature-card">
            <div className="hero-feature-icon">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="hero-feature-title">Bidding System</h3>
            <p className="hero-feature-description mb-6">
              Manage player bidding and auction system
            </p>
            <div className="space-y-2">
              <Link href="/admin/bidding-recap" className="block w-full">
                <button className="hero-button w-full">Bidding Recap</button>
              </Link>
              <Link href="/admin/fix-bidding-system" className="block w-full">
                <button className="hero-button-secondary w-full">Fix Issues</button>
              </Link>
            </div>
          </Card>

          {/* Content Management */}
          <Card className="hero-feature-card">
            <div className="hero-feature-icon">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
            <h3 className="hero-feature-title">Content</h3>
            <p className="hero-feature-description mb-6">
              Manage news, photos, and forum content
            </p>
            <div className="space-y-2">
              <Link href="/admin/news" className="block w-full">
                <button className="hero-button w-full">News</button>
              </Link>
              <Link href="/admin/photos" className="block w-full">
                <button className="hero-button-secondary w-full">Photos</button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Database & System Tools */}
        <Card className="hero-card p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 hero-gradient-text">Database & System Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/migrations" className="hero-hover-lift">
              <Card className="p-4 text-center border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400">
                <Database className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold mb-2">Migrations</h4>
                <p className="text-sm text-muted-foreground">Run database migrations</p>
              </Card>
            </Link>
            <Link href="/admin/debug" className="hero-hover-lift">
              <Card className="p-4 text-center border-2 border-red-200 dark:border-red-700 hover:border-red-400">
                <Wrench className="w-8 h-8 mx-auto mb-3 text-red-600" />
                <h4 className="font-semibold mb-2">Debug Tools</h4>
                <p className="text-sm text-muted-foreground">System diagnostics</p>
              </Card>
            </Link>
            <Link href="/admin/statistics" className="hero-hover-lift">
              <Card className="p-4 text-center border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400">
                <BarChart3 className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold mb-2">Statistics</h4>
                <p className="text-sm text-muted-foreground">System analytics</p>
              </Card>
            </Link>
            <Link href="/admin/tokens" className="hero-hover-lift">
              <Card className="p-4 text-center border-2 border-red-200 dark:border-red-700 hover:border-red-400">
                <Coins className="w-8 h-8 mx-auto mb-3 text-red-600" />
                <h4 className="font-semibold mb-2">Token System</h4>
                <p className="text-sm text-muted-foreground">Manage tokens</p>
              </Card>
            </Link>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="hero-card p-8">
          <h3 className="text-2xl font-bold mb-6 hero-gradient-text">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/sync-ea-stats">
              <button className="hero-button w-full p-4">
                <RefreshCw className="w-5 h-5 mr-2" />
                Sync EA Stats
              </button>
            </Link>
            <Link href="/admin/recalculate-standings">
              <button className="hero-button w-full p-4">
                <Trophy className="w-5 h-5 mr-2" />
                Recalculate Standings
              </button>
            </Link>
            <Link href="/admin/daily-recap">
              <button className="hero-button w-full p-4">
                <Calendar className="w-5 h-5 mr-2" />
                Daily Recap
              </button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
