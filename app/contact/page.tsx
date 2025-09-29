import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="league">League Information</option>
                      <option value="media">Media Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">League Headquarters</h3>
                      <p className="text-muted-foreground">
                        Crash the Net League<br />
                        123 Hockey Street<br />
                        Toronto, ON M5V 3A8<br />
                        Canada
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground">(416) 555-0123</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@crashnetleague.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                        Saturday: 10:00 AM - 2:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Department Contacts</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">General Inquiries</h3>
                      <p className="text-muted-foreground">info@crashnetleague.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Technical Support</h3>
                      <p className="text-muted-foreground">support@crashnetleague.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Media Relations</h3>
                      <p className="text-muted-foreground">media@crashnetleague.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Partnerships</h3>
                      <p className="text-muted-foreground">partnerships@crashnetleague.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Player Relations</h3>
                      <p className="text-muted-foreground">players@crashnetleague.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Emergency Contact</h2>
                  <p className="text-muted-foreground mb-2">
                    For urgent matters outside business hours, please contact:
                  </p>
                  <p className="font-semibold">emergency@crashnetleague.com</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This email is monitored 24/7 for critical issues only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
