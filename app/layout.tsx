import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { MantineProvider } from '@/components/providers/mantine-provider'
import { SidebarNavigation } from '@/components/layout/sidebar-navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crash the Net League',
  description: 'Professional Hockey League Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider>
            <div className="min-h-screen bg-background">
              {/* Main Content */}
              <div className="mr-64">
                {children}
              </div>
              
              {/* Right Sidebar */}
              <SidebarNavigation />
            </div>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


