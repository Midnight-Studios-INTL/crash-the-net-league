import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <p className="text-muted-foreground mb-4">
                  <strong>Effective Date:</strong> January 15, 2024<br />
                  <strong>Last Updated:</strong> January 15, 2024
                </p>
                <p className="text-muted-foreground">
                  This Privacy Policy describes how Crash the Net League ("we," "our," or "us") collects, 
                  uses, and protects your personal information when you use our website and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Name and email address</li>
                      <li>Gamer tag and console information</li>
                      <li>Position preferences and playing style</li>
                      <li>Discord username and ID (if connected)</li>
                      <li>Twitch account information (if connected)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Usage Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Game statistics and performance data</li>
                      <li>Forum posts and community interactions</li>
                      <li>Website usage patterns and preferences</li>
                      <li>Device information and IP addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <div className="bg-card border rounded-lg p-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• To provide and maintain our league services</li>
                    <li>• To create and manage your player profile</li>
                    <li>• To facilitate team assignments and match scheduling</li>
                    <li>• To track statistics and performance metrics</li>
                    <li>• To communicate with you about league updates</li>
                    <li>• To improve our services and user experience</li>
                    <li>• To enforce league rules and ensure fair play</li>
                    <li>• To provide customer support</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">League Operations</h3>
                    <p className="text-muted-foreground text-sm">
                      Your player information may be shared with team managers, league officials, 
                      and other players as necessary for league operations.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground text-sm">
                      We may disclose information if required by law or to protect our rights 
                      and the rights of our users.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Service Providers</h3>
                    <p className="text-muted-foreground text-sm">
                      We may share information with trusted third-party service providers 
                      who assist us in operating our platform.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Security Measures Include:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure database storage with access controls</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Employee training on data protection</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Access</h3>
                    <p className="text-muted-foreground text-sm">
                      You have the right to access and review your personal information.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Correction</h3>
                    <p className="text-muted-foreground text-sm">
                      You can update or correct your information through your account settings.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Deletion</h3>
                    <p className="text-muted-foreground text-sm">
                      You may request deletion of your account and associated data.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Portability</h3>
                    <p className="text-muted-foreground text-sm">
                      You can export your data in a portable format.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to enhance your experience, 
                  analyze usage patterns, and provide personalized content. You can 
                  control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 18 years of age. 
                  We do not knowingly collect personal information from children under 18. 
                  If you are a parent or guardian and believe your child has provided us 
                  with personal information, please contact us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you 
                  of any changes by posting the new Privacy Policy on this page and updating 
                  the "Last Updated" date. You are advised to review this Privacy Policy 
                  periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> privacy@crashnetleague.com<br />
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
