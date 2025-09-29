export function UpcomingGames() {
  const games = [
    {
      homeTeam: 'Toronto Maple Leafs',
      awayTeam: 'Montreal Canadiens',
      date: '2024-01-15',
      time: '7:00 PM',
      venue: 'Scotiabank Arena'
    },
    {
      homeTeam: 'Boston Bruins',
      awayTeam: 'New York Rangers',
      date: '2024-01-16',
      time: '8:00 PM',
      venue: 'TD Garden'
    },
    {
      homeTeam: 'Chicago Blackhawks',
      awayTeam: 'Detroit Red Wings',
      date: '2024-01-17',
      time: '7:30 PM',
      venue: 'United Center'
    }
  ]

  return (
    <div className="space-y-4">
      {games.map((game, index) => (
        <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="font-semibold">{game.awayTeam}</div>
                <div className="text-sm text-muted-foreground">@</div>
                <div className="font-semibold">{game.homeTeam}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{game.date}</div>
              <div className="text-sm text-muted-foreground">{game.time}</div>
              <div className="text-sm text-muted-foreground">{game.venue}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


