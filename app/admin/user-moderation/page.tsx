import { Footer } from '@/components/footer'

interface User {
  id: number
  username: string
  email: string
  role: 'admin' | 'moderator' | 'user'
  status: 'active' | 'banned' | 'suspended'
  lastActive: string
  joinDate: string
  violations: number
}

interface ModerationAction {
  id: number
  username: string
  action: 'ban' | 'suspend' | 'warn' | 'unban'
  reason: string
  moderator: string
  date: string
  duration?: string
}

export default function UserModerationPage() {
  const users: User[] = [
    { id: 1, username: 'player123', email: 'player@example.com', role: 'user', status: 'active', lastActive: '2 hours ago', joinDate: '2024-01-01', violations: 0 },
    { id: 2, username: 'hockeyfan99', email: 'fan@example.com', role: 'user', status: 'active', lastActive: '1 day ago', joinDate: '2024-01-05', violations: 1 },
    { id: 3, username: 'troublemaker', email: 'trouble@example.com', role: 'user', status: 'suspended', lastActive: '3 days ago', joinDate: '2024-01-10', violations: 3 },
    { id: 4, username: 'banneduser', email: 'banned@example.com', role: 'user', status: 'banned', lastActive: '1 week ago', joinDate: '2023-12-15', violations: 5 },
    { id: 5, username: 'moderator1', email: 'mod@example.com', role: 'moderator', status: 'active', lastActive: 'Online', joinDate: '2023-11-20', violations: 0 }
  ]

  const recentActions: ModerationAction[] = [
    { id: 1, username: 'troublemaker', action: 'suspend', reason: 'Inappropriate language in forum', moderator: 'admin_user', date: '2024-01-15', duration: '7 days' },
    { id: 2, username: 'banneduser', action: 'ban', reason: 'Multiple violations and harassment', moderator: 'admin_user', date: '2024-01-10' },
    { id: 3, username: 'hockeyfan99', action: 'warn', reason: 'Spam in chat', moderator: 'moderator1', date: '2024-01-08' },
    { id: 4, username: 'player123', action: 'unban', reason: 'Appeal approved', moderator: 'admin_user', date: '2024-01-05' }
  ]

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">User Moderation</h1>
            <p className="text-muted-foreground">
              Manage user accounts, bans, suspensions, and violations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Management */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">User Management</h3>
                <p className="text-sm text-muted-foreground">View and manage all user accounts</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">User</th>
                      <th className="text-center p-3 font-semibold">Role</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                      <th className="text-center p-3 font-semibold">Violations</th>
                      <th className="text-center p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3">
                          <div>
                            <div className="font-medium">{user.username}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.role === 'admin' ? 'bg-red-100 text-red-800' :
                            user.role === 'moderator' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'active' ? 'bg-blue-100 text-blue-800' :
                            user.status === 'banned' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`font-semibold ${user.violations > 2 ? 'text-red-600' : user.violations > 0 ? 'text-blue-600' : 'text-gray-600'}`}>
                            {user.violations}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <div className="flex space-x-1">
                            <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                              View
                            </button>
                            <button className="text-red-600 hover:text-red-800 text-xs font-medium">
                              Ban
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Actions */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Recent Moderation Actions</h3>
                <p className="text-sm text-muted-foreground">Latest bans, suspensions, and warnings</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">User</th>
                      <th className="text-center p-3 font-semibold">Action</th>
                      <th className="text-left p-3 font-semibold">Reason</th>
                      <th className="text-center p-3 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActions.map((action) => (
                      <tr key={action.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 font-medium">{action.username}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            action.action === 'ban' ? 'bg-red-100 text-red-800' :
                            action.action === 'suspend' ? 'bg-blue-100 text-blue-800' :
                            action.action === 'warn' ? 'bg-blue-100 text-blue-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {action.action}
                          </span>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">{action.reason}</td>
                        <td className="p-3 text-center text-sm text-muted-foreground">{action.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Moderation Tools */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Moderation Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Ban User</h4>
                <p className="text-sm text-muted-foreground">Permanently ban a user account</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Suspend User</h4>
                <p className="text-sm text-muted-foreground">Temporarily suspend a user</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Send Warning</h4>
                <p className="text-sm text-muted-foreground">Issue a warning to a user</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">View Reports</h4>
                <p className="text-sm text-muted-foreground">Review user reports and flags</p>
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Moderation Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-muted-foreground">Total Users</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1,198</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-muted-foreground">Suspended</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">37</div>
                <div className="text-sm text-muted-foreground">Banned</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
