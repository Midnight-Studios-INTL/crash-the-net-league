import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <p className="text-muted-foreground mb-4">
                  <strong>Effective Date:</strong> January 15, 2024<br />
                  <strong>Last Updated:</strong> January 15, 2024
                </p>
                <p className="text-muted-foreground">
                  This disclaimer governs your use of the Crash the Net League website and services. 
                  By using our services, you accept this disclaimer in full.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">General Information</h2>
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    The information on this website is provided on an "as is" basis. To the fullest extent 
                    permitted by law, Crash the Net League excludes all representations, warranties, 
                    conditions and terms relating to our website and the use of this website.
                  </p>
                  <p className="text-muted-foreground">
                    Nothing in this disclaimer will limit or exclude our or your liability for death or 
                    personal injury, fraud, or any other liability that cannot be excluded or limited 
                    by applicable law.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">League Operations</h2>
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Simulation Nature</h3>
                    <p className="text-muted-foreground text-sm">
                      Crash the Net League is a simulation-based hockey league. While we strive for 
                      accuracy and realism, all results, statistics, and outcomes are simulated and 
                      should not be considered as real-world hockey statistics or achievements.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">No Real Money Transactions</h3>
                    <p className="text-muted-foreground text-sm">
                      All transactions within the league are virtual and do not involve real money. 
                      Player salaries, trades, and other financial aspects are purely simulated 
                      for entertainment purposes.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Game Results</h3>
                    <p className="text-muted-foreground text-sm">
                      Game results, player performances, and team standings are generated through 
                      our simulation system and may not reflect actual hockey gameplay or outcomes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Account Security</h3>
                    <p className="text-muted-foreground text-sm">
                      Users are responsible for maintaining the security of their accounts and 
                      passwords. We are not liable for any unauthorized access to user accounts.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Content Responsibility</h3>
                    <p className="text-muted-foreground text-sm">
                      Users are responsible for the content they post, including forum messages, 
                      comments, and other user-generated content. We reserve the right to remove 
                      inappropriate content.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Compliance</h3>
                    <p className="text-muted-foreground text-sm">
                      Users must comply with all league rules, terms of service, and applicable 
                      laws. Violations may result in account suspension or termination.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    In no event shall Crash the Net League, its officers, directors, employees, 
                    or agents be liable for any direct, indirect, incidental, special, consequential, 
                    or punitive damages, including without limitation, loss of profits, data, use, 
                    goodwill, or other intangible losses, resulting from your use of the service.
                  </p>
                  <p className="text-muted-foreground">
                    This limitation of liability shall apply to the fullest extent permitted by law 
                    and shall survive any termination of your account or the service.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">External Links</h3>
                    <p className="text-muted-foreground text-sm">
                      Our website may contain links to third-party websites. We are not responsible 
                      for the content, privacy policies, or practices of these external sites.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Discord Integration</h3>
                    <p className="text-muted-foreground text-sm">
                      Discord integration is provided as a convenience. Users are subject to 
                      Discord's terms of service and privacy policy when using Discord features.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">EA Sports Integration</h3>
                    <p className="text-muted-foreground text-sm">
                      EA Sports game integration is provided for statistical purposes. We are not 
                      affiliated with EA Sports and users are subject to EA's terms of service.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    We strive to maintain continuous service availability but cannot guarantee 
                    uninterrupted access. The service may be temporarily unavailable due to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Scheduled maintenance</li>
                    <li>Technical difficulties</li>
                    <li>Server issues</li>
                    <li>Third-party service outages</li>
                    <li>Force majeure events</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    All content, trademarks, and intellectual property on this website are owned 
                    by Crash the Net League or used with permission. Users may not reproduce, 
                    distribute, or create derivative works without written permission.
                  </p>
                  <p className="text-muted-foreground">
                    User-generated content remains the property of the user but grants us a 
                    license to use, display, and distribute such content within our services.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-muted-foreground">
                    This disclaimer shall be governed by and construed in accordance with the 
                    laws of Canada. Any disputes arising from this disclaimer or your use of 
                    our services shall be subject to the exclusive jurisdiction of the courts 
                    of Ontario, Canada.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-muted-foreground">
                    If you have any questions about this disclaimer, please contact us:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Email:</strong> legal@crashnetleague.com<br />
                    <strong>Address:</strong> Crash the Net League, 123 Hockey Street, Toronto, ON M5V 3A8<br />
                    <strong>Phone:</strong> (416) 555-0123
                  </p>
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
