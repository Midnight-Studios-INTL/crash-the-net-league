import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

interface Stream {
  id: number
  title: string
  streamer: string
  game: string
  viewers: number
  status: 'live' | 'scheduled' | 'ended'
  startTime: string
  duration?: string
}

export default function LivestreamPage() {
  const streams: Stream[] = [
    { 
      id: 1, 
      title: 'CTNL Championship Finals - Game 7', 
      streamer: 'CTNL_Official', 
      game: 'NHL 26', 
      viewers: 1247, 
      status: 'live', 
      startTime: '2024-01-15T19:00:00Z',
      duration: '2h 34m'
    },
    { 
      id: 2, 
      title: 'Boston Bruins vs Toronto Maple Leafs', 
      streamer: 'HockeyFan_99', 
      game: 'NHL 26', 
      viewers: 89, 
      status: 'live', 
      startTime: '2024-01-15T20:30:00Z',
      duration: '1h 12m'
    },
    { 
      id: 3, 
      title: 'ELO Rankings Update Show', 
      streamer: 'CTNL_Analyst', 
      game: 'NHL 26', 
      viewers: 0, 
      status: 'scheduled', 
      startTime: '2024-01-16T18:00:00Z'
    },
    { 
      id: 4, 
      title: 'Free Agency Frenzy Coverage', 
      streamer: 'CTNL_News', 
      game: 'NHL 26', 
      viewers: 0, 
      status: 'scheduled', 
      startTime: '2024-01-17T19:30:00Z'
    }
  ]

  const formatViewerCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  const formatDuration = (startTime: string, duration?: string) => {
    if (duration) return duration
    
    const start = new Date(startTime)
    const now = new Date()
    const diff = now.getTime() - start.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return `${hours}h ${minutes}m`
  }

  return (
    <>
      <Header />
      
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Livestreams</h1>
            <p className="text-muted-foreground">
              Watch live games, tournaments, and CTNL events
            </p>
          </div>

          {/* Featured Stream */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Stream</h2>
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">CTNL Championship Finals</h3>
                  <p className="text-sm opacity-90">Live now • 1,247 viewers</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">CTNL Championship Finals - Game 7</h3>
                <p className="text-muted-foreground mb-4">
                  The ultimate showdown! Watch as the top two teams battle for the championship title.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    LIVE
                  </span>
                  <span className="text-sm text-muted-foreground">CTNL_Official</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">2h 34m</span>
                </div>
              </div>
            </div>
          </div>

          {/* All Streams */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">All Streams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {streams.map((stream) => (
                <div key={stream.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-90">
                        {stream.status === 'live' ? `${formatViewerCount(stream.viewers)} viewers` : 'Scheduled'}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{stream.title}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        stream.status === 'live' ? 'bg-red-100 text-red-800' :
                        stream.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {stream.status === 'live' ? 'LIVE' : 
                         stream.status === 'scheduled' ? 'SCHEDULED' : 'ENDED'}
                      </span>
                      <span className="text-sm text-muted-foreground">{stream.streamer}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{stream.game}</span>
                      {stream.status === 'live' && stream.duration && (
                        <span>{stream.duration}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stream Guidelines */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Streaming Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">For Streamers</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Maintain respectful commentary</li>
                  <li>• Follow CTNL rules and regulations</li>
                  <li>• Use appropriate language and content</li>
                  <li>• Credit CTNL and Midnight Studios</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Viewers</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Respect streamers and other viewers</li>
                  <li>• No spam or inappropriate messages</li>
                  <li>• Follow chat rules and moderation</li>
                  <li>• Report any violations to moderators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
