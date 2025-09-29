import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, Text, Badge, Group, RingProgress } from '@mantine/core'
import { getPlayers, getPlayerBids } from '@/lib/database'
import type { PlayerWithUser } from '@/lib/types'

interface Player {
  id: string
  name: string
  position: string
  salary: number
  contractEnd: string
  status: 'active' | 'injured' | 'waived'
}

interface Bid {
  id: string
  playerName: string
  amount: number
  status: 'pending' | 'accepted' | 'rejected'
}

export default async function ManagementPage() {
  // Get real data from database
  const players = await getPlayers()
  const bids = await getPlayerBids()

  const teamInfo = {
    name: 'Toronto Maple Leafs',
    record: '25-15-0',
    salaryCap: 82500000,
    currentSalary: 78000000,
    capSpace: 4500000,
  }

  // Convert database players to local format
  const roster: Player[] = players.slice(0, 5).map(player => ({
    id: player.id,
    name: player.user?.gamer_tag || player.user?.username || 'Unknown Player',
    position: player.user?.primary_position || 'Unknown',
    salary: player.salary,
    contractEnd: '2028', // This would come from contracts table
    status: player.status as 'active' | 'injured' | 'waived'
  }))

  const activeBids: Bid[] = bids.slice(0, 2).map(bid => ({
    id: bid.id,
    playerName: 'Player ' + bid.player_id?.substring(0, 8) || 'Unknown Player',
    amount: bid.bid_amount || 0,
    status: bid.status.toLowerCase() as 'pending' | 'accepted' | 'rejected'
  }))

  const currentLineup = {
    forwards: ['Auston Matthews', 'Mitch Marner', 'William Nylander', 'John Tavares', 'Max Domi', 'Tyler Bertuzzi', 'Calle Jarnkrok', 'David Kampf', 'Pontus Holmberg', 'Noah Gregor', 'Ryan Reaves', 'Bobby McMann'],
    defense: ['Morgan Rielly', 'T.J. Brodie', 'Jake McCabe', 'Simon Benoit', 'Mark Giordano', 'Conor Timmins'],
    goalies: ['Ilya Samsonov', 'Joseph Woll'],
  }

  const capSpacePercentage = (teamInfo.currentSalary / teamInfo.salaryCap) * 100;

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Team Management Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your team's roster, bids, and lineups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Team Overview */}
            <div className="lg:col-span-2 bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Team Overview: {teamInfo.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Team Record</h3>
                  <p className="text-3xl font-bold text-primary">{teamInfo.record}</p>
                  <p className="text-sm text-muted-foreground">Wins-Losses-OTL</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Salary Cap Status</h3>
                  <div className="flex items-center space-x-4">
                    <RingProgress
                      sections={[{ value: capSpacePercentage, color: 'blue' }]}
                      label={
                        <Text c="blue" fw={700} ta="center" size="xl">
                          {capSpacePercentage.toFixed(1)}%
                        </Text>
                      }
                      size={100}
                      thickness={8}
                    />
                    <div>
                      <p className="text-lg font-semibold">Used: ${teamInfo.currentSalary.toLocaleString()}</p>
                      <p className="text-lg font-semibold">Cap: ${teamInfo.salaryCap.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Space: ${teamInfo.capSpace.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Current Roster (Key Players)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-3 font-semibold">Player</th>
                        <th className="text-left p-3 font-semibold">Position</th>
                        <th className="text-right p-3 font-semibold">Salary</th>
                        <th className="text-center p-3 font-semibold">Contract End</th>
                        <th className="text-center p-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roster.map((player) => (
                        <tr key={player.id} className="border-t hover:bg-muted/30 transition-colors">
                          <td className="p-3 font-medium">{player.name}</td>
                          <td className="p-3 text-muted-foreground">{player.position}</td>
                          <td className="p-3 text-right">${player.salary.toLocaleString()}</td>
                          <td className="p-3 text-center">{player.contractEnd}</td>
                          <td className="p-3 text-center">
                            <Badge color={player.status === 'active' ? 'blue' : 'red'} variant="light">
                              {player.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link href="/management/roster" className="mt-4 block w-full text-center bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  View Full Roster
                </Link>
              </div>
            </div>

            {/* Right Column: Active Bids & Current Lineup */}
            <div className="space-y-8">
              {/* Active Bids */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Active Bids</h3>
                {activeBids.length > 0 ? (
                  <div className="space-y-3">
                    {activeBids.map((bid) => (
                      <div key={bid.id} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <div>
                          <div className="font-medium">{bid.playerName}</div>
                          <div className="text-sm text-muted-foreground">${bid.amount.toLocaleString()}</div>
                        </div>
                        <Badge color={bid.status === 'pending' ? 'yellow' : 'blue'} variant="light">
                          {bid.status}
                        </Badge>
                      </div>
                    ))}
                    <Link href="/management/bids" className="mt-4 block w-full text-center bg-secondary text-secondary-foreground py-2 rounded-lg hover:bg-secondary/90 transition-colors">
                      Manage Bids
                    </Link>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No active bids.</p>
                )}
              </div>

              {/* Current Lineup */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Current Lineup</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Forwards</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {currentLineup.forwards.slice(0, 6).map((player, index) => (
                        <li key={index}>{player}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Defense</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {currentLineup.defense.slice(0, 4).map((player, index) => (
                        <li key={index}>{player}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Goalies</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {currentLineup.goalies.map((player, index) => (
                        <li key={index}>{player}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href="/management/lineups" className="mt-4 block w-full text-center bg-secondary text-secondary-foreground py-2 rounded-lg hover:bg-secondary/90 transition-colors">
                  Set Lineups
                </Link>
              </div>
            </div>
          </div>

          {/* Management Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Team Management Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/management/roster" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Roster Management</h4>
                <p className="text-sm text-muted-foreground">View and manage your team's players</p>
              </Link>
              <Link href="/management/bids" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Player Bids</h4>
                <p className="text-sm text-muted-foreground">Manage active bids and free agents</p>
              </Link>
              <Link href="/management/lineups" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Set Lineups</h4>
                <p className="text-sm text-muted-foreground">Configure your team's forward lines, defense pairs, and goalies</p>
              </Link>
              <Link href="/management/transactions" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Transactions</h4>
                <p className="text-sm text-muted-foreground">Review trades, signings, and waiver moves</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}