import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function StandingsPage() {
  const easternConference = [
    { team: 'Boston Bruins', gp: 40, w: 28, l: 12, otl: 0, pts: 56, gf: 145, ga: 98 },
    { team: 'Toronto Maple Leafs', gp: 40, w: 25, l: 15, otl: 0, pts: 50, gf: 132, ga: 115 },
    { team: 'New York Rangers', gp: 40, w: 24, l: 16, otl: 0, pts: 48, gf: 128, ga: 112 },
    { team: 'Montreal Canadiens', gp: 40, w: 22, l: 18, otl: 0, pts: 44, gf: 118, ga: 125 },
    { team: 'Tampa Bay Lightning', gp: 40, w: 20, l: 20, otl: 0, pts: 40, gf: 110, ga: 120 },
    { team: 'Florida Panthers', gp: 40, w: 18, l: 22, otl: 0, pts: 36, gf: 105, ga: 130 }
  ]

  const westernConference = [
    { team: 'Los Angeles Kings', gp: 40, w: 26, l: 14, otl: 0, pts: 52, gf: 140, ga: 102 },
    { team: 'Vancouver Canucks', gp: 40, w: 23, l: 17, otl: 0, pts: 46, gf: 125, ga: 118 },
    { team: 'Chicago Blackhawks', gp: 40, w: 20, l: 20, otl: 0, pts: 40, gf: 115, ga: 125 },
    { team: 'Detroit Red Wings', gp: 40, w: 18, l: 22, otl: 0, pts: 36, gf: 108, ga: 135 },
    { team: 'Edmonton Oilers', gp: 40, w: 16, l: 24, otl: 0, pts: 32, gf: 98, ga: 145 },
    { team: 'Calgary Flames', gp: 40, w: 14, l: 26, otl: 0, pts: 28, gf: 95, ga: 150 }
  ]

  const StandingsTable = ({ conference, teams }: { conference: string, teams: any[] }) => (
    <div className="bg-card border rounded-lg overflow-hidden">
      <div className="bg-muted p-4">
        <h3 className="text-xl font-semibold">{conference} Conference</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3 font-semibold">Rank</th>
              <th className="text-left p-3 font-semibold">Team</th>
              <th className="text-center p-3 font-semibold">GP</th>
              <th className="text-center p-3 font-semibold">W</th>
              <th className="text-center p-3 font-semibold">L</th>
              <th className="text-center p-3 font-semibold">OTL</th>
              <th className="text-center p-3 font-semibold">PTS</th>
              <th className="text-center p-3 font-semibold">GF</th>
              <th className="text-center p-3 font-semibold">GA</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="border-t hover:bg-muted/30 transition-colors">
                <td className="p-3 font-semibold">{index + 1}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {team.team.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <span className="font-medium">{team.team}</span>
                  </div>
                </td>
                <td className="p-3 text-center">{team.gp}</td>
                <td className="p-3 text-center">{team.w}</td>
                <td className="p-3 text-center">{team.l}</td>
                <td className="p-3 text-center">{team.otl}</td>
                <td className="p-3 text-center font-semibold text-primary">{team.pts}</td>
                <td className="p-3 text-center">{team.gf}</td>
                <td className="p-3 text-center">{team.ga}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Standings</h1>
          <p className="text-muted-foreground">
            Current league standings for the Crash the Net League
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StandingsTable conference="Eastern" teams={easternConference} />
          <StandingsTable conference="Western" teams={westernConference} />
        </div>

        <div className="mt-8 bg-card border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-semibold">GP:</span> Games Played
            </div>
            <div>
              <span className="font-semibold">W:</span> Wins
            </div>
            <div>
              <span className="font-semibold">L:</span> Losses
            </div>
            <div>
              <span className="font-semibold">OTL:</span> Overtime Losses
            </div>
            <div>
              <span className="font-semibold">PTS:</span> Points
            </div>
            <div>
              <span className="font-semibold">GF:</span> Goals For
            </div>
            <div>
              <span className="font-semibold">GA:</span> Goals Against
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
