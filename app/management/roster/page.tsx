import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

interface Player {
  id: number
  name: string
  position: string
  overall: number
  salary: number
  contractLength: number
  status: 'active' | 'injured' | 'healthy_scratch'
  age: number
  height: string
  weight: number
}

export default function RosterManagementPage() {
  const roster: Player[] = [
    { id: 1, name: 'Auston Matthews', position: 'C', overall: 94, salary: 11640000, contractLength: 4, status: 'active', age: 26, height: "6'3\"", weight: 220 },
    { id: 2, name: 'Mitch Marner', position: 'RW', overall: 91, salary: 10900000, contractLength: 3, status: 'active', age: 27, height: "6'0\"", weight: 175 },
    { id: 3, name: 'William Nylander', position: 'LW', overall: 88, salary: 6800000, contractLength: 2, status: 'active', age: 28, height: "6'0\"", weight: 200 },
    { id: 4, name: 'John Tavares', position: 'C', overall: 87, salary: 11000000, contractLength: 1, status: 'active', age: 34, height: "6'1\"", weight: 215 },
    { id: 5, name: 'Morgan Rielly', position: 'LD', overall: 89, salary: 7500000, contractLength: 5, status: 'active', age: 30, height: "6'1\"", weight: 210 },
    { id: 6, name: 'Jake Muzzin', position: 'LD', overall: 82, salary: 5500000, contractLength: 1, status: 'injured', age: 35, height: "6'3\"", weight: 215 },
    { id: 7, name: 'Frederik Andersen', position: 'G', overall: 85, salary: 5000000, contractLength: 2, status: 'active', age: 34, height: "6'4\"", weight: 230 },
    { id: 8, name: 'T.J. Brodie', position: 'RD', overall: 83, salary: 5000000, contractLength: 2, status: 'active', age: 33, height: "6'1\"", weight: 185 },
    { id: 9, name: 'Jake McCabe', position: 'LD', overall: 81, salary: 4000000, contractLength: 3, status: 'active', age: 31, height: "6'1\"", weight: 205 },
    { id: 10, name: 'Mark Giordano', position: 'LD', overall: 79, salary: 800000, contractLength: 1, status: 'active', age: 40, height: "6'0\"", weight: 200 },
  ]

  const totalSalary = roster.reduce((sum, player) => sum + player.salary, 0)
  const salaryCap = 85000000
  const salaryRemaining = salaryCap - totalSalary

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Roster Management</h1>
            <p className="text-muted-foreground">
              Manage your team's roster, contracts, and player status
            </p>
          </div>

          {/* Salary Cap Summary */}
          <div className="mb-8 bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Salary Cap Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Salary Cap</div>
                <div className="text-2xl font-bold">${(salaryCap / 1000000).toFixed(1)}M</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Current Salary</div>
                <div className="text-2xl font-bold">${(totalSalary / 1000000).toFixed(1)}M</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Remaining</div>
                <div className={`text-2xl font-bold ${salaryRemaining >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                  ${(salaryRemaining / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>
          </div>

          {/* Roster Table */}
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="bg-muted p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Team Roster</h2>
                <p className="text-sm text-muted-foreground">{roster.length} players</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm">Add Player</Button>
                <Button variant="outline" size="sm">Export Roster</Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Player</th>
                    <th className="text-center p-3 font-semibold">Position</th>
                    <th className="text-center p-3 font-semibold">Overall</th>
                    <th className="text-center p-3 font-semibold">Age</th>
                    <th className="text-center p-3 font-semibold">Size</th>
                    <th className="text-center p-3 font-semibold">Salary</th>
                    <th className="text-center p-3 font-semibold">Contract</th>
                    <th className="text-center p-3 font-semibold">Status</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roster.map((player) => (
                    <tr key={player.id} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {player.name.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">{player.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-center font-semibold">{player.position}</td>
                      <td className="p-3 text-center font-bold text-primary">{player.overall}</td>
                      <td className="p-3 text-center">{player.age}</td>
                      <td className="p-3 text-center text-sm">{player.height} / {player.weight}lbs</td>
                      <td className="p-3 text-center">${(player.salary / 1000000).toFixed(1)}M</td>
                      <td className="p-3 text-center">{player.contractLength} year{player.contractLength !== 1 ? 's' : ''}</td>
                      <td className="p-3 text-center">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          player.status === 'active' ? 'bg-blue-100 text-blue-800' :
                          player.status === 'injured' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {player.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Trade</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Waive Player</span>
                <span className="text-xs text-muted-foreground">Remove from roster</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Trade Player</span>
                <span className="text-xs text-muted-foreground">Make trade offers</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Sign Free Agent</span>
                <span className="text-xs text-muted-foreground">Browse available players</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Contract Extension</span>
                <span className="text-xs text-muted-foreground">Extend player contracts</span>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
