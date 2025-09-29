import { Footer } from '@/components/footer'
import { getNews } from '@/lib/database'
import type { NewsWithAuthor } from '@/lib/types'

export default async function NewsPage() {
  const newsArticles = await getNews()

  const categories = ['All', 'Announcements', 'Trades', 'Games', 'Free Agency', 'Injuries', 'Standings']

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
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
            {newsArticles.filter(article => article.featured).length > 0 ? (
              newsArticles.filter(article => article.featured).map((article) => (
                <div key={article.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        {article.image_url ? (
                          <img 
                            src={article.image_url} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-white text-center">
                            <div className="text-4xl font-bold mb-2">🏒</div>
                            <div className="text-sm opacity-80">Crash the Net League</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {article.category || 'News'}
                        </span>
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 hover:text-primary cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{article.excerpt || article.content.substring(0, 200) + '...'}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          By {article.author?.gamer_tag || article.author?.username || 'League Staff'} • {formatDate(article.created_at)}
                        </div>
                        <button className="text-primary hover:underline font-medium">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-card border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No Featured Articles</h3>
                <p className="text-muted-foreground">
                  Check back later for featured news stories.
                </p>
              </div>
            )}
          </div>

          {/* News Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
            {newsArticles.filter(article => !article.featured).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.filter(article => !article.featured).map((article) => (
                  <div key={article.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      {article.image_url ? (
                        <img 
                          src={article.image_url} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-white text-center">
                          <div className="text-4xl font-bold mb-2">🏒</div>
                          <div className="text-sm opacity-80">Crash the Net League</div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {article.category || 'News'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt || article.content.substring(0, 150) + '...'}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          By {article.author?.gamer_tag || article.author?.username || 'League Staff'} • {formatDate(article.created_at)}
                        </div>
                        <button className="text-primary hover:underline text-sm font-medium">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-card border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No News Available</h3>
                <p className="text-muted-foreground">
                  Check back later for the latest league news.
                </p>
              </div>
            )}
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
        </div>
      </main>

      <Footer />
    </>
  )
}