import { Footer } from '@/components/footer'
import Link from 'next/link'

interface AdminUser {
  id: number
  username: string
  role: 'admin' | 'moderator' | 'user'
  lastActive: string
  status: 'active' | 'banned' | 'suspended'
}

interface SystemMetric {
  name: string
  value: string
  status: 'good' | 'warning' | 'error'
}

export default function AdminPage() {
  const users: AdminUser[] = [
    { id: 1, username: 'admin_user', role: 'admin', lastActive: 'Online', status: 'active' },
    { id: 2, username: 'moderator_1', role: 'moderator', lastActive: '2 hours ago', status: 'active' },
    { id: 3, username: 'player_123', role: 'user', lastActive: '1 day ago', status: 'active' },
    { id: 4, username: 'banned_user', role: 'user', lastActive: '1 week ago', status: 'banned' },
    { id: 5, username: 'suspended_user', role: 'user', lastActive: '3 days ago', status: 'suspended' }
  ]

  const systemMetrics: SystemMetric[] = [
    { name: 'Server Status', value: 'Online', status: 'good' },
    { name: 'Database', value: 'Connected', status: 'good' },
    { name: 'API Response', value: '45ms', status: 'good' },
    { name: 'Active Users', value: '1,247', status: 'good' },
    { name: 'Disk Usage', value: '78%', status: 'warning' },
    { name: 'Memory Usage', value: '65%', status: 'good' }
  ]

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
            <p className="text-muted-foreground">
              System administration and user management
            </p>
          </div>

          {/* System Metrics */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">System Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {systemMetrics.map((metric) => (
                <div key={metric.name} className="bg-card border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">{metric.name}</h3>
                    <div className={`w-2 h-2 rounded-full ${
                      metric.status === 'good' ? 'bg-green-500' :
                      metric.status === 'warning' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                  </div>
                  <p className="text-lg font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Management */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">User Management</h3>
                <p className="text-sm text-muted-foreground">Manage user accounts and permissions</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Username</th>
                      <th className="text-center p-3 font-semibold">Role</th>
                      <th className="text-center p-3 font-semibold">Last Active</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 font-medium">{user.username}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.role === 'admin' ? 'bg-red-100 text-red-800' :
                            user.role === 'moderator' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="p-3 text-center text-muted-foreground">{user.lastActive}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' :
                            user.status === 'banned' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Admin Tools */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Admin Tools</h3>
              <div className="space-y-4">
                <Link href="/admin/league-settings" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">League Settings</h4>
                  <p className="text-sm text-muted-foreground">Configure league rules, seasons, and tournaments</p>
                </Link>
                <Link href="/admin/user-moderation" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">User Moderation</h4>
                  <p className="text-sm text-muted-foreground">Ban, suspend, or manage user accounts</p>
                </Link>
                <Link href="/admin/system-logs" className="block p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">System Logs</h4>
                  <p className="text-sm text-muted-foreground">View system logs and error reports</p>
                </Link>
                <div className="p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">Database Management</h4>
                  <p className="text-sm text-muted-foreground">Manage database backups and maintenance</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">Content Moderation</h4>
                  <p className="text-sm text-muted-foreground">Moderate forum posts and user content</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">Analytics</h4>
                  <p className="text-sm text-muted-foreground">View detailed analytics and reports</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Send Announcement</h4>
                <p className="text-sm text-muted-foreground">Send message to all users</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Backup Database</h4>
                <p className="text-sm text-muted-foreground">Create system backup</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Clear Cache</h4>
                <p className="text-sm text-muted-foreground">Clear system cache</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Restart Services</h4>
                <p className="text-sm text-muted-foreground">Restart system services</p>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
