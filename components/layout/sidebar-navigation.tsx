'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  Home, 
  Users, 
  User, 
  Calendar, 
  Trophy, 
  BarChart3, 
  DollarSign, 
  MessageSquare, 
  Newspaper,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Database,
  Bot,
  GamepadIcon as GameController,
  Gavel,
  Activity,
  Wrench,
  Eye,
  UserCheck,
  FileText,
  ImageIcon,
  Coins,
  RefreshCw,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowLeftRight
} from 'lucide-react'

const navigationItems = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: Home },
      { name: 'Home', href: '/', icon: Home },
    ]
  },
  {
    title: 'League',
    items: [
      { name: 'Teams', href: '/teams', icon: Users },
      { name: 'Players', href: '/players', icon: User },
      { name: 'Matches', href: '/matches', icon: Calendar },
      { name: 'Standings', href: '/standings', icon: Trophy },
      { name: 'Statistics', href: '/statistics', icon: BarChart3 },
      { name: 'Free Agency', href: '/free-agency', icon: Gavel },
    ]
  },
  {
    title: 'Team Management',
    items: [
      { name: 'Dashboard', href: '/management', icon: Settings },
      { name: 'Roster', href: '/management/roster', icon: Users },
      { name: 'Player Bids', href: '/management/bids', icon: DollarSign },
      { name: 'Set Lineups', href: '/management/lineups', icon: Target },
      { name: 'Transactions', href: '/management/transactions', icon: ArrowLeftRight },
      { name: 'Team Settings', href: '/management/team-settings', icon: Settings },
    ]
  },
  {
    title: 'Community',
    items: [
      { name: 'Forum', href: '/forum', icon: MessageSquare },
      { name: 'News', href: '/news', icon: Newspaper },
      { name: 'Livestream', href: '/livestream', icon: Activity },
    ]
  },
  {
    title: 'Administration',
    items: [
      { name: 'Admin Dashboard', href: '/admin', icon: Shield },
      { name: 'User Management', href: '/admin/users', icon: UserCheck },
      { name: 'System Settings', href: '/admin/settings', icon: Settings },
      { name: 'Security Dashboard', href: '/admin/security-dashboard', icon: Eye },
    ]
  },
  {
    title: 'Admin Tools',
    items: [
      { name: 'EA Integration', href: '/admin/ea-stats', icon: GameController },
      { name: 'Discord Bot', href: '/admin/scs-bot', icon: Bot },
      { name: 'Bidding System', href: '/admin/bidding-recap', icon: Gavel },
      { name: 'Database Tools', href: '/admin/migrations', icon: Database },
      { name: 'Debug Tools', href: '/admin/debug', icon: Wrench },
    ]
  },
  {
    title: 'Content Management',
    items: [
      { name: 'News Management', href: '/admin/news', icon: Newspaper },
      { name: 'Photo Gallery', href: '/admin/photos', icon: ImageIcon },
      { name: 'Forum Moderation', href: '/admin/forum', icon: MessageSquare },
      { name: 'Daily Recap', href: '/admin/daily-recap', icon: Clock },
    ]
  }
]

export function SidebarNavigation() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-card border-l h-screen fixed right-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground">Crash the Net League</h2>
          <p className="text-sm text-muted-foreground">Navigation</p>
        </div>

        <nav className="space-y-6">
          {navigationItems.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon
                  
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="text-sm font-semibold mb-3 text-blue-800 dark:text-blue-200">League Stats</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-600 dark:text-blue-300">Active Teams:</span>
              <span className="font-semibold text-blue-800 dark:text-blue-100">16</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-600 dark:text-blue-300">Total Players:</span>
              <span className="font-semibold text-blue-800 dark:text-blue-100">320</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-600 dark:text-blue-300">Games Played:</span>
              <span className="font-semibold text-blue-800 dark:text-blue-100">128</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-600 dark:text-blue-300">Season:</span>
              <span className="font-semibold text-blue-800 dark:text-blue-100">2024-25</span>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-8 p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">U</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-red-800 dark:text-red-200">Guest User</div>
              <div className="text-xs text-red-600 dark:text-red-300">Not logged in</div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <Link 
              href="/login" 
              className="block w-full text-center text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="block w-full text-center text-sm border-2 border-red-500 text-red-600 dark:text-red-400 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
