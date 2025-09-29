export function HeroCarousel() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Crash the Net League
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional Hockey League Management
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Standings
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Latest News
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


