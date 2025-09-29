import type { MatchWithTeams } from '@/lib/types'

interface UpcomingGamesProps {
  matches: MatchWithTeams[]
}

export function UpcomingGames({ matches }: UpcomingGamesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
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
    <div className="space-y-4">
      {matches.map((match) => (
        <div key={match.id} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="font-semibold">
                  {match.away_team?.name || 'TBD'}
                </div>
                <div className="text-sm text-muted-foreground">@</div>
                <div className="font-semibold">
                  {match.home_team?.name || 'TBD'}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{formatDate(match.match_date)}</div>
              <div className="text-sm text-muted-foreground">{formatTime(match.match_date)}</div>
              <div className={`text-sm px-2 py-1 rounded-full ${
                match.status === 'Scheduled' ? 'bg-gray-100 text-gray-800' :
                match.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {match.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


