import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: 'Crash the Net League Announces New Season Format',
      excerpt: 'The league has announced exciting changes for the upcoming season, including new playoff format and updated rules.',
      author: 'League Commissioner',
      date: '2024-01-15',
      image: '/api/placeholder/400/200',
      featured: true,
      category: 'Announcements'
    },
    {
      id: 2,
      title: 'Trade Deadline Approaches: Key Players Available',
      excerpt: 'With the trade deadline just days away, several star players have become available for trade.',
      author: 'Sports Reporter',
      date: '2024-01-14',
      image: '/api/placeholder/400/200',
      featured: false,
      category: 'Trades'
    },
    {
      id: 3,
      title: 'Weekend Recap: Bruins Extend Winning Streak',
      excerpt: 'The Boston Bruins continue their impressive run with another victory, extending their winning streak to 8 games.',
      author: 'Game Reporter',
      date: '2024-01-13',
      image: '/api/placeholder/400/200',
      featured: false,
      category: 'Games'
    },
    {
      id: 4,
      title: 'Free Agency Opens: Top Players Hit the Market',
      excerpt: 'Several high-profile players have entered free agency, creating opportunities for teams to strengthen their rosters.',
      author: 'Free Agency Reporter',
      date: '2024-01-12',
      image: '/api/placeholder/400/200',
      featured: false,
      category: 'Free Agency'
    },
    {
      id: 5,
      title: 'Injury Report: Key Players Sidelined',
      excerpt: 'Several star players have been placed on injured reserve, affecting team strategies for upcoming games.',
      author: 'Medical Reporter',
      date: '2024-01-11',
      image: '/api/placeholder/400/200',
      featured: false,
      category: 'Injuries'
    },
    {
      id: 6,
      title: 'League Standings Update: Tight Race Continues',
      excerpt: 'The race for playoff positions remains tight as teams battle for positioning in the final stretch.',
      author: 'Standings Reporter',
      date: '2024-01-10',
      image: '/api/placeholder/400/200',
      featured: false,
      category: 'Standings'
    }
  ]

  const categories = ['All', 'Announcements', 'Trades', 'Games', 'Free Agency', 'Injuries', 'Standings']

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">News</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest news from the Crash the Net League
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Story</h2>
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                      {article.category}
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 hover:text-primary cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      By {article.author} • {article.date}
                    </div>
                    <button className="text-primary hover:underline font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* News Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <div key={article.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      By {article.author} • {article.date}
                    </div>
                    <button className="text-primary hover:underline text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter to get the latest news delivered to your inbox
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
