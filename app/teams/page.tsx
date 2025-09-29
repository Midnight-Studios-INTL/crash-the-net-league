import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function TeamsPage() {
  const teams = [
    { name: 'Toronto Maple Leafs', wins: 25, losses: 15, points: 50, conference: 'Eastern' },
    { name: 'Montreal Canadiens', wins: 22, losses: 18, points: 44, conference: 'Eastern' },
    { name: 'Boston Bruins', wins: 28, losses: 12, points: 56, conference: 'Eastern' },
    { name: 'New York Rangers', wins: 24, losses: 16, points: 48, conference: 'Eastern' },
    { name: 'Chicago Blackhawks', wins: 20, losses: 20, points: 40, conference: 'Western' },
    { name: 'Detroit Red Wings', wins: 18, losses: 22, points: 36, conference: 'Western' },
    { name: 'Los Angeles Kings', wins: 26, losses: 14, points: 52, conference: 'Western' },
    { name: 'Vancouver Canucks', wins: 23, losses: 17, points: 46, conference: 'Western' }
  ]

  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Teams</h1>
            <p className="text-muted-foreground">
              View all teams in the Crash the Net League
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teams.map((team, index) => (
              <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {team.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{team.conference} Conference</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Wins:</span>
                      <span className="font-semibold">{team.wins}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Losses:</span>
                      <span className="font-semibold">{team.losses}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Points:</span>
                      <span className="text-primary">{team.points}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
