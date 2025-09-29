export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Crash the Net League</h3>
            <p className="text-sm text-muted-foreground">
              Professional Hockey League Management System
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">League</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/teams" className="text-muted-foreground hover:text-foreground">Teams</a></li>
              <li><a href="/players" className="text-muted-foreground hover:text-foreground">Players</a></li>
              <li><a href="/standings" className="text-muted-foreground hover:text-foreground">Standings</a></li>
              <li><a href="/statistics" className="text-muted-foreground hover:text-foreground">Statistics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/forum" className="text-muted-foreground hover:text-foreground">Forum</a></li>
              <li><a href="/news" className="text-muted-foreground hover:text-foreground">News</a></li>
              <li><a href="/livestream" className="text-muted-foreground hover:text-foreground">Livestream</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="/rules" className="text-muted-foreground hover:text-foreground">Rules</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Crash the Net League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


