import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Users, Calendar, Settings, Target, BarChart3, Gavel, ArrowLeftRight, DollarSign } from 'lucide-react'

export default function ManagementPage() {
  const managementPages = [
    { name: 'Roster Management', href: '/management/roster', icon: Users, description: 'View and manage team roster' },
    { name: 'Player Bids', href: '/management/bids', icon: DollarSign, description: 'Manage player bidding' },
    { name: 'Set Lineups', href: '/management/lineups', icon: Target, description: 'Configure team lineups' },
    { name: 'Transactions', href: '/management/transactions', icon: ArrowLeftRight, description: 'View transaction history' },
    { name: 'Team Settings', href: '/management/team-settings', icon: Settings, description: 'Configure team settings' },
    { name: 'League Settings', href: '/management/league-settings', icon: Settings, description: 'League configuration' },
    { name: 'Transaction Center', href: '/management/transaction-center', icon: Gavel, description: 'Transaction management' },
  ]

  return (
    <>
      <main>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="hero-title mb-4">Team Management Dashboard</h1>
              <p className="hero-subtitle">
                Select a management tool to manage your team
              </p>
              <div className="hero-divider mt-6"></div>
            </div>

            {/* Management Pages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {managementPages.map((page) => {
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

            {/* Quick Actions */}
            <div className="hero-card p-8 mt-8">
              <h3 className="text-2xl font-bold mb-6 hero-gradient-text">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/matches">
                  <button className="hero-button w-full p-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    View Schedule
                  </button>
                </Link>
                <Link href="/standings">
                  <button className="hero-button w-full p-4">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    League Standings
                  </button>
                </Link>
                <Link href="/free-agency">
                  <button className="hero-button w-full p-4">
                    <Gavel className="w-5 h-5 mr-2" />
                    Free Agency
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}