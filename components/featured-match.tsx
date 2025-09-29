import type { MatchWithTeams } from '@/lib/types'

interface FeaturedMatchProps {
  match: MatchWithTeams
}

export function FeaturedMatch({ match }: FeaturedMatchProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
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
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Featured Match</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          match.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
          match.status === 'Completed' ? 'bg-green-100 text-green-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {match.status}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-2xl font-bold">
            {match.away_team?.name || 'TBD'}
          </div>
          <div className="text-4xl font-bold text-primary">{match.away_score}</div>
        </div>
        <div className="text-center mx-8">
          <div className="text-sm text-muted-foreground">{formatDate(match.match_date)}</div>
          <div className="text-sm text-muted-foreground">{formatTime(match.match_date)}</div>
          {match.has_overtime && (
            <div className="text-xs text-muted-foreground mt-1">OT</div>
          )}
          {match.has_shootout && (
            <div className="text-xs text-muted-foreground mt-1">SO</div>
          )}
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">
            {match.home_team?.name || 'TBD'}
          </div>
          <div className="text-4xl font-bold text-primary">{match.home_score}</div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          {match.status === 'In Progress' ? 'Watch Live' : 
           match.status === 'Completed' ? 'View Highlights' : 
           'View Details'}
        </button>
      </div>
    </div>
  )
}


