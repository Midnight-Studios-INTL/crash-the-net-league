'use client'

import * as React from 'react'
import { Search, Command } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface CommandItem {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  action: () => void
  category?: string
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = React.useState('')
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const commands: CommandItem[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Go to your dashboard',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/dashboard'
        onOpenChange(false)
      },
      category: 'Navigation'
    },
    {
      id: 'teams',
      title: 'Teams',
      description: 'View all teams',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/teams'
        onOpenChange(false)
      },
      category: 'Navigation'
    },
    {
      id: 'players',
      title: 'Players',
      description: 'View all players',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/players'
        onOpenChange(false)
      },
      category: 'Navigation'
    },
    {
      id: 'matches',
      title: 'Matches',
      description: 'View upcoming matches',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/matches'
        onOpenChange(false)
      },
      category: 'Navigation'
    },
    {
      id: 'standings',
      title: 'Standings',
      description: 'View league standings',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/standings'
        onOpenChange(false)
      },
      category: 'Navigation'
    },
    {
      id: 'statistics',
      title: 'Statistics',
      description: 'View player and team stats',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/statistics'
        onOpenChange(false)
      },
      category: 'Navigation'
    },
    {
      id: 'free-agency',
      title: 'Free Agency',
      description: 'Browse available players',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/free-agency'
        onOpenChange(false)
      },
      category: 'Management'
    },
    {
      id: 'forum',
      title: 'Forum',
      description: 'Community discussions',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/forum'
        onOpenChange(false)
      },
      category: 'Community'
    },
    {
      id: 'news',
      title: 'News',
      description: 'Latest league news',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/news'
        onOpenChange(false)
      },
      category: 'Community'
    },
    {
      id: 'profile',
      title: 'Profile',
      description: 'View your profile',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/profile'
        onOpenChange(false)
      },
      category: 'Account'
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'Account settings',
      icon: <Search className="h-4 w-4" />,
      action: () => {
        window.location.href = '/settings'
        onOpenChange(false)
      },
      category: 'Account'
    }
  ]

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(search.toLowerCase()) ||
    command.description?.toLowerCase().includes(search.toLowerCase())
  )

  const groupedCommands = filteredCommands.reduce((acc, command) => {
    const category = command.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(command)
    return acc
  }, {} as Record<string, CommandItem[]>)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
      if (open) {
        if (e.key === 'Escape') {
          onOpenChange(false)
        } else if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1))
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => Math.max(prev - 1, 0))
        } else if (e.key === 'Enter') {
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, selectedIndex, filteredCommands, onOpenChange])

  React.useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-[20vh]">
      <div className="bg-card border rounded-lg shadow-lg w-full max-w-2xl mx-4">
        <div className="flex items-center border-b px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground mr-3" />
          <input
            type="text"
            placeholder="Search commands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
            autoFocus
          />
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">ESC</kbd>
            <span>to close</span>
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto p-2">
          {Object.keys(groupedCommands).length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No commands found
            </div>
          ) : (
            Object.entries(groupedCommands).map(([category, categoryCommands]) => (
              <div key={category} className="mb-4">
                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {category}
                </div>
                {categoryCommands.map((command, index) => {
                  const globalIndex = filteredCommands.indexOf(command)
                  return (
                    <button
                      key={command.id}
                      onClick={command.action}
                      className={cn(
                        'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-sm transition-colors',
                        globalIndex === selectedIndex
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      )}
                    >
                      {command.icon}
                      <div className="flex-1">
                        <div className="font-medium">{command.title}</div>
                        {command.description && (
                          <div className="text-xs text-muted-foreground">
                            {command.description}
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>
        
        <div className="border-t px-4 py-2 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">↑↓</kbd>
                <span>to navigate</span>
              </div>
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">↵</kbd>
                <span>to select</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">⌘K</kbd>
              <span>to open</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook to use the command palette
export function useCommandPalette() {
  const [open, setOpen] = React.useState(false)
  
  return {
    open,
    setOpen,
    CommandPalette: () => <CommandPalette open={open} onOpenChange={setOpen} />
  }
}
