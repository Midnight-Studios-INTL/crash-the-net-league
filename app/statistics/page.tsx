import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function StatisticsPage() {
  const playerStats = [
    { name: 'Connor McDavid', team: 'Edmonton Oilers', position: 'C', goals: 45, assists: 67, points: 112, plusMinus: 15 },
    { name: 'Leon Draisaitl', team: 'Edmonton Oilers', position: 'C', goals: 38, assists: 58, points: 96, plusMinus: 8 },
    { name: 'Nathan MacKinnon', team: 'Colorado Avalanche', position: 'C', goals: 42, assists: 69, points: 111, plusMinus: 12 },
    { name: 'Auston Matthews', team: 'Toronto Maple Leafs', position: 'C', goals: 60, assists: 38, points: 98, plusMinus: 5 },
    { name: 'Artemi Panarin', team: 'New York Rangers', position: 'LW', goals: 29, assists: 63, points: 92, plusMinus: 18 },
    { name: 'Erik Karlsson', team: 'San Jose Sharks', position: 'D', goals: 25, assists: 76, points: 101, plusMinus: -3 }
  ]

  const goalieStats = [
    { name: 'Igor Shesterkin', team: 'New York Rangers', wins: 37, losses: 13, gaa: 2.15, savePct: 0.916, shutouts: 6 },
    { name: 'Andrei Vasilevskiy', team: 'Tampa Bay Lightning', wins: 32, losses: 18, gaa: 2.45, savePct: 0.908, shutouts: 4 },
    { name: 'Connor Hellebuyck', team: 'Winnipeg Jets', wins: 28, losses: 22, gaa: 2.78, savePct: 0.901, shutouts: 3 },
    { name: 'Jacob Markstrom', team: 'Calgary Flames', wins: 25, losses: 25, gaa: 2.95, savePct: 0.895, shutouts: 2 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Statistics</h1>
          <p className="text-muted-foreground">
            Player and team statistics for the Crash the Net League
          </p>
        </div>

        {/* Skater Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skater Statistics</h2>
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Player</th>
                    <th className="text-left p-4 font-semibold">Team</th>
                    <th className="text-left p-4 font-semibold">Pos</th>
                    <th className="text-center p-4 font-semibold">Goals</th>
                    <th className="text-center p-4 font-semibold">Assists</th>
                    <th className="text-center p-4 font-semibold">Points</th>
                    <th className="text-center p-4 font-semibold">+/-</th>
                  </tr>
                </thead>
                <tbody>
                  {playerStats.map((player, index) => (
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
                      <td className="p-4 text-center font-semibold">{player.goals}</td>
                      <td className="p-4 text-center">{player.assists}</td>
                      <td className="p-4 text-center font-semibold text-primary">{player.points}</td>
                      <td className={`p-4 text-center font-semibold ${player.plusMinus >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                        {player.plusMinus >= 0 ? '+' : ''}{player.plusMinus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Goalie Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Goalie Statistics</h2>
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Goalie</th>
                    <th className="text-left p-4 font-semibold">Team</th>
                    <th className="text-center p-4 font-semibold">W</th>
                    <th className="text-center p-4 font-semibold">L</th>
                    <th className="text-center p-4 font-semibold">GAA</th>
                    <th className="text-center p-4 font-semibold">SV%</th>
                    <th className="text-center p-4 font-semibold">SO</th>
                  </tr>
                </thead>
                <tbody>
                  {goalieStats.map((goalie, index) => (
                    <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {goalie.name.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          <span className="font-semibold">{goalie.name}</span>
                        </div>
                      </td>
                      <td className="p-4">{goalie.team}</td>
                      <td className="p-4 text-center font-semibold text-blue-600">{goalie.wins}</td>
                      <td className="p-4 text-center text-red-600">{goalie.losses}</td>
                      <td className="p-4 text-center">{goalie.gaa}</td>
                      <td className="p-4 text-center font-semibold">{goalie.savePct}</td>
                      <td className="p-4 text-center">{goalie.shutouts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Team Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Team Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Goals Per Game</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Boston Bruins</span>
                  <span className="font-semibold">3.63</span>
                </div>
                <div className="flex justify-between">
                  <span>Toronto Maple Leafs</span>
                  <span className="font-semibold">3.30</span>
                </div>
                <div className="flex justify-between">
                  <span>Los Angeles Kings</span>
                  <span className="font-semibold">3.50</span>
                </div>
              </div>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Power Play %</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Edmonton Oilers</span>
                  <span className="font-semibold">28.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Toronto Maple Leafs</span>
                  <span className="font-semibold">26.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Colorado Avalanche</span>
                  <span className="font-semibold">25.2%</span>
                </div>
              </div>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Penalty Kill %</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Boston Bruins</span>
                  <span className="font-semibold">87.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>New York Rangers</span>
                  <span className="font-semibold">85.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Los Angeles Kings</span>
                  <span className="font-semibold">84.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
