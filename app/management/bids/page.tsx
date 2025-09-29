import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@mantine/core'
import { getPlayerBids, getPlayers } from '@/lib/database'
import type { PlayerBidding, PlayerWithUser } from '@/lib/types'

export default async function PlayerBidsPage() {
  const bids = await getPlayerBids()
  const players = await getPlayers()

  // Convert database data to local format
  const activeBids = bids.map(bid => ({
    id: bid.id,
    player: 'Player ' + bid.player_id?.substring(0, 8) || 'Unknown Player',
    position: 'C', // This would come from player data
    overall: 90, // This would come from player stats
    amount: bid.bid_amount || 0,
    status: bid.status.toLowerCase() as 'active' | 'outbid' | 'won' | 'expired',
    expiresAt: bid.bid_expires_at ? new Date(bid.bid_expires_at).toISOString().split('T')[0] : '2024-01-25',
    currentLeader: 'Team ' + bid.team_id?.substring(0, 8) || 'Unknown Team'
  }))

  // Show free agents (players without teams)
  const freeAgents = players.filter(player => !player.team_id).map(player => ({
    id: player.id,
    name: player.user?.gamer_tag || player.user?.username || 'Unknown Player',
    position: player.user?.primary_position || 'Unknown',
    overall: 85, // This would come from player stats
    askingPrice: player.salary,
    age: 25, // This would come from user profile
    lastTeam: 'Free Agent'
  }))

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Player Bids</h1>
            <p className="text-muted-foreground">
              Manage your active bids on free agents and explore available players.
            </p>
          </div>

          {/* Active Bids */}
          <div className="bg-card border rounded-lg overflow-hidden mb-8">
            <div className="bg-muted p-4">
              <h2 className="text-xl font-semibold">Your Active Bids</h2>
              <p className="text-sm text-muted-foreground">Monitor the status of your current player bids.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Player</th>
                    <th className="text-right p-3 font-semibold">Your Bid</th>
                    <th className="text-center p-3 font-semibold">Status</th>
                    <th className="text-center p-3 font-semibold">Expires</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeBids.map((bid) => (
                    <tr key={bid.id} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-medium">{bid.player}</td>
                      <td className="p-3 text-right">${bid.amount.toLocaleString()}</td>
                      <td className="p-3 text-center">
                        <Badge
                          color={
                            bid.status === 'active' ? 'yellow' :
                            bid.status === 'won' ? 'blue' :
                            bid.status === 'outbid' ? 'red' : 'gray'
                          }
                          variant="light"
                        >
                          {bid.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-center">{bid.expiresAt}</td>
                      <td className="p-3 text-center">
                        <Button variant="outline" size="sm">Adjust Bid</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Available Free Agents */}
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="bg-muted p-4">
              <h2 className="text-xl font-semibold">Available Free Agents</h2>
              <p className="text-sm text-muted-foreground">Players currently available for bidding.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Player</th>
                    <th className="text-left p-3 font-semibold">Position</th>
                    <th className="text-center p-3 font-semibold">Overall</th>
                    <th className="text-right p-3 font-semibold">Asking Price</th>
                    <th className="text-center p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {freeAgents.map((fa) => (
                    <tr key={fa.id} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-3 font-medium">{fa.name}</td>
                      <td className="p-3 text-muted-foreground">{fa.position}</td>
                      <td className="p-3 text-center">{fa.overall}</td>
                      <td className="p-3 text-right">${fa.askingPrice.toLocaleString()}</td>
                      <td className="p-3 text-center">
                        <Button size="sm">Place Bid</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}