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
  TrendingUp
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
    ]
  },
          {
            title: 'Management',
            items: [
              { name: 'Team Management', href: '/management', icon: Settings },
              { name: 'Roster', href: '/management/roster', icon: Users },
              { name: 'Player Bids', href: '/management/bids', icon: DollarSign },
              { name: 'Set Lineups', href: '/management/lineups', icon: Target },
              { name: 'Transactions', href: '/management/transactions', icon: TrendingUp },
            ]
          },
  {
    title: 'Community',
    items: [
      { name: 'Forum', href: '/forum', icon: MessageSquare },
      { name: 'News', href: '/news', icon: Newspaper },
      { name: 'Livestream', href: '/livestream', icon: Target },
    ]
  },
  {
    title: 'Admin',
    items: [
      { name: 'Admin Panel', href: '/admin', icon: Shield },
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
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h4 className="text-sm font-semibold mb-3">Quick Stats</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Teams:</span>
              <span className="font-semibold">16</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Players:</span>
              <span className="font-semibold">320</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Games Played:</span>
              <span className="font-semibold">128</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Season:</span>
              <span className="font-semibold">2024</span>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-semibold">U</span>
            </div>
            <div>
              <div className="text-sm font-semibold">Guest User</div>
              <div className="text-xs text-muted-foreground">Not logged in</div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <Link 
              href="/login" 
              className="block w-full text-center text-sm bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="block w-full text-center text-sm border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
