import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ProfilePage() {
  const userProfile = {
    name: 'John Smith',
    email: 'john.smith@example.com',
    gamerTag: 'HockeyKing23',
    console: 'Xbox',
    primaryPosition: 'Center',
    secondaryPosition: 'Left Wing',
    team: 'Toronto Maple Leafs',
    role: 'Player',
    joinDate: '2024-01-01',
    avatar: null
  }

  const stats = {
    gamesPlayed: 25,
    goals: 8,
    assists: 12,
    points: 20,
    plusMinus: 5,
    penaltyMinutes: 12,
    shots: 45,
    shootingPercentage: 17.8,
    faceoffPercentage: 58.3,
    eloRating: 1250
  }

  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Profile</h1>
              <p className="text-muted-foreground">Manage your player profile and view your statistics</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Information */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={userProfile.name}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue={userProfile.email}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Gamer Tag</label>
                      <input
                        type="text"
                        defaultValue={userProfile.gamerTag}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Console</label>
                      <select
                        defaultValue={userProfile.console}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Xbox">Xbox</option>
                        <option value="PS5">PlayStation 5</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Primary Position</label>
                      <select
                        defaultValue={userProfile.primaryPosition}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="C">Center (C)</option>
                        <option value="LW">Left Wing (LW)</option>
                        <option value="RW">Right Wing (RW)</option>
                        <option value="LD">Left Defense (LD)</option>
                        <option value="RD">Right Defense (RD)</option>
                        <option value="G">Goalie (G)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Secondary Position</label>
                      <select
                        defaultValue={userProfile.secondaryPosition}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">None</option>
                        <option value="C">Center (C)</option>
                        <option value="LW">Left Wing (LW)</option>
                        <option value="RW">Right Wing (RW)</option>
                        <option value="LD">Left Defense (LD)</option>
                        <option value="RD">Right Defense (RD)</option>
                        <option value="G">Goalie (G)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button>Save Changes</Button>
                  </div>
                </div>

                {/* Statistics */}
                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-6">Season Statistics</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{stats.gamesPlayed}</div>
                      <div className="text-sm text-muted-foreground">Games Played</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{stats.goals}</div>
                      <div className="text-sm text-muted-foreground">Goals</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{stats.assists}</div>
                      <div className="text-sm text-muted-foreground">Assists</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{stats.points}</div>
                      <div className="text-sm text-muted-foreground">Points</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-lg font-semibold text-green-600">+{stats.plusMinus}</div>
                      <div className="text-sm text-muted-foreground">Plus/Minus</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-lg font-semibold">{stats.penaltyMinutes}</div>
                      <div className="text-sm text-muted-foreground">Penalty Minutes</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-lg font-semibold">{stats.shootingPercentage}%</div>
                      <div className="text-sm text-muted-foreground">Shooting %</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-lg font-semibold">{stats.faceoffPercentage}%</div>
                      <div className="text-sm text-muted-foreground">Faceoff %</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-lg font-semibold text-blue-600">{stats.eloRating}</div>
                      <div className="text-sm text-muted-foreground">ELO Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Avatar Upload */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Profile Picture</h3>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {userProfile.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Upload Photo
                    </Button>
                  </div>
                </div>

                {/* Team Information */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Team Information</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Team</div>
                      <div className="font-semibold">{userProfile.team}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Role</div>
                      <div className="font-semibold">{userProfile.role}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Member Since</div>
                      <div className="font-semibold">{userProfile.joinDate}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Team Page
                  </Button>
                </div>

                {/* Account Actions */}
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full">
                      Change Password
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Privacy Settings
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Notification Preferences
                    </Button>
                    <Button variant="destructive" size="sm" className="w-full">
                      Delete Account
                    </Button>
                  </div>
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
