import { Footer } from '@/components/footer'
import Link from 'next/link'

interface Player {
  id: number
  name: string
  position: string
  overall: number
  salary: number
  contractLength: number
  status: 'active' | 'injured' | 'healthy_scratch'
}

interface Bid {
  id: number
  player: string
  amount: number
  status: 'active' | 'outbid' | 'won' | 'expired'
  expiresAt: string
}

interface Lineup {
  position: string
  player: string
  overall: number
}

export default function TeamManagementPage() {
  const currentTeam = {
    name: 'Toronto Maple Leafs',
    owner: 'John Doe',
    record: '25-15-0',
    points: 50,
    salaryCap: 85000000,
    currentSalary: 72000000,
    salaryRemaining: 13000000
  }

  const roster: Player[] = [
    { id: 1, name: 'Auston Matthews', position: 'C', overall: 94, salary: 11640000, contractLength: 4, status: 'active' },
    { id: 2, name: 'Mitch Marner', position: 'RW', overall: 91, salary: 10900000, contractLength: 3, status: 'active' },
    { id: 3, name: 'William Nylander', position: 'LW', overall: 88, salary: 6800000, contractLength: 2, status: 'active' },
    { id: 4, name: 'John Tavares', position: 'C', overall: 87, salary: 11000000, contractLength: 1, status: 'active' },
    { id: 5, name: 'Morgan Rielly', position: 'LD', overall: 89, salary: 7500000, contractLength: 5, status: 'active' },
    { id: 6, name: 'Jake Muzzin', position: 'LD', overall: 82, salary: 5500000, contractLength: 1, status: 'injured' },
    { id: 7, name: 'Frederik Andersen', position: 'G', overall: 85, salary: 5000000, contractLength: 2, status: 'active' },
  ]

  const activeBids: Bid[] = [
    { id: 1, player: 'Connor McDavid', amount: 15000000, status: 'active', expiresAt: '2024-01-25' },
    { id: 2, player: 'Nathan MacKinnon', amount: 12000000, status: 'outbid', expiresAt: '2024-01-22' },
    { id: 3, player: 'Leon Draisaitl', amount: 11000000, status: 'active', expiresAt: '2024-01-28' },
  ]

  const currentLineup: Lineup[] = [
    { position: 'LW1', player: 'William Nylander', overall: 88 },
    { position: 'C1', player: 'Auston Matthews', overall: 94 },
    { position: 'RW1', player: 'Mitch Marner', overall: 91 },
    { position: 'LD1', player: 'Morgan Rielly', overall: 89 },
    { position: 'RD1', player: 'T.J. Brodie', overall: 83 },
    { position: 'G1', player: 'Frederik Andersen', overall: 85 },
  ]

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Team Management</h1>
            <p className="text-muted-foreground">
              Manage your roster, bids, lineups, and team operations
            </p>
          </div>

          {/* Team Overview */}
          <div className="mb-8 bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">{currentTeam.name}</h2>
                <p className="text-muted-foreground">Owner: {currentTeam.owner}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">Record: {currentTeam.record}</div>
                <div className="text-primary font-bold text-xl">{currentTeam.points} Points</div>
              </div>
            </div>
            
            {/* Salary Cap Info */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Salary Cap Status</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-muted-foreground">Salary Cap</div>
                  <div className="font-semibold">${(currentTeam.salaryCap / 1000000).toFixed(1)}M</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Current Salary</div>
                  <div className="font-semibold">${(currentTeam.currentSalary / 1000000).toFixed(1)}M</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Remaining</div>
                  <div className="font-semibold text-blue-600">${(currentTeam.salaryRemaining / 1000000).toFixed(1)}M</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Roster */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Current Roster</h3>
                <p className="text-sm text-muted-foreground">Manage your team's players</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Player</th>
                      <th className="text-center p-3 font-semibold">Pos</th>
                      <th className="text-center p-3 font-semibold">OVR</th>
                      <th className="text-center p-3 font-semibold">Salary</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roster.map((player) => (
                      <tr key={player.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 font-medium">{player.name}</td>
                        <td className="p-3 text-center">{player.position}</td>
                        <td className="p-3 text-center font-semibold">{player.overall}</td>
                        <td className="p-3 text-center">${(player.salary / 1000000).toFixed(1)}M</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            player.status === 'active' ? 'bg-blue-100 text-blue-800' :
                            player.status === 'injured' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {player.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Active Bids */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Active Bids</h3>
                <p className="text-sm text-muted-foreground">Monitor your player bids</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Player</th>
                      <th className="text-center p-3 font-semibold">Bid Amount</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                      <th className="text-center p-3 font-semibold">Expires</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBids.map((bid) => (
                      <tr key={bid.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 font-medium">{bid.player}</td>
                        <td className="p-3 text-center font-semibold">${(bid.amount / 1000000).toFixed(1)}M</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            bid.status === 'active' ? 'bg-blue-100 text-blue-800' :
                            bid.status === 'outbid' ? 'bg-red-100 text-red-800' :
                            bid.status === 'won' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {bid.status}
                          </span>
                        </td>
                        <td className="p-3 text-center text-sm">{bid.expiresAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Current Lineup */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Current Lineup</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {currentLineup.map((player, index) => (
                <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">{player.position}</div>
                  <div className="font-semibold">{player.player}</div>
                  <div className="text-sm text-primary">OVR {player.overall}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Management Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Team Management Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/management/roster" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Roster Management</h4>
                <p className="text-sm text-muted-foreground">View and manage your team roster</p>
              </Link>
              <Link href="/management/bids" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Player Bids</h4>
                <p className="text-sm text-muted-foreground">Bid on free agents and manage offers</p>
              </Link>
              <Link href="/management/lineups" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Set Lineups</h4>
                <p className="text-sm text-muted-foreground">Configure your team's starting lineup</p>
              </Link>
              <Link href="/management/transactions" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Transactions</h4>
                <p className="text-sm text-muted-foreground">Make trades, signings, and waivers</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}