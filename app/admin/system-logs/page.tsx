import { Footer } from '@/components/footer'

interface SystemLog {
  id: number
  timestamp: string
  level: 'info' | 'warning' | 'error' | 'debug'
  source: string
  message: string
  details?: string
}

interface ErrorReport {
  id: number
  timestamp: string
  error: string
  user?: string
  url: string
  stack?: string
  resolved: boolean
}

export default function SystemLogsPage() {
  const logs: SystemLog[] = [
    { id: 1, timestamp: '2024-01-15 14:30:25', level: 'info', source: 'Database', message: 'Database connection established', details: 'Connected to PostgreSQL on port 5432' },
    { id: 2, timestamp: '2024-01-15 14:28:12', level: 'warning', source: 'API', message: 'Rate limit exceeded for user', details: 'User player123 exceeded 100 requests per minute' },
    { id: 3, timestamp: '2024-01-15 14:25:45', level: 'error', source: 'Payment', message: 'Payment processing failed', details: 'Stripe API returned error: card_declined' },
    { id: 4, timestamp: '2024-01-15 14:22:18', level: 'info', source: 'Auth', message: 'User login successful', details: 'User hockeyfan99 logged in from IP 192.168.1.100' },
    { id: 5, timestamp: '2024-01-15 14:20:33', level: 'debug', source: 'Cache', message: 'Cache miss for user profile', details: 'Profile data not found in Redis cache' },
    { id: 6, timestamp: '2024-01-15 14:18:07', level: 'error', source: 'Database', message: 'Query timeout', details: 'Slow query detected: SELECT * FROM matches WHERE date > NOW()' },
    { id: 7, timestamp: '2024-01-15 14:15:42', level: 'info', source: 'Email', message: 'Email sent successfully', details: 'Welcome email sent to new user player456' },
    { id: 8, timestamp: '2024-01-15 14:12:29', level: 'warning', source: 'Security', message: 'Suspicious login attempt', details: 'Multiple failed login attempts from IP 203.0.113.42' }
  ]

  const errors: ErrorReport[] = [
    { id: 1, timestamp: '2024-01-15 14:30:25', error: 'TypeError: Cannot read property of undefined', user: 'player123', url: '/teams/123', resolved: false },
    { id: 2, timestamp: '2024-01-15 14:28:12', error: 'NetworkError: Failed to fetch', user: 'hockeyfan99', url: '/api/matches', resolved: true },
    { id: 3, timestamp: '2024-01-15 14:25:45', error: 'ReferenceError: variable is not defined', user: undefined, url: '/admin/settings', resolved: false },
    { id: 4, timestamp: '2024-01-15 14:22:18', error: 'SyntaxError: Unexpected token', user: 'moderator1', url: '/forum/post/456', resolved: true }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'bg-red-100 text-red-800'
      case 'warning': return 'bg-blue-100 text-blue-800'
      case 'info': return 'bg-blue-100 text-blue-800'
      case 'debug': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">System Logs</h1>
            <p className="text-muted-foreground">
              Monitor system logs, errors, and performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* System Logs */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">System Logs</h3>
                <p className="text-sm text-muted-foreground">Real-time system activity logs</p>
              </div>
              
              <div className="overflow-x-auto max-h-96">
                <table className="w-full">
                  <thead className="bg-muted/50 sticky top-0">
                    <tr>
                      <th className="text-left p-3 font-semibold">Time</th>
                      <th className="text-center p-3 font-semibold">Level</th>
                      <th className="text-left p-3 font-semibold">Source</th>
                      <th className="text-left p-3 font-semibold">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map((log) => (
                      <tr key={log.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 text-sm text-muted-foreground">{log.timestamp}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(log.level)}`}>
                            {log.level}
                          </span>
                        </td>
                        <td className="p-3 font-medium">{log.source}</td>
                        <td className="p-3 text-sm">{log.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Error Reports */}
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-xl font-semibold">Error Reports</h3>
                <p className="text-sm text-muted-foreground">JavaScript errors and exceptions</p>
              </div>
              
              <div className="overflow-x-auto max-h-96">
                <table className="w-full">
                  <thead className="bg-muted/50 sticky top-0">
                    <tr>
                      <th className="text-left p-3 font-semibold">Time</th>
                      <th className="text-left p-3 font-semibold">Error</th>
                      <th className="text-center p-3 font-semibold">User</th>
                      <th className="text-center p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {errors.map((error) => (
                      <tr key={error.id} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="p-3 text-sm text-muted-foreground">{error.timestamp}</td>
                        <td className="p-3 text-sm font-mono">{error.error}</td>
                        <td className="p-3 text-center text-sm text-muted-foreground">{error.user || 'N/A'}</td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            error.resolved ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {error.resolved ? 'Resolved' : 'Open'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">System Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">45ms</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">4</div>
                <div className="text-sm text-muted-foreground">Open Errors</div>
              </div>
            </div>
          </div>

          {/* Log Management */}
          <div className="mt-8 bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Log Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Download Logs</h4>
                <p className="text-sm text-muted-foreground">Export logs for analysis</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Clear Old Logs</h4>
                <p className="text-sm text-muted-foreground">Remove logs older than 30 days</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-muted/30 transition-colors text-left">
                <h4 className="font-semibold mb-2">Set Log Level</h4>
                <p className="text-sm text-muted-foreground">Configure logging verbosity</p>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
