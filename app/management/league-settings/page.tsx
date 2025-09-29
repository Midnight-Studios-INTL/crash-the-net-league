import { Footer } from '@/components/footer'

interface LeagueRule {
  id: number
  category: string
  rule: string
  description: string
  lastModified: string
  status: 'active' | 'inactive' | 'pending'
}

interface Schedule {
  id: number
  season: string
  startDate: string
  endDate: string
  gamesPerTeam: number
  playoffTeams: number
  status: 'active' | 'upcoming' | 'completed'
}

interface Configuration {
  id: number
  setting: string
  value: string
  description: string
  category: string
}

export default function LeagueSettingsPage() {
  const rules: LeagueRule[] = [
    { id: 1, category: 'Roster', rule: 'Maximum Roster Size', description: 'Teams can carry a maximum of 23 players', lastModified: '2024-01-15', status: 'active' },
    { id: 2, category: 'Roster', rule: 'Minimum Roster Size', description: 'Teams must have at least 20 players', lastModified: '2024-01-15', status: 'active' },
    { id: 3, category: 'Salary Cap', rule: 'Salary Cap Limit', description: 'Teams cannot exceed $82.5M in total salary', lastModified: '2024-01-10', status: 'active' },
    { id: 4, category: 'Salary Cap', rule: 'LTIR Relief', description: 'Long-term injury relief allows cap flexibility', lastModified: '2024-01-10', status: 'active' },
    { id: 5, category: 'Trades', rule: 'Trade Deadline', description: 'All trades must be completed by March 1st', lastModified: '2024-01-08', status: 'active' },
    { id: 6, category: 'Trades', rule: 'No-Trade Clauses', description: 'Players with NTC must approve trades', lastModified: '2024-01-08', status: 'active' },
    { id: 7, category: 'Playoffs', rule: 'Playoff Format', description: 'Best of 7 series for all rounds', lastModified: '2024-01-05', status: 'active' },
    { id: 8, category: 'Playoffs', rule: 'Seeding', description: 'Top 8 teams from each conference qualify', lastModified: '2024-01-05', status: 'active' }
  ]

  const schedules: Schedule[] = [
    { id: 1, season: '2024', startDate: '2024-01-01', endDate: '2024-04-30', gamesPerTeam: 40, playoffTeams: 8, status: 'active' },
    { id: 2, season: '2025', startDate: '2025-01-01', endDate: '2025-04-30', gamesPerTeam: 40, playoffTeams: 8, status: 'upcoming' }
  ]

  const configurations: Configuration[] = [
    { id: 1, setting: 'League Name', value: 'Crash the Net League', description: 'Official name of the league', category: 'General' },
    { id: 2, setting: 'Commissioner', value: 'Admin User', description: 'League commissioner name', category: 'General' },
    { id: 3, setting: 'Game Length', value: '3 Periods', description: 'Number of periods per game', category: 'Gameplay' },
    { id: 4, setting: 'Period Length', value: '20 Minutes', description: 'Length of each period', category: 'Gameplay' },
    { id: 5, setting: 'Overtime', value: '5 Minutes', description: 'Overtime period length', category: 'Gameplay' },
    { id: 6, setting: 'ELO K-Factor', value: '32', description: 'ELO rating change factor', category: 'Tournament' },
    { id: 7, setting: 'Tournament Format', value: 'Single Elimination', description: 'Tournament elimination style', category: 'Tournament' }
  ]

  const categories = ['Roster', 'Salary Cap', 'Trades', 'Playoffs']

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">League Settings</h1>
            <p className="text-muted-foreground">
              Manage league rules, schedules, and configurations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* League Rules */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">League Rules</h3>
                <p className="text-sm text-muted-foreground">Current league rules and regulations</p>
              </div>
              
              <div className="overflow-x-auto max-h-96">
                <table className="w-full">
                  <thead className="bg-muted/50 sticky top-0">
                    <tr>
                      <th className="text-left p-3 font-semibold">Category</th>
                      <th className="text-left p-3 font-semibold">Rule</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rules.map((rule) => (
                      <tr key={rule.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 text-sm text-muted-foreground">{rule.category}</td>
                        <td className="p-3">
                          <div>
                            <div className="font-medium">{rule.rule}</div>
                            <div className="text-sm text-muted-foreground">{rule.description}</div>
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            rule.status === 'active' ? 'bg-blue-100 text-blue-800' :
                            rule.status === 'inactive' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {rule.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Season Schedules */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Season Schedules</h3>
                <p className="text-sm text-muted-foreground">Manage league seasons and schedules</p>
              </div>
              
              <div className="p-4 space-y-4">
                {schedules.map((schedule) => (
                  <div key={schedule.id} className={`p-4 border rounded-lg ${schedule.status === 'active' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">Season {schedule.season}</h4>
                        <p className="text-sm text-muted-foreground">{schedule.startDate} - {schedule.endDate}</p>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        schedule.status === 'active' ? 'bg-blue-100 text-blue-800' :
                        schedule.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {schedule.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Games per Team:</span> {schedule.gamesPerTeam}
                      </div>
                      <div>
                        <span className="font-semibold">Playoff Teams:</span> {schedule.playoffTeams}
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* League Configuration */}
          <div className="mt-8 bg-card border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h3 className="text-xl font-semibold">League Configuration</h3>
              <p className="text-sm text-muted-foreground">Basic league settings and parameters</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Setting</th>
                    <th className="text-left p-3 font-semibold">Value</th>
                    <th className="text-left p-3 font-semibold">Description</th>
                    <th className="text-center p-3 font-semibold">Category</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {configurations.map((config) => (
                    <tr key={config.id} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-medium">{config.setting}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium">
                          {config.value}
                        </span>
                      </td>
                      <td className="p-3 text-muted-foreground">{config.description}</td>
                      <td className="p-3 text-center text-sm text-muted-foreground">{config.category}</td>
                      <td className="p-3 text-center">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Management Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Management Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Create New Season</h4>
                <p className="text-sm text-muted-foreground">Start a new league season</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Export Rules</h4>
                <p className="text-sm text-muted-foreground">Download league rules document</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Reset Settings</h4>
                <p className="text-sm text-muted-foreground">Restore default configurations</p>
              </button>
            </div>
          </div>

          {/* League Statistics */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">League Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">16</div>
                <div className="text-sm text-muted-foreground">Total Teams</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">320</div>
                <div className="text-sm text-muted-foreground">Total Players</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">128</div>
                <div className="text-sm text-muted-foreground">Games Played</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-muted-foreground">Active Rules</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
