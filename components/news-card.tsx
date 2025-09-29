export function NewsCard() {
  return (
    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
      <div className="p-6">
        <div className="text-sm text-muted-foreground mb-2">January 15, 2024</div>
        <h3 className="text-lg font-semibold mb-2">League Update: New Season Begins</h3>
        <p className="text-sm text-muted-foreground mb-4">
          The Crash the Net League is excited to announce the start of our new season with updated rules and exciting matchups.
        </p>
        <button className="text-primary hover:underline text-sm font-medium">
          Read More →
        </button>
      </div>
    </div>
  )
}


