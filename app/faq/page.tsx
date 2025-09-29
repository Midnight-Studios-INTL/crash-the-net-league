import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is the Crash the Net League?",
          answer: "The Crash the Net League (CTNL) is a comprehensive hockey league management system that provides teams, players, and fans with a complete ecosystem for managing league operations, tracking statistics, and fostering community engagement."
        },
        {
          question: "How do I join the league?",
          answer: "To join the league, you need to register for an account and then register for the current season. Visit the registration page to get started with your player profile, including your gamer tag, console preference, and position."
        },
        {
          question: "What platforms are supported?",
          answer: "CTNL supports both Xbox and PS5 platforms. When registering, you'll need to specify which console you'll be playing on, as this affects team assignments and match scheduling."
        },
        {
          question: "How are teams formed?",
          answer: "Teams are formed through a combination of free agency bidding, trades, and draft processes. Players can be signed through free agency, traded between teams, or claimed off waivers."
        }
      ]
    },
    {
      category: "Gameplay",
      questions: [
        {
          question: "How do matches work?",
          answer: "Matches are scheduled between teams and can be played live or imported from EA Sports NHL games. The system tracks detailed statistics including goals, assists, saves, and other performance metrics."
        },
        {
          question: "What is the ELO rating system?",
          answer: "The ELO rating system provides a skill-based ranking for players. Your rating increases when you win matches and decreases when you lose, creating a dynamic ranking system that reflects your current skill level."
        },
        {
          question: "How do I set my lineup?",
          answer: "Team managers can set lineups for upcoming matches through the management interface. You can assign players to specific positions and lines, and designate starters and bench players."
        },
        {
          question: "What happens if I can't play a scheduled match?",
          answer: "If you can't play a scheduled match, you should mark yourself as unavailable through the game availability system. This helps your team manager make appropriate lineup adjustments."
        }
      ]
    },
    {
      category: "Free Agency & Trades",
      questions: [
        {
          question: "How does free agency bidding work?",
          answer: "Free agency allows teams to bid on available players. Teams place bids above the player's asking price, and the highest bidder wins the player. Bidding periods typically last 48 hours after the first bid is placed."
        },
        {
          question: "Can I trade players?",
          answer: "Yes, teams can trade players with each other. Trades must be approved by both teams and are subject to salary cap restrictions. The trade system includes negotiation tools and approval workflows."
        },
        {
          question: "What is the salary cap?",
          answer: "The salary cap is currently set at $83.5 million per team. This ensures competitive balance by preventing teams from spending unlimited amounts on player salaries."
        },
        {
          question: "How do waivers work?",
          answer: "When a player is waived, other teams can claim them based on waiver priority order. Teams with lower priority (higher numbers) get first chance to claim waived players."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "I'm having trouble logging in. What should I do?",
          answer: "If you're having login issues, try resetting your password using the forgot password feature. If problems persist, contact our technical support team at support@crashnetleague.com."
        },
        {
          question: "How do I update my player information?",
          answer: "You can update your player information through the settings page. This includes your gamer tag, position preferences, and contact information."
        },
        {
          question: "Why can't I see my team's matches?",
          answer: "Make sure you're logged in and have been assigned to a team. If you're still having issues, contact your team manager or league administration for assistance."
        },
        {
          question: "How do I report a bug or issue?",
          answer: "You can report bugs through the contact form, selecting 'Technical Support' as the subject. Please provide as much detail as possible about the issue you're experiencing."
        }
      ]
    }
  ]

  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
            
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-card border rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                If you couldn't find the answer you're looking for, don't hesitate to reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/forum"
                  className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Ask the Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
