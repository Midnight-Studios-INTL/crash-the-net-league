import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

interface LineupPlayer {
  id: number
  name: string
  position: string
  overall: number
  line: number
  isStarter: boolean
}

interface Lineup {
  id: string
  name: string
  isActive: boolean
  players: LineupPlayer[]
}

export default function SetLineupsPage() {
  const currentLineup: Lineup = {
    id: 'current',
    name: 'Current Lineup',
    isActive: true,
    players: [
      // Forwards
      { id: 1, name: 'William Nylander', position: 'LW', overall: 88, line: 1, isStarter: true },
      { id: 2, name: 'Auston Matthews', position: 'C', overall: 94, line: 1, isStarter: true },
      { id: 3, name: 'Mitch Marner', position: 'RW', overall: 91, line: 1, isStarter: true },
      { id: 4, name: 'John Tavares', position: 'LW', overall: 87, line: 2, isStarter: true },
      { id: 5, name: 'Nazem Kadri', position: 'C', overall: 85, line: 2, isStarter: true },
      { id: 6, name: 'Zach Hyman', position: 'RW', overall: 83, line: 2, isStarter: true },
      { id: 7, name: 'Michael Bunting', position: 'LW', overall: 81, line: 3, isStarter: true },
      { id: 8, name: 'David Kampf', position: 'C', overall: 79, line: 3, isStarter: true },
      { id: 9, name: 'Pierre Engvall', position: 'RW', overall: 78, line: 3, isStarter: true },
      { id: 10, name: 'Wayne Simmonds', position: 'LW', overall: 76, line: 4, isStarter: true },
      { id: 11, name: 'Jason Spezza', position: 'C', overall: 75, line: 4, isStarter: true },
      { id: 12, name: 'Nick Ritchie', position: 'RW', overall: 77, line: 4, isStarter: true },
      
      // Defense
      { id: 13, name: 'Morgan Rielly', position: 'LD', overall: 89, line: 1, isStarter: true },
      { id: 14, name: 'T.J. Brodie', position: 'RD', overall: 83, line: 1, isStarter: true },
      { id: 15, name: 'Jake Muzzin', position: 'LD', overall: 82, line: 2, isStarter: true },
      { id: 16, name: 'Justin Holl', position: 'RD', overall: 80, line: 2, isStarter: true },
      { id: 17, name: 'Jake McCabe', position: 'LD', overall: 81, line: 3, isStarter: true },
      { id: 18, name: 'Mark Giordano', position: 'RD', overall: 79, line: 3, isStarter: true },
      
      // Goalies
      { id: 19, name: 'Frederik Andersen', position: 'G', overall: 85, line: 1, isStarter: true },
      { id: 20, name: 'Jack Campbell', position: 'G', overall: 82, line: 2, isStarter: false },
    ]
  }

  const lineupTemplates: Lineup[] = [
    {
      id: 'template1',
      name: 'Offensive Lineup',
      isActive: false,
      players: currentLineup.players.map(p => ({ ...p, line: p.position === 'C' ? 1 : p.line }))
    },
    {
      id: 'template2',
      name: 'Defensive Lineup',
      isActive: false,
      players: currentLineup.players.map(p => ({ ...p, line: p.position === 'LD' || p.position === 'RD' ? 1 : p.line }))
    }
  ]

  const forwards = currentLineup.players.filter(p => ['LW', 'C', 'RW'].includes(p.position))
  const defense = currentLineup.players.filter(p => ['LD', 'RD'].includes(p.position))
  const goalies = currentLineup.players.filter(p => p.position === 'G')

  const getLinePlayers = (line: number) => {
    return forwards.filter(p => p.line === line)
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Set Lineups</h1>
            <p className="text-muted-foreground">
              Configure your team's starting lineup and line combinations
            </p>
          </div>

          {/* Lineup Controls */}
          <div className="mb-8 bg-card border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Lineup Management</h2>
              <div className="space-x-2">
                <Button variant="outline" size="sm">Save Lineup</Button>
                <Button variant="outline" size="sm">Load Template</Button>
                <Button size="sm">Set as Active</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Total Players</div>
                <div className="text-2xl font-bold">{currentLineup.players.length}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Average Overall</div>
                <div className="text-2xl font-bold text-primary">
                  {Math.round(currentLineup.players.reduce((sum, p) => sum + p.overall, 0) / currentLineup.players.length)}
                </div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">Lineup Status</div>
                <div className="text-2xl font-bold text-blue-600">Active</div>
              </div>
            </div>
          </div>

          {/* Forward Lines */}
          <div className="mb-8 bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Forward Lines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(line => (
                <div key={line} className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-center">Line {line}</h3>
                  <div className="space-y-2">
                    {getLinePlayers(line).map(player => (
                      <div key={player.id} className="flex items-center justify-between p-2 bg-background rounded border">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {player.name.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">{player.name}</div>
                            <div className="text-xs text-muted-foreground">{player.position}</div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-primary">{player.overall}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Defense Pairs */}
          <div className="mb-8 bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Defense Pairs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(pair => (
                <div key={pair} className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-center">Pair {pair}</h3>
                  <div className="space-y-2">
                    {defense.filter(p => p.line === pair).map(player => (
                      <div key={player.id} className="flex items-center justify-between p-2 bg-background rounded border">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {player.name.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">{player.name}</div>
                            <div className="text-xs text-muted-foreground">{player.position}</div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-primary">{player.overall}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goalies */}
          <div className="mb-8 bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Goaltenders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goalies.map((goalie, index) => (
                <div key={goalie.id} className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-center">
                    {index === 0 ? 'Starter' : 'Backup'}
                  </h3>
                  <div className="flex items-center justify-between p-3 bg-background rounded border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {goalie.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{goalie.name}</div>
                        <div className="text-sm text-muted-foreground">{goalie.position}</div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-primary">{goalie.overall}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lineup Templates */}
          <div className="mb-8 bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Lineup Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lineupTemplates.map(template => (
                <div key={template.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pre-configured lineup for specific strategies
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Load</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
              <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">Create New Template</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Save current lineup as a template
                </p>
                <Button variant="outline" size="sm">Create</Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Auto-Lineup</span>
                <span className="text-xs text-muted-foreground">Generate optimal lineup</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Swap Players</span>
                <span className="text-xs text-muted-foreground">Move players between lines</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Reset Lineup</span>
                <span className="text-xs text-muted-foreground">Restore default lineup</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <span className="font-semibold">Export Lineup</span>
                <span className="text-xs text-muted-foreground">Share lineup configuration</span>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
