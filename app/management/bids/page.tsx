import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

interface Bid {
  id: number
  player: string
  position: string
  overall: number
  amount: number
  status: 'active' | 'outbid' | 'won' | 'expired'
  expiresAt: string
  currentLeader?: string
}

interface FreeAgent {
  id: number
  name: string
  position: string
  overall: number
  askingPrice: number
  age: number
  lastTeam: string
}

export default function PlayerBidsPage() {
  const activeBids: Bid[] = [
    { id: 1, player: 'Connor McDavid', position: 'C', overall: 97, amount: 15000000, status: 'active', expiresAt: '2024-01-25', currentLeader: 'Toronto Maple Leafs' },
    { id: 2, player: 'Nathan MacKinnon', position: 'C', overall: 95, amount: 12000000, status: 'outbid', expiresAt: '2024-01-22', currentLeader: 'Boston Bruins' },
    { id: 3, player: 'Leon Draisaitl', position: 'C', overall: 93, amount: 11000000, status: 'active', expiresAt: '2024-01-28', currentLeader: 'Toronto Maple Leafs' },
    { id: 4, player: 'Cale Makar', position: 'RD', overall: 94, amount: 13000000, status: 'won', expiresAt: '2024-01-20' },
    { id: 5, player: 'Nikita Kucherov', position: 'RW', overall: 92, amount: 10000000, status: 'expired', expiresAt: '2024-01-18' },
  ]

  const freeAgents: FreeAgent[] = [
    { id: 1, name: 'Sidney Crosby', position: 'C', overall: 89, askingPrice: 8000000, age: 36, lastTeam: 'Pittsburgh Penguins' },
    { id: 2, name: 'Erik Karlsson', position: 'RD', overall: 87, askingPrice: 6000000, age: 33, lastTeam: 'San Jose Sharks' },
    { id: 3, name: 'Brad Marchand', position: 'LW', overall: 86, askingPrice: 7000000, age: 35, lastTeam: 'Boston Bruins' },
    { id: 4, name: 'Ryan O\'Reilly', position: 'C', overall: 84, askingPrice: 5000000, age: 33, lastTeam: 'Nashville Predators' },
    { id: 5, name: 'Tyler Seguin', position: 'C', overall: 83, askingPrice: 4500000, age: 32, lastTeam: 'Dallas Stars' },
  ]

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Player Bids</h1>
            <p className="text-muted-foreground">
              Bid on free agents and manage your active offers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Active Bids */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h2 className="text-xl font-semibold">Active Bids</h2>
                <p className="text-sm text-muted-foreground">Your current player bids</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Player</th>
                      <th className="text-center p-3 font-semibold">OVR</th>
                      <th className="text-center p-3 font-semibold">Your Bid</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                      <th className="text-center p-3 font-semibold">Expires</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBids.map((bid) => (
                      <tr key={bid.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {bid.player.split(' ').map(word => word[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium">{bid.player}</div>
                              <div className="text-sm text-muted-foreground">{bid.position}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-center font-semibold">{bid.overall}</td>
                        <td className="p-3 text-center font-semibold">${(bid.amount / 1000000).toFixed(1)}M</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            bid.status === 'active' ? 'bg-blue-100 text-blue-800' :
                            bid.status === 'outbid' ? 'bg-red-100 text-red-800' :
                            bid.status === 'won' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {bid.status}
                          </span>
                        </td>
                        <td className="p-3 text-center text-sm">{bid.expiresAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Free Agents */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h2 className="text-xl font-semibold">Available Free Agents</h2>
                <p className="text-sm text-muted-foreground">Players available for bidding</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Player</th>
                      <th className="text-center p-3 font-semibold">OVR</th>
                      <th className="text-center p-3 font-semibold">Asking</th>
                      <th className="text-center p-3 font-semibold">Age</th>
                      <th className="text-center p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {freeAgents.map((player) => (
                      <tr key={player.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {player.name.split(' ').map(word => word[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium">{player.name}</div>
                              <div className="text-sm text-muted-foreground">{player.position} • {player.lastTeam}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-center font-semibold">{player.overall}</td>
                        <td className="p-3 text-center">${(player.askingPrice / 1000000).toFixed(1)}M</td>
                        <td className="p-3 text-center">{player.age}</td>
                        <td className="p-3 text-center">
                          <Button variant="outline" size="sm">Bid</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bid Management Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Bid Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Place New Bid</span>
                <span className="text-xs text-muted-foreground">Bid on free agents</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Increase Bid</span>
                <span className="text-xs text-muted-foreground">Raise existing offers</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Withdraw Bid</span>
                <span className="text-xs text-muted-foreground">Cancel active bids</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Bid History</span>
                <span className="text-xs text-muted-foreground">View past bids</span>
              </Button>
            </div>
          </div>

          {/* Bid Statistics */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Bid Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Active Bids</div>
                <div className="text-2xl font-bold text-blue-600">{activeBids.filter(b => b.status === 'active').length}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Won Bids</div>
                <div className="text-2xl font-bold text-green-600">{activeBids.filter(b => b.status === 'won').length}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Outbid</div>
                <div className="text-2xl font-bold text-red-600">{activeBids.filter(b => b.status === 'outbid').length}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Total Spent</div>
                <div className="text-2xl font-bold text-primary">
                  ${(activeBids.filter(b => b.status === 'won').reduce((sum, b) => sum + b.amount, 0) / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
