import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

interface Transaction {
  id: number
  type: 'trade' | 'signing' | 'waiver' | 'release'
  player: string
  fromTeam: string
  toTeam: string
  amount?: number
  date: string
  status: 'pending' | 'approved' | 'rejected'
  details: string
}

interface TradeOffer {
  id: number
  player: string
  position: string
  overall: number
  requestingTeam: string
  offeredPlayers: string[]
  status: 'pending' | 'accepted' | 'declined'
  expiresAt: string
}

export default function TransactionsPage() {
  const recentTransactions: Transaction[] = [
    { id: 1, type: 'trade', player: 'Connor McDavid', fromTeam: 'Edmonton Oilers', toTeam: 'Toronto Maple Leafs', date: '2024-01-15', status: 'pending', details: 'Trade involving 2 players + draft picks' },
    { id: 2, type: 'signing', player: 'Nathan MacKinnon', fromTeam: 'Free Agency', toTeam: 'Toronto Maple Leafs', amount: 12000000, date: '2024-01-14', status: 'approved', details: '3-year contract extension' },
    { id: 3, type: 'waiver', player: 'Leon Draisaitl', fromTeam: 'Montreal Canadiens', toTeam: 'Waivers', date: '2024-01-13', status: 'approved', details: 'Player placed on waivers' },
    { id: 4, type: 'release', player: 'Auston Matthews', fromTeam: 'Toronto Maple Leafs', toTeam: 'Free Agency', date: '2024-01-12', status: 'rejected', details: 'Contract termination rejected' },
    { id: 5, type: 'trade', player: 'Cale Makar', fromTeam: 'Colorado Avalanche', toTeam: 'Toronto Maple Leafs', date: '2024-01-11', status: 'approved', details: '1-for-1 player trade' },
  ]

  const tradeOffers: TradeOffer[] = [
    { id: 1, player: 'Connor McDavid', position: 'C', overall: 97, requestingTeam: 'Boston Bruins', offeredPlayers: ['Brad Marchand', 'Charlie McAvoy'], status: 'pending', expiresAt: '2024-01-25' },
    { id: 2, player: 'Nathan MacKinnon', position: 'C', overall: 95, requestingTeam: 'New York Rangers', offeredPlayers: ['Artemi Panarin', 'Adam Fox'], status: 'pending', expiresAt: '2024-01-22' },
    { id: 3, player: 'Leon Draisaitl', position: 'C', overall: 93, requestingTeam: 'Montreal Canadiens', offeredPlayers: ['Nick Suzuki', 'Cole Caufield'], status: 'accepted', expiresAt: '2024-01-20' },
  ]

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'trade': return '🔄'
      case 'signing': return '✍️'
      case 'waiver': return '⚠️'
      case 'release': return '❌'
      default: return '📋'
    }
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Transactions</h1>
            <p className="text-muted-foreground">
              Manage trades, signings, waivers, and player releases
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Transactions */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h2 className="text-xl font-semibold">Recent Transactions</h2>
                <p className="text-sm text-muted-foreground">Your team's transaction history</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Type</th>
                      <th className="text-left p-3 font-semibold">Player</th>
                      <th className="text-left p-3 font-semibold">From</th>
                      <th className="text-left p-3 font-semibold">To</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{getTransactionIcon(transaction.type)}</span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              transaction.type === 'trade' ? 'bg-blue-100 text-blue-800' :
                              transaction.type === 'signing' ? 'bg-green-100 text-green-800' :
                              transaction.type === 'waiver' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {transaction.type}
                            </span>
                          </div>
                        </td>
                        <td className="p-3 font-medium">{transaction.player}</td>
                        <td className="p-3 text-muted-foreground">{transaction.fromTeam}</td>
                        <td className="p-3 text-muted-foreground">{transaction.toTeam}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                            transaction.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Trade Offers */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h2 className="text-xl font-semibold">Trade Offers</h2>
                <p className="text-sm text-muted-foreground">Incoming and outgoing trade proposals</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Player</th>
                      <th className="text-center p-3 font-semibold">OVR</th>
                      <th className="text-left p-3 font-semibold">From Team</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                      <th className="text-center p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradeOffers.map((offer) => (
                      <tr key={offer.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {offer.player.split(' ').map(word => word[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium">{offer.player}</div>
                              <div className="text-sm text-muted-foreground">{offer.position}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-center font-semibold">{offer.overall}</td>
                        <td className="p-3 text-muted-foreground">{offer.requestingTeam}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            offer.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            offer.status === 'accepted' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {offer.status}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">View</Button>
                            {offer.status === 'pending' && (
                              <>
                                <Button variant="outline" size="sm">Accept</Button>
                                <Button variant="outline" size="sm">Decline</Button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Transaction Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Transaction Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Make Trade</span>
                <span className="text-xs text-muted-foreground">Propose player trades</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Sign Free Agent</span>
                <span className="text-xs text-muted-foreground">Sign available players</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Place on Waivers</span>
                <span className="text-xs text-muted-foreground">Waive players</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Release Player</span>
                <span className="text-xs text-muted-foreground">Terminate contracts</span>
              </Button>
            </div>
          </div>

          {/* Transaction Statistics */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Transaction Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Pending Transactions</div>
                <div className="text-2xl font-bold text-yellow-600">{recentTransactions.filter(t => t.status === 'pending').length}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Approved This Month</div>
                <div className="text-2xl font-bold text-green-600">{recentTransactions.filter(t => t.status === 'approved').length}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Active Trade Offers</div>
                <div className="text-2xl font-bold text-blue-600">{tradeOffers.filter(o => o.status === 'pending').length}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Total Spent</div>
                <div className="text-2xl font-bold text-primary">
                  ${(recentTransactions.filter(t => t.type === 'signing' && t.amount).reduce((sum, t) => sum + (t.amount || 0), 0) / 1000000).toFixed(1)}M
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
