import { Footer } from '@/components/footer'
import { getTeams } from '@/lib/database'
import type { TeamWithConference } from '@/lib/types'

export default async function TeamsPage() {
  const teams = await getTeams()

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Teams</h1>
            <p className="text-muted-foreground">
              View all teams in the Crash the Net League
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teams.map((team) => (
              <div key={team.id} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {team.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    {team.conference?.name || 'No Conference'} Conference
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Wins:</span>
                      <span className="font-semibold">{team.wins}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Losses:</span>
                      <span className="font-semibold">{team.losses}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>OTL:</span>
                      <span className="font-semibold">{team.otl}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Points:</span>
                      <span className="text-primary">{team.points}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Games Played:</span>
                      <span className="font-semibold">{team.games_played}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {teams.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No Teams Found</h3>
              <p className="text-muted-foreground">
                There are currently no active teams in the league.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
