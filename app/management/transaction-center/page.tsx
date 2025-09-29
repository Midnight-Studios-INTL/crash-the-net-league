import { Footer } from '@/components/footer'

interface Transaction {
  id: number
  type: 'trade' | 'signing' | 'release' | 'waiver'
  player: string
  fromTeam: string
  toTeam: string
  date: string
  status: 'pending' | 'approved' | 'rejected'
  details: string
}

interface TradeOffer {
  id: number
  fromTeam: string
  toTeam: string
  playersOffered: string[]
  playersRequested: string[]
  draftPicks: string[]
  status: 'pending' | 'accepted' | 'rejected' | 'expired'
  expiresAt: string
}

interface FreeAgent {
  id: number
  name: string
  position: string
  overall: number
  askingPrice: number
  contractLength: number
  interest: number
}

export default function TransactionCenterPage() {
  const transactions: Transaction[] = [
    { id: 1, type: 'trade', player: 'Connor McDavid', fromTeam: 'Edmonton Oilers', toTeam: 'Boston Bruins', date: '2024-01-15', status: 'pending', details: 'Trade involving multiple players and draft picks' },
    { id: 2, type: 'signing', player: 'Nathan MacKinnon', fromTeam: 'Free Agency', toTeam: 'Toronto Maple Leafs', date: '2024-01-14', status: 'approved', details: '3-year contract worth $8.5M per year' },
    { id: 3, type: 'release', player: 'Leon Draisaitl', fromTeam: 'Montreal Canadiens', toTeam: 'Free Agency', date: '2024-01-13', status: 'approved', details: 'Mutual contract termination' },
    { id: 4, type: 'waiver', player: 'Auston Matthews', fromTeam: 'Toronto Maple Leafs', toTeam: 'New York Rangers', date: '2024-01-12', status: 'rejected', details: 'Waiver claim rejected due to salary cap issues' }
  ]

  const tradeOffers: TradeOffer[] = [
    { id: 1, fromTeam: 'Boston Bruins', toTeam: 'Edmonton Oilers', playersOffered: ['David Pastrnak', 'Charlie McAvoy'], playersRequested: ['Connor McDavid'], draftPicks: ['2024 1st Round'], status: 'pending', expiresAt: '2024-01-20' },
    { id: 2, fromTeam: 'Toronto Maple Leafs', toTeam: 'New York Rangers', playersOffered: ['Mitch Marner'], playersRequested: ['Artemi Panarin', 'Adam Fox'], draftPicks: [], status: 'accepted', expiresAt: '2024-01-18' },
    { id: 3, fromTeam: 'Montreal Canadiens', toTeam: 'Tampa Bay Lightning', playersOffered: ['Nick Suzuki'], playersRequested: ['Steven Stamkos'], draftPicks: ['2024 2nd Round'], status: 'rejected', expiresAt: '2024-01-16' }
  ]

  const freeAgents: FreeAgent[] = [
    { id: 1, name: 'Erik Karlsson', position: 'D', overall: 89, askingPrice: 6500000, contractLength: 2, interest: 8 },
    { id: 2, name: 'John Tavares', position: 'C', overall: 87, askingPrice: 5500000, contractLength: 3, interest: 6 },
    { id: 3, name: 'Brent Burns', position: 'D', overall: 85, askingPrice: 4200000, contractLength: 1, interest: 4 },
    { id: 4, name: 'Ryan O\'Reilly', position: 'C', overall: 84, askingPrice: 3800000, contractLength: 2, interest: 7 }
  ]

  const formatSalary = (salary: number) => {
    return `$${(salary / 1000000).toFixed(1)}M`
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Transaction Center</h1>
            <p className="text-muted-foreground">
              Process trades, signings, and roster moves
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Transactions */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Recent Transactions</h3>
                <p className="text-sm text-muted-foreground">Latest trades, signings, and roster moves</p>
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
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.type === 'trade' ? 'bg-blue-100 text-blue-800' :
                            transaction.type === 'signing' ? 'bg-blue-100 text-blue-800' :
                            transaction.type === 'release' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td className="p-3 font-medium">{transaction.player}</td>
                        <td className="p-3 text-muted-foreground">{transaction.fromTeam}</td>
                        <td className="p-3 text-muted-foreground">{transaction.toTeam}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                            transaction.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
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
                <h3 className="text-xl font-semibold">Trade Offers</h3>
                <p className="text-sm text-muted-foreground">Active trade negotiations</p>
              </div>
              
              <div className="p-4 space-y-4">
                {tradeOffers.map((offer) => (
                  <div key={offer.id} className={`p-4 border rounded-lg ${offer.status === 'pending' ? 'border-blue-500 bg-blue-50' : offer.status === 'accepted' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{offer.fromTeam} → {offer.toTeam}</h4>
                        <p className="text-sm text-muted-foreground">Expires: {offer.expiresAt}</p>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        offer.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                        offer.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                        offer.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {offer.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-blue-600">Offering:</h5>
                        <ul className="text-muted-foreground">
                          {offer.playersOffered.map((player, index) => (
                            <li key={index}>• {player}</li>
                          ))}
                          {offer.draftPicks.map((pick, index) => (
                            <li key={index}>• {pick}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-600">Requesting:</h5>
                        <ul className="text-muted-foreground">
                          {offer.playersRequested.map((player, index) => (
                            <li key={index}>• {player}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {offer.status === 'pending' && (
                      <div className="mt-3 flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                          Accept
                        </button>
                        <button className="px-3 py-1 border border-red-600 text-red-600 rounded text-sm hover:bg-red-50 transition-colors">
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Free Agents */}
          <div className="mt-8 bg-card border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h3 className="text-xl font-semibold">Free Agents</h3>
              <p className="text-sm text-muted-foreground">Available players for signing</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Player</th>
                    <th className="text-center p-3 font-semibold">Position</th>
                    <th className="text-center p-3 font-semibold">Overall</th>
                    <th className="text-center p-3 font-semibold">Asking Price</th>
                    <th className="text-center p-3 font-semibold">Contract</th>
                    <th className="text-center p-3 font-semibold">Interest</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {freeAgents.map((agent) => (
                    <tr key={agent.id} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-medium">{agent.name}</td>
                      <td className="p-3 text-center">{agent.position}</td>
                      <td className="p-3 text-center font-semibold text-primary">{agent.overall}</td>
                      <td className="p-3 text-center">{formatSalary(agent.askingPrice)}</td>
                      <td className="p-3 text-center">{agent.contractLength} years</td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${agent.interest * 10}%` }}></div>
                          </div>
                          <span className="text-sm">{agent.interest}/10</span>
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Make Offer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transaction Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Transaction Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Propose Trade</h4>
                <p className="text-sm text-muted-foreground">Create a new trade offer</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Sign Free Agent</h4>
                <p className="text-sm text-muted-foreground">Make an offer to a free agent</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Release Player</h4>
                <p className="text-sm text-muted-foreground">Terminate a player's contract</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Waiver Claims</h4>
                <p className="text-sm text-muted-foreground">Submit waiver claims</p>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
