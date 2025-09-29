import { Footer } from '@/components/footer'

interface Player {
  rank: number
  name: string
  team: string
  elo: number
  gamesPlayed: number
  winRate: number
  trend: 'up' | 'down' | 'stable'
}

export default function ELORankingsPage() {
  const players: Player[] = [
    { rank: 1, name: 'Connor McDavid', team: 'Edmonton Oilers', elo: 1850, gamesPlayed: 45, winRate: 0.78, trend: 'up' },
    { rank: 2, name: 'Nathan MacKinnon', team: 'Colorado Avalanche', elo: 1820, gamesPlayed: 42, winRate: 0.76, trend: 'up' },
    { rank: 3, name: 'Leon Draisaitl', team: 'Edmonton Oilers', elo: 1795, gamesPlayed: 44, winRate: 0.73, trend: 'stable' },
    { rank: 4, name: 'Auston Matthews', team: 'Toronto Maple Leafs', elo: 1780, gamesPlayed: 41, winRate: 0.71, trend: 'down' },
    { rank: 5, name: 'Artemi Panarin', team: 'New York Rangers', elo: 1765, gamesPlayed: 43, winRate: 0.69, trend: 'up' },
    { rank: 6, name: 'Erik Karlsson', team: 'Pittsburgh Penguins', elo: 1750, gamesPlayed: 40, winRate: 0.68, trend: 'stable' },
    { rank: 7, name: 'Cale Makar', team: 'Colorado Avalanche', elo: 1740, gamesPlayed: 38, winRate: 0.67, trend: 'up' },
    { rank: 8, name: 'Mitch Marner', team: 'Toronto Maple Leafs', elo: 1725, gamesPlayed: 42, winRate: 0.65, trend: 'down' },
    { rank: 9, name: 'David Pastrnak', team: 'Boston Bruins', elo: 1710, gamesPlayed: 44, winRate: 0.64, trend: 'stable' },
    { rank: 10, name: 'Roman Josi', team: 'Nashville Predators', elo: 1695, gamesPlayed: 41, winRate: 0.63, trend: 'up' }
  ]

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">ELO Rankings</h1>
            <p className="text-muted-foreground">
              Current ELO rankings for all players in the Crash the Net League
            </p>
          </div>

          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h3 className="text-xl font-semibold">Player Rankings</h3>
              <p className="text-sm text-muted-foreground">Updated daily based on match performance</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Rank</th>
                    <th className="text-left p-3 font-semibold">Player</th>
                    <th className="text-left p-3 font-semibold">Team</th>
                    <th className="text-center p-3 font-semibold">ELO</th>
                    <th className="text-center p-3 font-semibold">Games</th>
                    <th className="text-center p-3 font-semibold">Win Rate</th>
                    <th className="text-center p-3 font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr key={player.rank} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-semibold">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {player.rank}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 font-medium">{player.name}</td>
                      <td className="p-3 text-muted-foreground">{player.team}</td>
                      <td className="p-3 text-center font-semibold text-primary">{player.elo}</td>
                      <td className="p-3 text-center">{player.gamesPlayed}</td>
                      <td className="p-3 text-center">{(player.winRate * 100).toFixed(1)}%</td>
                      <td className="p-3 text-center">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          player.trend === 'up' ? 'bg-green-100 text-green-800' :
                          player.trend === 'down' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {player.trend === 'up' ? '↗' : player.trend === 'down' ? '↘' : '→'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">How ELO Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Rating System</h4>
                <p className="text-muted-foreground">
                  ELO ratings start at 1500 and adjust based on match outcomes. 
                  Beating higher-rated opponents increases your rating more than beating lower-rated ones.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Match Impact</h4>
                <p className="text-muted-foreground">
                  Rating changes depend on the difference between players' ratings. 
                  Upsets result in larger rating swings for both players.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Season Reset</h4>
                <p className="text-muted-foreground">
                  Ratings reset at the beginning of each season, but players 
                  maintain their skill level through consistent performance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rankings</h4>
                <p className="text-muted-foreground">
                  Rankings are updated after each match and determine 
                  tournament seeding and matchmaking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
