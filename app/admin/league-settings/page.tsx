import { Footer } from '@/components/footer'

interface LeagueSetting {
  id: number
  category: string
  setting: string
  value: string
  description: string
  lastModified: string
}

export default function LeagueSettingsPage() {
  const settings: LeagueSetting[] = [
    { id: 1, category: 'General', setting: 'League Name', value: 'Crash the Net League', description: 'Official name of the league', lastModified: '2024-01-15' },
    { id: 2, category: 'General', setting: 'Season Length', value: '40 Games', description: 'Number of games per season', lastModified: '2024-01-10' },
    { id: 3, category: 'General', setting: 'Playoff Teams', value: '8 Teams', description: 'Number of teams that make playoffs', lastModified: '2024-01-10' },
    { id: 4, category: 'Gameplay', setting: 'Game Length', value: '3 Periods', description: 'Number of periods per game', lastModified: '2024-01-08' },
    { id: 5, category: 'Gameplay', setting: 'Period Length', value: '20 Minutes', description: 'Length of each period', lastModified: '2024-01-08' },
    { id: 6, category: 'Gameplay', setting: 'Overtime', value: '5 Minutes', description: 'Overtime period length', lastModified: '2024-01-08' },
    { id: 7, category: 'Rules', setting: 'Trade Deadline', value: 'March 1st', description: 'Last day for trades', lastModified: '2024-01-05' },
    { id: 8, category: 'Rules', setting: 'Roster Size', value: '23 Players', description: 'Maximum roster size', lastModified: '2024-01-05' },
    { id: 9, category: 'Rules', setting: 'Salary Cap', value: '$82.5M', description: 'Team salary cap limit', lastModified: '2024-01-05' },
    { id: 10, category: 'Tournament', setting: 'ELO K-Factor', value: '32', description: 'ELO rating change factor', lastModified: '2024-01-03' }
  ]

  const categories = ['General', 'Gameplay', 'Rules', 'Tournament']

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">League Settings</h1>
            <p className="text-muted-foreground">
              Configure league rules, seasons, and tournament settings
            </p>
          </div>

          {/* Settings by Category */}
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category} Settings</h2>
              <div className="bg-card border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-3 font-semibold">Setting</th>
                        <th className="text-left p-3 font-semibold">Value</th>
                        <th className="text-left p-3 font-semibold">Description</th>
                        <th className="text-center p-3 font-semibold">Last Modified</th>
                        <th className="text-center p-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {settings
                        .filter(setting => setting.category === category)
                        .map((setting) => (
                          <tr key={setting.id} className="border-t hover:bg-muted/30 transition-colors">
                            <td className="p-3 font-medium">{setting.setting}</td>
                            <td className="p-3">
                              <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium">
                                {setting.value}
                              </span>
                            </td>
                            <td className="p-3 text-muted-foreground">{setting.description}</td>
                            <td className="p-3 text-center text-sm text-muted-foreground">{setting.lastModified}</td>
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
            </div>
          ))}

          {/* Quick Actions */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Reset Season</h4>
                <p className="text-sm text-muted-foreground">Start a new season with current settings</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Export Settings</h4>
                <p className="text-sm text-muted-foreground">Download current configuration</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Import Settings</h4>
                <p className="text-sm text-muted-foreground">Upload configuration file</p>
              </button>
            </div>
          </div>

          {/* Season Management */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Season Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Current Season</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Season:</span>
                    <span className="font-semibold">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-semibold text-blue-600">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Games Played:</span>
                    <span className="font-semibold">128/320</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Season Actions</h4>
                <div className="space-y-2">
                  <button className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Advance to Playoffs
                  </button>
                  <button className="w-full p-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    End Season Early
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
