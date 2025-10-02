export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Home</a></li>
              <li><a href="/standings" className="text-muted-foreground hover:text-foreground">Standings</a></li>
              <li><a href="/statistics" className="text-muted-foreground hover:text-foreground">Statistics</a></li>
              <li><a href="/teams" className="text-muted-foreground hover:text-foreground">Teams</a></li>
              <li><a href="/matches" className="text-muted-foreground hover:text-foreground">Matches</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/rules" className="text-muted-foreground hover:text-foreground">Rules</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="text-muted-foreground hover:text-foreground">Disclaimer</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">User Panel</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/login" className="text-muted-foreground hover:text-foreground">Login</a></li>
              <li><a href="/register" className="text-muted-foreground hover:text-foreground">Register</a></li>
              <li><a href="/profile" className="text-muted-foreground hover:text-foreground">Profile</a></li>
              <li><a href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Actions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/management" className="text-muted-foreground hover:text-foreground">Management</a></li>
              <li><a href="/admin" className="text-muted-foreground hover:text-foreground">Admin Panel</a></li>
              <li><a href="/news" className="text-muted-foreground hover:text-foreground">News</a></li>
              <li><a href="/forum" className="text-muted-foreground hover:text-foreground">Forum</a></li>
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


