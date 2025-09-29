import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function FreeAgencyPage() {
  const freeAgents = [
    { name: 'John Tavares', position: 'C', age: 33, lastTeam: 'Toronto Maple Leafs', askingPrice: 8500000 },
    { name: 'Erik Karlsson', position: 'D', age: 34, lastTeam: 'San Jose Sharks', askingPrice: 11000000 },
    { name: 'Artemi Panarin', position: 'LW', age: 32, lastTeam: 'New York Rangers', askingPrice: 11500000 },
    { name: 'Connor Hellebuyck', position: 'G', age: 31, lastTeam: 'Winnipeg Jets', askingPrice: 8500000 },
    { name: 'Mark Scheifele', position: 'C', age: 31, lastTeam: 'Winnipeg Jets', askingPrice: 6500000 },
    { name: 'Gabriel Landeskog', position: 'LW', age: 31, lastTeam: 'Colorado Avalanche', askingPrice: 7000000 }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Free Agency</h1>
          <p className="text-muted-foreground">
            Available free agents for bidding in the Crash the Net League
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeAgents.map((player, index) => (
            <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {player.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                    {player.position}
                  </span>
                  <span>Age: {player.age}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Last Team: {player.lastTeam}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Asking Price</div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(player.askingPrice)}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Place Bid
                  </button>
                  <button className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Free Agency Rules</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Bidding Process:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Teams can place bids on available free agents</li>
                <li>Bids must be higher than the asking price</li>
                <li>Bidding period lasts 48 hours after first bid</li>
                <li>Highest bidder wins the player</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Salary Cap:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Teams must stay under the salary cap</li>
                <li>Current cap: $83.5 million</li>
                <li>Contracts are guaranteed for the season</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
