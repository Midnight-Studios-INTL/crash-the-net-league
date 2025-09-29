'use client'

import { MantineProvider as MantineProviderBase } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

export function MantineProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProviderBase>
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </MantineProviderBase>
  )
}


