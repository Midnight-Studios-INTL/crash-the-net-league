import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@mantine/core'
import { getPlayers } from '@/lib/database'
import type { PlayerWithUser } from '@/lib/types'

export default async function RosterManagementPage() {
  const players = await getPlayers()
  const teamName = 'Toronto Maple Leafs'
  const salaryCap = 82500000
  const currentSalary = players.reduce((sum, player) => sum + player.salary, 0)
  const capSpace = salaryCap - currentSalary

  // Convert database players to local format
  const roster = players.map(player => ({
    id: player.id,
    name: player.user?.gamer_tag || player.user?.username || 'Unknown Player',
    position: player.user?.primary_position || 'Unknown',
    overall: 85, // This would come from player stats
    salary: player.salary,
    contractEnd: '2028', // This would come from contracts table
    status: player.status as 'active' | 'injured' | 'waived',
    age: 25, // This would come from user profile
    height: "6'0\"", // This would come from user profile
    weight: 200 // This would come from user profile
  }))

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Roster Management - {teamName}</h1>
            <p className="text-muted-foreground">
              View and manage your team's players, contracts, and salary cap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Salary Cap</h3>
              <p className="text-2xl font-bold text-primary">${salaryCap.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Cap</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Current Salary</h3>
              <p className="text-2xl font-bold text-red-600">${currentSalary.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Committed Salary</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Cap Space</h3>
              <p className="text-2xl font-bold text-blue-600">${capSpace.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Available Cap Space</p>
            </div>
          </div>

          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h2 className="text-xl font-semibold">Current Roster</h2>
              <p className="text-sm text-muted-foreground">Manage player contracts, status, and actions.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Player</th>
                    <th className="text-left p-3 font-semibold">Position</th>
                    <th className="text-center p-3 font-semibold">Overall</th>
                    <th className="text-right p-3 font-semibold">Salary</th>
                    <th className="text-center p-3 font-semibold">Contract End</th>
                    <th className="text-center p-3 font-semibold">Status</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roster.map((player) => (
                    <tr key={player.id} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-medium">{player.name}</td>
                      <td className="p-3 text-muted-foreground">{player.position}</td>
                      <td className="p-3 text-center">{player.overall}</td>
                      <td className="p-3 text-right">${player.salary.toLocaleString()}</td>
                      <td className="p-3 text-center">{player.contractEnd}</td>
                      <td className="p-3 text-center">
                        <Badge color={player.status === 'active' ? 'blue' : player.status === 'injured' ? 'orange' : 'red'} variant="light">
                          {player.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm">Waive</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <Button variant="secondary">Propose Trade</Button>
            <Button>Sign Free Agent</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}