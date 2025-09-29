import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
                <p className="text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password
                </p>
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

                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Remember your password?{' '}
                  <a href="/login" className="text-primary hover:underline">
                    Sign in here
                  </a>
                </p>
              </div>

              <div className="mt-8 bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're having trouble resetting your password, try these steps:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check your spam/junk folder</li>
                  <li>• Make sure you're using the correct email address</li>
                  <li>• Wait a few minutes for the email to arrive</li>
                  <li>• Contact support if you continue to have issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
