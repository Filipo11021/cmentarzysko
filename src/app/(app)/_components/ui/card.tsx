import * as React from 'react'

import { cn } from '@/app/(app)/_utils/cn'

const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { variant?: 'primary' | 'secondary' }
> = ({ className, variant = 'primary', ...props }) => (
  <div
    className={cn(
      'rounded-lg border border-[#54619C] bg-[#232335] px-8 py-6',
      {
        'text-white': variant === 'primary',
        'shadow-[0_4px_16px_0px_rgba(190,138,87,0.25)]': variant === 'secondary',
      },
      className,
    )}
    {...props}
  />
)

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
)

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={cn('font-bold text-balance text-2xl sm:text-3xl', className)} {...props} />
)

const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p className={cn('opacity-65', className)} {...props} />

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
