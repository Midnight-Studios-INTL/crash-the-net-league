import { Footer } from '@/components/footer'
import { HeroCarousel } from '@/components/hero-carousel'
import { UpcomingGames } from '@/components/upcoming-games'
import { FeaturedMatch } from '@/components/featured-match'
import { NewsCard } from '@/components/news-card'
import { getFeaturedMatch, getUpcomingMatches, getFeaturedNews } from '@/lib/database'

export default async function HomePage() {
  const [featuredMatch, upcomingMatches, featuredNews] = await Promise.all([
    getFeaturedMatch(),
    getUpcomingMatches(),
    getFeaturedNews()
  ])

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          {/* Hero Carousel */}
          <section className="mb-12">
            <HeroCarousel />
          </section>

          {/* Featured Match */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Match</h2>
            {featuredMatch ? (
              <FeaturedMatch match={featuredMatch} />
            ) : (
              <div className="bg-card border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No Featured Match</h3>
                <p className="text-muted-foreground">
                  Check back later for upcoming featured matches.
                </p>
              </div>
            )}
          </section>

          {/* Upcoming Games */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Upcoming Games</h2>
            {upcomingMatches.length > 0 ? (
              <UpcomingGames matches={upcomingMatches} />
            ) : (
              <div className="bg-card border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No Upcoming Games</h3>
                <p className="text-muted-foreground">
                  No games are currently scheduled.
                </p>
              </div>
            )}
          </section>

          {/* Latest News */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            {featuredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredNews.map((article) => (
                  <NewsCard key={article.id} article={article} />
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
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}


