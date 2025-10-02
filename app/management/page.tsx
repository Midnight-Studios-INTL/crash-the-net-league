import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Users, Calendar, Clock, Trophy, DollarSign, Settings, Target, BarChart3, Gavel, ArrowLeftRight } from 'lucide-react'

export default function ManagementPage() {
  const teamInfo = {
    name: 'Crash The Net Team',
    record: '25-15-0',
    salaryCap: 82500000,
    currentSalary: 78000000,
    capSpace: 4500000,
  }

  const capSpacePercentage = (teamInfo.currentSalary / teamInfo.salaryCap) * 100

  return (
    <>
      <main>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="hero-title mb-4">Team Management Dashboard</h1>
              <p className="hero-subtitle">
                Comprehensive team management and player operations
              </p>
              <div className="hero-divider mt-6"></div>
            </div>

            {/* Team Stats */}
            <div className="hero-stats-grid mb-12">
              <div className="hero-card p-6 text-center">
                <Trophy className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="hero-stat-value">{teamInfo.record}</div>
                <div className="hero-stat-label">Team Record</div>
              </div>
              <div className="hero-card p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-red-600" />
                <div className="hero-stat-value">{capSpacePercentage.toFixed(1)}%</div>
                <div className="hero-stat-label">Cap Used</div>
              </div>
              <div className="hero-card p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="hero-stat-value">23</div>
                <div className="hero-stat-label">Active Players</div>
              </div>
              <div className="hero-card p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-3 text-red-600" />
                <div className="hero-stat-value">2</div>
                <div className="hero-stat-label">Active Bids</div>
              </div>
            </div>

            {/* Management Tools */}
            <div className="hero-grid mb-12">
              {/* Roster Management */}
              <div className="hero-feature-card">
                <div className="hero-feature-icon">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="hero-feature-title">Roster Management</h3>
                <p className="hero-feature-description mb-6">
                  View and manage your team's players and contracts
                </p>
                <div className="space-y-2">
                  <Link href="/management/roster" className="block w-full">
                    <button className="hero-button w-full">View Roster</button>
                  </Link>
                  <Link href="/management/transactions" className="block w-full">
                    <button className="hero-button-secondary w-full">Transactions</button>
                  </Link>
                </div>
              </div>

              {/* Bidding System */}
              <div className="hero-feature-card">
                <div className="hero-feature-icon">
                  <Gavel className="w-8 h-8 text-white" />
                </div>
                <h3 className="hero-feature-title">Player Bidding</h3>
                <p className="hero-feature-description mb-6">
                  Bid on free agents and manage waiver claims
                </p>
                <div className="space-y-2">
                  <Link href="/management/bids" className="block w-full">
                    <button className="hero-button w-full">Active Bids</button>
                  </Link>
                  <Link href="/free-agency" className="block w-full">
                    <button className="hero-button-secondary w-full">Free Agents</button>
                  </Link>
                </div>
              </div>

              {/* Lineups */}
              <div className="hero-feature-card">
                <div className="hero-feature-icon">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="hero-feature-title">Team Lineups</h3>
                <p className="hero-feature-description mb-6">
                  Set your forward lines, defense pairs, and goalies
                </p>
                <div className="space-y-2">
                  <Link href="/management/lineups" className="block w-full">
                    <button className="hero-button w-full">Set Lineups</button>
                  </Link>
                  <Link href="/management/team-settings" className="block w-full">
                    <button className="hero-button-secondary w-full">Team Settings</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="hero-card p-8">
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
                    <Trophy className="w-5 h-5 mr-2" />
                    League Standings
                  </button>
                </Link>
                <Link href="/statistics">
                  <button className="hero-button w-full p-4">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Team Stats
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