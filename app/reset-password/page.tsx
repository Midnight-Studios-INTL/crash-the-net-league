import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
                <p className="text-muted-foreground">
                  Enter your new password below
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your new password"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Confirm your new password"
                    required
                  />
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Password Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• At least 8 characters long</li>
                    <li>• Contains uppercase and lowercase letters</li>
                    <li>• Contains at least one number</li>
                    <li>• Contains at least one special character</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full">
                  Reset Password
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
