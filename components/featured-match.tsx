export function FeaturedMatch() {
  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Featured Match</h3>
        <span className="text-sm text-muted-foreground">Live</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-2xl font-bold">Toronto Maple Leafs</div>
          <div className="text-4xl font-bold text-primary">3</div>
        </div>
        <div className="text-center mx-8">
          <div className="text-sm text-muted-foreground">Period 2</div>
          <div className="text-sm text-muted-foreground">12:34</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">Montreal Canadiens</div>
          <div className="text-4xl font-bold text-primary">2</div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Watch Live
        </button>
      </div>
    </div>
  )
}


