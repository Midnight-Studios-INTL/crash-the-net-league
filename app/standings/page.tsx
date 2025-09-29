import { Footer } from '@/components/footer'
import { getStandings } from '@/lib/database'
import type { TeamWithConference } from '@/lib/types'

export default async function StandingsPage() {
  const teams = await getStandings()

  // Group teams by conference
  const easternTeams = teams.filter(team => team.conference?.name === 'Eastern')
  const westernTeams = teams.filter(team => team.conference?.name === 'Western')

  const StandingsTable = ({ conference, teams }: { conference: string, teams: TeamWithConference[] }) => (
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
              <tr key={team.id} className="border-t hover:bg-muted/30 transition-colors">
                <td className="p-3 font-semibold">{index + 1}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {team.name.split(' ').map((word: string) => word[0]).join('')}
                      </span>
                    </div>
                    <span className="font-medium">{team.name}</span>
                  </div>
                </td>
                <td className="p-3 text-center">{team.games_played}</td>
                <td className="p-3 text-center">{team.wins}</td>
                <td className="p-3 text-center">{team.losses}</td>
                <td className="p-3 text-center">{team.otl}</td>
                <td className="p-3 text-center font-semibold text-primary">{team.points}</td>
                <td className="p-3 text-center">{team.goals_for}</td>
                <td className="p-3 text-center">{team.goals_against}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Standings</h1>
            <p className="text-muted-foreground">
              Current league standings for the Crash the Net League
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <StandingsTable conference="Eastern" teams={easternTeams} />
            <StandingsTable conference="Western" teams={westernTeams} />
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

          {teams.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No Standings Data</h3>
              <p className="text-muted-foreground">
                There are currently no teams with standings data available.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
