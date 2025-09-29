import { Footer } from '@/components/footer'
import { getPlayers } from '@/lib/database'
import type { PlayerWithUser } from '@/lib/types'

export default async function PlayersPage() {
  const players = await getPlayers()

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Players</h1>
            <p className="text-muted-foreground">
              View all players in the Crash the Net League
            </p>
          </div>

          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Player</th>
                    <th className="text-left p-4 font-semibold">Team</th>
                    <th className="text-left p-4 font-semibold">Position</th>
                    <th className="text-left p-4 font-semibold">Role</th>
                    <th className="text-left p-4 font-semibold">Salary</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr key={player.id} className="border-t hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {player.user?.gamer_tag?.split(' ').map(word => word[0]).join('') || 
                               player.user?.username?.split(' ').map(word => word[0]).join('') || 
                               'P'}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold">
                              {player.user?.gamer_tag || player.user?.username || 'Unknown Player'}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {player.user?.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        {player.team_id ? 'Team Assigned' : 'Free Agent'}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {player.user?.primary_position || 'Unknown'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-sm ${
                          player.role === 'GM' ? 'bg-red-100 text-red-800' :
                          player.role === 'AGM' ? 'bg-orange-100 text-orange-800' :
                          player.role === 'Owner' ? 'bg-purple-100 text-purple-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {player.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold">
                          ${player.salary.toLocaleString()}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-sm ${
                          player.status === 'active' ? 'bg-green-100 text-green-800' :
                          player.status === 'free_agent' ? 'bg-blue-100 text-blue-800' :
                          player.status === 'waived' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {player.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <button className="text-primary hover:underline text-sm">
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {players.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No Players Found</h3>
              <p className="text-muted-foreground">
                There are currently no active players in the league.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
