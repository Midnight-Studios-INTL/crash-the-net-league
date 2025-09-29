import { Footer } from '@/components/footer'

interface Player {
  id: number
  name: string
  position: string
  overall: number
  salary: number
  contract: string
  status: 'active' | 'injured' | 'suspended'
}

interface Lineup {
  id: number
  name: string
  players: Player[]
  formation: string
  isActive: boolean
}

export default function TeamSettingsPage() {
  const players: Player[] = [
    { id: 1, name: 'Connor McDavid', position: 'C', overall: 95, salary: 12500000, contract: '2024-2027', status: 'active' },
    { id: 2, name: 'Leon Draisaitl', position: 'C', overall: 92, salary: 8500000, contract: '2024-2025', status: 'active' },
    { id: 3, name: 'Evan Bouchard', position: 'D', overall: 88, salary: 3200000, contract: '2024-2026', status: 'active' },
    { id: 4, name: 'Ryan Nugent-Hopkins', position: 'LW', overall: 87, salary: 5200000, contract: '2024-2029', status: 'active' },
    { id: 5, name: 'Zach Hyman', position: 'RW', overall: 85, salary: 5500000, contract: '2024-2028', status: 'injured' },
    { id: 6, name: 'Darnell Nurse', position: 'D', overall: 84, salary: 9200000, contract: '2024-2030', status: 'active' },
    { id: 7, name: 'Warren Foegele', position: 'LW', overall: 82, salary: 2750000, contract: '2024-2025', status: 'active' },
    { id: 8, name: 'Ryan McLeod', position: 'C', overall: 81, salary: 1800000, contract: '2024-2025', status: 'active' }
  ]

  const lineups: Lineup[] = [
    { id: 1, name: 'Primary Lineup', players: players.slice(0, 6), formation: '2-1-2', isActive: true },
    { id: 2, name: 'Power Play', players: players.slice(0, 5), formation: '1-2-2', isActive: false },
    { id: 3, name: 'Penalty Kill', players: players.slice(2, 6), formation: '2-2', isActive: false }
  ]

  const formatSalary = (salary: number) => {
    return `$${(salary / 1000000).toFixed(1)}M`
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Team Settings</h1>
            <p className="text-muted-foreground">
              Configure team rosters, lineups, and strategies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Roster Management */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Roster Management</h3>
                <p className="text-sm text-muted-foreground">Manage your team's player roster</p>
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
                    {players.map((player) => (
                      <tr key={player.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 font-medium">{player.name}</td>
                        <td className="p-3 text-center">{player.position}</td>
                        <td className="p-3 text-center font-semibold text-primary">{player.overall}</td>
                        <td className="p-3 text-center text-sm">{formatSalary(player.salary)}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            player.status === 'active' ? 'bg-blue-100 text-blue-800' :
                            player.status === 'injured' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
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

            {/* Lineup Management */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Lineup Management</h3>
                <p className="text-sm text-muted-foreground">Configure different lineups and formations</p>
              </div>
              
              <div className="p-4 space-y-4">
                {lineups.map((lineup) => (
                  <div key={lineup.id} className={`p-4 border rounded-lg ${lineup.isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{lineup.name}</h4>
                        <p className="text-sm text-muted-foreground">Formation: {lineup.formation}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {lineup.isActive && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Active
                          </span>
                        )}
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {lineup.players.map((player) => (
                        <div key={player.id} className="flex items-center space-x-2 text-sm">
                          <span className="font-medium">{player.name}</span>
                          <span className="text-muted-foreground">({player.position})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Statistics */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Team Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">23</div>
                <div className="text-sm text-muted-foreground">Total Players</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">$82.5M</div>
                <div className="text-sm text-muted-foreground">Salary Cap</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">87.2</div>
                <div className="text-sm text-muted-foreground">Avg Overall</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-muted-foreground">Lineups</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Auto-Generate Lineup</h4>
                <p className="text-sm text-muted-foreground">Create optimal lineup based on player ratings</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Export Roster</h4>
                <p className="text-sm text-muted-foreground">Download roster data for analysis</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Reset Lineups</h4>
                <p className="text-sm text-muted-foreground">Reset all lineups to default configuration</p>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
