import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Crash the Net League</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  The Crash the Net League (CTNL) is dedicated to providing the most comprehensive and engaging hockey league management experience. We combine cutting-edge technology with the passion for hockey to create an immersive environment where players, teams, and fans can connect and compete at the highest level.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">League History</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2024, CTNL has quickly established itself as a premier destination for hockey enthusiasts. Our league brings together the best players from around the world, creating competitive matchups and unforgettable moments that define the sport.
                </p>
                <p className="text-muted-foreground mb-4">
                  With state-of-the-art facilities, advanced analytics, and a commitment to fair play, CTNL has become the gold standard for professional hockey league management.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                    <p className="text-muted-foreground">
                      Our comprehensive statistics system tracks every aspect of the game, providing insights that help teams make informed decisions.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Fair Competition</h3>
                    <p className="text-muted-foreground">
                      We maintain strict salary cap regulations and fair play policies to ensure competitive balance across all teams.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
                    <p className="text-muted-foreground">
                      Our forum system and social features create a vibrant community where fans and players can connect and share their passion.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Professional Management</h3>
                    <p className="text-muted-foreground">
                      Our administrative team ensures smooth operations, fair play, and continuous improvement of the league experience.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">League Structure</h2>
                <div className="bg-card border rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Eastern Conference</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Boston Bruins</li>
                        <li>• Toronto Maple Leafs</li>
                        <li>• New York Rangers</li>
                        <li>• Montreal Canadiens</li>
                        <li>• Tampa Bay Lightning</li>
                        <li>• Florida Panthers</li>
                        <li>• Buffalo Sabres</li>
                        <li>• Ottawa Senators</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Western Conference</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Los Angeles Kings</li>
                        <li>• Vancouver Canucks</li>
                        <li>• Chicago Blackhawks</li>
                        <li>• Detroit Red Wings</li>
                        <li>• Edmonton Oilers</li>
                        <li>• Calgary Flames</li>
                        <li>• Colorado Avalanche</li>
                        <li>• San Jose Sharks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="bg-card border rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">League Office</h3>
                      <p className="text-muted-foreground">
                        Crash the Net League Headquarters<br />
                        123 Hockey Street<br />
                        Toronto, ON M5V 3A8<br />
                        Canada
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
                      <p className="text-muted-foreground">
                        Email: info@crashnetleague.com<br />
                        Phone: (416) 555-0123<br />
                        Hours: Monday-Friday, 9AM-5PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
