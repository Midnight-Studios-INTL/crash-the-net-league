import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function MatchesPage() {
  const matches = [
    {
      id: 1,
      homeTeam: 'Toronto Maple Leafs',
      awayTeam: 'Montreal Canadiens',
      homeScore: 4,
      awayScore: 2,
      date: '2024-01-15',
      time: '7:00 PM',
      status: 'Completed',
      venue: 'Scotiabank Arena'
    },
    {
      id: 2,
      homeTeam: 'Boston Bruins',
      awayTeam: 'New York Rangers',
      homeScore: 0,
      awayScore: 0,
      date: '2024-01-16',
      time: '8:00 PM',
      status: 'Scheduled',
      venue: 'TD Garden'
    },
    {
      id: 3,
      homeTeam: 'Chicago Blackhawks',
      awayTeam: 'Detroit Red Wings',
      homeScore: 3,
      awayScore: 1,
      date: '2024-01-17',
      time: '7:30 PM',
      status: 'Completed',
      venue: 'United Center'
    },
    {
      id: 4,
      homeTeam: 'Los Angeles Kings',
      awayTeam: 'Vancouver Canucks',
      homeScore: 0,
      awayScore: 0,
      date: '2024-01-18',
      time: '10:00 PM',
      status: 'Scheduled',
      venue: 'Crypto.com Arena'
    }
  ]

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
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
                    <div className="font-semibold text-lg">{match.awayTeam}</div>
                    <div className="text-3xl font-bold text-primary">{match.awayScore}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">@</div>
                    <div className="text-sm text-muted-foreground">{match.date}</div>
                    <div className="text-sm text-muted-foreground">{match.time}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">{match.homeTeam}</div>
                    <div className="text-3xl font-bold text-primary">{match.homeScore}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(match.status)}`}>
                    {match.status}
                  </span>
                  <div className="text-sm text-muted-foreground mt-2">{match.venue}</div>
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
      </main>

      <Footer />
    </div>
  )
}
