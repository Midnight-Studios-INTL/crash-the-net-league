import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const userStats = {
    team: 'Toronto Maple Leafs',
    position: 'Center',
    gamesPlayed: 25,
    goals: 8,
    assists: 12,
    points: 20,
    plusMinus: 5,
    eloRating: 1250
  }

  const upcomingGames = [
    {
      opponent: 'Montreal Canadiens',
      date: '2024-01-20',
      time: '7:00 PM',
      venue: 'Scotiabank Arena',
      type: 'Home'
    },
    {
      opponent: 'Boston Bruins',
      date: '2024-01-22',
      time: '8:00 PM',
      venue: 'TD Garden',
      type: 'Away'
    }
  ]

  const recentActivity = [
    {
      type: 'game',
      description: 'Scored 2 goals vs Montreal Canadiens',
      date: '2024-01-15',
      time: '9:30 PM'
    },
    {
      type: 'trade',
      description: 'Trade proposal received from Boston Bruins',
      date: '2024-01-14',
      time: '2:15 PM'
    },
    {
      type: 'award',
      description: 'Player of the Week nomination',
      date: '2024-01-13',
      time: '11:00 AM'
    }
  ]

  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your league overview.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Stats */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Your Stats</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.gamesPlayed}</div>
                    <div className="text-sm text-muted-foreground">Games Played</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.goals}</div>
                    <div className="text-sm text-muted-foreground">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.assists}</div>
                    <div className="text-sm text-muted-foreground">Assists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.points}</div>
                    <div className="text-sm text-muted-foreground">Points</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-600">+{userStats.plusMinus}</div>
                    <div className="text-sm text-muted-foreground">Plus/Minus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-600">{userStats.eloRating}</div>
                    <div className="text-sm text-muted-foreground">ELO Rating</div>
                  </div>
                </div>
              </div>

              {/* Upcoming Games */}
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Upcoming Games</h2>
                <div className="space-y-4">
                  {upcomingGames.map((game, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-semibold">
                          {game.type === 'Home' ? 'vs' : '@'} {game.opponent}
                        </div>
                        <div className="text-sm text-muted-foreground">{game.date} at {game.time}</div>
                        <div className="text-sm text-muted-foreground">{game.venue}</div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded text-sm ${
                          game.type === 'Home' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {game.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'game' ? 'bg-blue-500' :
                        activity.type === 'trade' ? 'bg-red-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.description}</div>
                        <div className="text-sm text-muted-foreground">{activity.date} at {activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Team Info */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Team Information</h3>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TML</span>
                  </div>
                  <div className="font-semibold">{userStats.team}</div>
                  <div className="text-sm text-muted-foreground mb-4">{userStats.position}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Team Page
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Set Game Availability
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    View Lineups
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Check Messages
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Update Profile
                  </Button>
                </div>
              </div>

              {/* League News */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">League News</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium">Trade Deadline Approaching</div>
                    <div className="text-muted-foreground">Deadline is February 15th</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">All-Star Game Voting</div>
                    <div className="text-muted-foreground">Vote for your favorites</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Playoff Picture</div>
                    <div className="text-muted-foreground">Standings update</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All News
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
