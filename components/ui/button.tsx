import * as React from 'react'
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<MantineButtonProps, 'color' | 'style' | 'className'>, React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const mantineVariant = variant === 'outline' ? 'outline' : 
                          variant === 'secondary' ? 'light' : 
                          variant === 'ghost' ? 'subtle' : 
                          variant === 'link' ? 'subtle' : 'filled'
    
    const mantineSize = size === 'sm' ? 'xs' : 
                       size === 'lg' ? 'lg' : 
                       size === 'icon' ? 'xs' : 'sm'

    return (
      <MantineButton
        className={cn(className)}
        ref={ref}
        variant={mantineVariant}
        size={mantineSize}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }


