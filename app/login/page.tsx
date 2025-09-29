import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-muted-foreground">Sign in to your Crash the Net League account</p>
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
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <a href="/register" className="text-primary hover:underline">
                    Sign up here
                  </a>
                </p>
              </div>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
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
