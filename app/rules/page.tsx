import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function RulesPage() {
  const ruleSections = [
    {
      title: "League Structure",
      rules: [
        "The league consists of 16 teams divided into Eastern and Western Conferences",
        "Each conference has 8 teams",
        "Regular season consists of 82 games per team",
        "Playoffs include 8 teams per conference (16 total)",
        "Playoff format: Best of 7 series"
      ]
    },
    {
      title: "Player Registration",
      rules: [
        "All players must register for each season",
        "Players must provide accurate gamer tag and console information",
        "Primary and secondary positions must be specified",
        "Registration deadline is announced before each season",
        "Players must be 18 years or older to participate"
      ]
    },
    {
      title: "Team Management",
      rules: [
        "Each team has a General Manager (GM) and Assistant General Manager (AGM)",
        "GMs are responsible for team operations and player management",
        "Teams must maintain active rosters with minimum player requirements",
        "Salary cap must be respected at all times",
        "Teams must submit lineups before each game"
      ]
    },
    {
      title: "Free Agency",
      rules: [
        "Free agency periods are announced before each season",
        "Teams can bid on available players",
        "Bidding starts at the player's asking price",
        "Bidding periods last 48 hours after first bid",
        "Highest bidder wins the player",
        "All bids are binding and final"
      ]
    },
    {
      title: "Trades",
      rules: [
        "Trades must be approved by both teams",
        "Trades must comply with salary cap restrictions",
        "Trade deadline is announced before each season",
        "Players cannot be traded within 24 hours of a game",
        "Trade terms must be clearly specified",
        "Commissioner approval required for major trades"
      ]
    },
    {
      title: "Gameplay Rules",
      rules: [
        "All games must be played on the specified platform",
        "Games must be completed within the scheduled time",
        "No-show penalties apply for missed games",
        "Players must use their registered gamer tags",
        "Fair play and sportsmanship are required",
        "Cheating or exploiting game mechanics is prohibited"
      ]
    },
    {
      title: "Statistics",
      rules: [
        "All game statistics must be accurately reported",
        "Statistics are used for player rankings and awards",
        "Discrepancies in statistics must be reported immediately",
        "Historical statistics are maintained for all seasons",
        "Statistics may be audited by league officials"
      ]
    },
    {
      title: "Conduct",
      rules: [
        "Respectful behavior is required at all times",
        "Discrimination or harassment will not be tolerated",
        "Forum posts must be appropriate and on-topic",
        "Disputes should be resolved through proper channels",
        "Violations may result in warnings, suspensions, or bans"
      ]
    },
    {
      title: "Penalties",
      rules: [
        "First offense: Warning",
        "Second offense: 1-game suspension",
        "Third offense: 3-game suspension",
        "Fourth offense: Season suspension",
        "Severe violations: Permanent ban",
        "Appeals process available for all penalties"
      ]
    },
    {
      title: "Administrative",
      rules: [
        "League decisions are final",
        "Rules may be updated between seasons",
        "Emergency rule changes may be implemented",
        "All participants must agree to these rules",
        "Rules are subject to interpretation by league officials"
      ]
    }
  ]

  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">League Rules</h1>
            
            <div className="mb-8 bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Important Notice</h2>
              <p className="text-muted-foreground">
                All participants in the Crash the Net League must read and agree to these rules. 
                Violations of these rules may result in penalties including warnings, suspensions, or permanent bans. 
                These rules are subject to change and will be updated as needed to maintain fair and competitive play.
              </p>
            </div>

            <div className="space-y-8">
              {ruleSections.map((section, index) => (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start space-x-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Rule Updates</h2>
              <p className="text-muted-foreground mb-4">
                These rules are reviewed and updated regularly. Major changes will be announced 
                before implementation, and all participants will be notified of updates.
              </p>
              <div className="text-sm text-muted-foreground">
                <p><strong>Last Updated:</strong> January 15, 2024</p>
                <p><strong>Next Review:</strong> March 15, 2024</p>
              </div>
            </div>

            <div className="mt-8 bg-card border rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Questions About Rules?</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about any of these rules or need clarification, 
                please contact our league administration.
              </p>
              <a
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact League Administration
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
