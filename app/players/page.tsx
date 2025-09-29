import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function PlayersPage() {
  const players = [
    { name: 'Connor McDavid', team: 'Edmonton Oilers', position: 'C', goals: 45, assists: 67, points: 112 },
    { name: 'Leon Draisaitl', team: 'Edmonton Oilers', position: 'C', goals: 38, assists: 58, points: 96 },
    { name: 'Nathan MacKinnon', team: 'Colorado Avalanche', position: 'C', goals: 42, assists: 69, points: 111 },
    { name: 'Auston Matthews', team: 'Toronto Maple Leafs', position: 'C', goals: 60, assists: 38, points: 98 },
    { name: 'Artemi Panarin', team: 'New York Rangers', position: 'LW', goals: 29, assists: 63, points: 92 },
    { name: 'Erik Karlsson', team: 'San Jose Sharks', position: 'D', goals: 25, assists: 76, points: 101 },
    { name: 'Cale Makar', team: 'Colorado Avalanche', position: 'D', goals: 17, assists: 49, points: 66 },
    { name: 'Igor Shesterkin', team: 'New York Rangers', position: 'G', wins: 37, losses: 13, savePct: 0.916 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
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
                  <th className="text-left p-4 font-semibold">Goals</th>
                  <th className="text-left p-4 font-semibold">Assists</th>
                  <th className="text-left p-4 font-semibold">Points</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {player.name.split(' ').map(word => word[0]).join('')}
                          </span>
                        </div>
                        <span className="font-semibold">{player.name}</span>
                      </div>
                    </td>
                    <td className="p-4">{player.team}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                        {player.position}
                      </span>
                    </td>
                    <td className="p-4">{player.goals || '-'}</td>
                    <td className="p-4">{player.assists || '-'}</td>
                    <td className="p-4 font-semibold">{player.points || '-'}</td>
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
      </main>

      <Footer />
    </div>
  )
}
