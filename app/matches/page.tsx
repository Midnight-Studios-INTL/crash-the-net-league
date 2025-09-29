import { Footer } from '@/components/footer'
import { getMatches } from '@/lib/database'
import type { MatchWithTeams } from '@/lib/types'

export default async function MatchesPage() {
  const matches = await getMatches()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Scheduled':
        return 'bg-gray-100 text-gray-800'
      case 'Cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Matches</h1>
            <p className="text-muted-foreground">
              View all matches in the Crash the Net League
            </p>
          </div>

          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="font-semibold text-lg">
                        {match.away_team?.name || 'TBD'}
                      </div>
                      <div className="text-3xl font-bold text-primary">{match.away_score}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">@</div>
                      <div className="text-sm text-muted-foreground">{formatDate(match.match_date)}</div>
                      <div className="text-sm text-muted-foreground">{formatTime(match.match_date)}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg">
                        {match.home_team?.name || 'TBD'}
                      </div>
                      <div className="text-3xl font-bold text-primary">{match.home_score}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(match.status)}`}>
                      {match.status}
                    </span>
                    {match.has_overtime && (
                      <div className="text-xs text-muted-foreground mt-1">OT</div>
                    )}
                    {match.has_shootout && (
                      <div className="text-xs text-muted-foreground mt-1">SO</div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    View Details
                  </button>
                  {match.status === 'Scheduled' && (
                    <button className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                      Set Lineup
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {matches.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No Matches Found</h3>
              <p className="text-muted-foreground">
                There are currently no matches scheduled or completed.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
