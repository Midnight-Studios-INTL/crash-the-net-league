import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Join the League</h1>
                <p className="text-muted-foreground">Create your Crash the Net League account</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="gamerTag" className="block text-sm font-medium mb-2">
                    Gamer Tag
                  </label>
                  <input
                    type="text"
                    id="gamerTag"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your gaming username"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="console" className="block text-sm font-medium mb-2">
                    Console
                  </label>
                  <select
                    id="console"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select your console</option>
                    <option value="Xbox">Xbox</option>
                    <option value="PS5">PlayStation 5</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="primaryPosition" className="block text-sm font-medium mb-2">
                    Primary Position
                  </label>
                  <select
                    id="primaryPosition"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select primary position</option>
                    <option value="C">Center (C)</option>
                    <option value="LW">Left Wing (LW)</option>
                    <option value="RW">Right Wing (RW)</option>
                    <option value="LD">Left Defense (LD)</option>
                    <option value="RD">Right Defense (RD)</option>
                    <option value="G">Goalie (G)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="secondaryPosition" className="block text-sm font-medium mb-2">
                    Secondary Position (Optional)
                  </label>
                  <select
                    id="secondaryPosition"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select secondary position</option>
                    <option value="C">Center (C)</option>
                    <option value="LW">Left Wing (LW)</option>
                    <option value="RW">Right Wing (RW)</option>
                    <option value="LD">Left Defense (LD)</option>
                    <option value="RD">Right Defense (RD)</option>
                    <option value="G">Goalie (G)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-muted-foreground">
                    I agree to the{' '}
                    <a href="/rules" className="text-primary hover:underline">
                      League Rules
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <a href="/login" className="text-primary hover:underline">
                    Sign in here
                  </a>
                </p>
              </div>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">Or register with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    Discord
                  </Button>
                  <Button variant="outline" className="w-full">
                    Twitch
                  </Button>
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
