import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'
import { HeroCarousel } from '@/components/hero-carousel'
import { UpcomingGames } from '@/components/upcoming-games'
import { FeaturedMatch } from '@/components/featured-match'
import { NewsCard } from '@/components/news-card'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        <div className="container mx-auto px-4 py-8">
          {/* Hero Carousel */}
          <section className="mb-12">
            <HeroCarousel />
          </section>

          {/* Featured Match */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Match</h2>
            <FeaturedMatch />
          </section>

          {/* Upcoming Games */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Upcoming Games</h2>
            <UpcomingGames />
          </section>

          {/* Latest News */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}


