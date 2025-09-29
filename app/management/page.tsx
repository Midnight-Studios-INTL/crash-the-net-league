import { Footer } from '@/components/footer'
import Link from 'next/link'

interface Team {
  id: number
  name: string
  owner: string
  record: string
  points: number
  lastActive: string
  status: 'active' | 'inactive' | 'pending'
}

interface Transaction {
  id: number
  type: 'trade' | 'signing' | 'release'
  player: string
  fromTeam: string
  toTeam: string
  date: string
  status: 'pending' | 'approved' | 'rejected'
}

export default function ManagementPage() {
  const teams: Team[] = [
    { id: 1, name: 'Boston Bruins', owner: 'John Smith', record: '28-12-0', points: 56, lastActive: '2 hours ago', status: 'active' },
    { id: 2, name: 'Toronto Maple Leafs', owner: 'Mike Johnson', record: '25-15-0', points: 50, lastActive: '1 day ago', status: 'active' },
    { id: 3, name: 'New York Rangers', owner: 'Sarah Wilson', record: '24-16-0', points: 48, lastActive: '3 hours ago', status: 'active' },
    { id: 4, name: 'Montreal Canadiens', owner: 'David Brown', record: '22-18-0', points: 44, lastActive: '2 days ago', status: 'inactive' },
    { id: 5, name: 'Tampa Bay Lightning', owner: 'Lisa Davis', record: '20-20-0', points: 40, lastActive: '1 hour ago', status: 'active' },
    { id: 6, name: 'Florida Panthers', owner: 'Chris Miller', record: '18-22-0', points: 36, lastActive: '4 days ago', status: 'pending' }
  ]

  const transactions: Transaction[] = [
    { id: 1, type: 'trade', player: 'Connor McDavid', fromTeam: 'Edmonton Oilers', toTeam: 'Boston Bruins', date: '2024-01-15', status: 'pending' },
    { id: 2, type: 'signing', player: 'Nathan MacKinnon', fromTeam: 'Free Agency', toTeam: 'Toronto Maple Leafs', date: '2024-01-14', status: 'approved' },
    { id: 3, type: 'release', player: 'Leon Draisaitl', fromTeam: 'Montreal Canadiens', toTeam: 'Free Agency', date: '2024-01-13', status: 'approved' },
    { id: 4, type: 'trade', player: 'Auston Matthews', fromTeam: 'Toronto Maple Leafs', toTeam: 'New York Rangers', date: '2024-01-12', status: 'rejected' }
  ]

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Management Dashboard</h1>
            <p className="text-muted-foreground">
              Manage teams, transactions, and league operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team Management */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Team Management</h3>
                <p className="text-sm text-muted-foreground">Monitor team activity and performance</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Team</th>
                      <th className="text-left p-3 font-semibold">Owner</th>
                      <th className="text-center p-3 font-semibold">Record</th>
                      <th className="text-center p-3 font-semibold">Points</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team) => (
                      <tr key={team.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 font-medium">{team.name}</td>
                        <td className="p-3 text-muted-foreground">{team.owner}</td>
                        <td className="p-3 text-center">{team.record}</td>
                        <td className="p-3 text-center font-semibold text-primary">{team.points}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            team.status === 'active' ? 'bg-blue-100 text-blue-800' :
                            team.status === 'inactive' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {team.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Recent Transactions</h3>
                <p className="text-sm text-muted-foreground">Monitor trades, signings, and releases</p>
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
                            'bg-red-100 text-red-800'
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
          </div>

          {/* Management Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Management Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/management/team-settings" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Team Settings</h4>
                <p className="text-sm text-muted-foreground">Configure team rosters, lineups, and strategies</p>
              </Link>
              <Link href="/management/transaction-center" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">Transaction Center</h4>
                <p className="text-sm text-muted-foreground">Process trades, signings, and roster moves</p>
              </Link>
              <Link href="/management/league-settings" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                <h4 className="font-semibold mb-2">League Settings</h4>
                <p className="text-sm text-muted-foreground">Manage league rules, schedules, and configurations</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
