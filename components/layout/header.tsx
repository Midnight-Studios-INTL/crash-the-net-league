'use client'

import Link from 'next/link'
import { Search, Command } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { useCommandPalette } from '@/components/ui/command-palette'

export function Header() {
  const { CommandPalette } = useCommandPalette()

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">
                Crash the Net League
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex items-center space-x-2 text-muted-foreground"
                onClick={() => {
                  const event = new KeyboardEvent('keydown', {
                    key: 'k',
                    metaKey: true,
                    ctrlKey: true
                  })
                  document.dispatchEvent(event)
                }}
              >
                <Search className="h-4 w-4" />
                <span>Search...</span>
                <div className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">⌘</kbd>
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">K</kbd>
                </div>
              </Button>
            </div>
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm">
                Register
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <CommandPalette />
    </>
  )
}


