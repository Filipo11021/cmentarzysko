import React, { type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

const button = cva(
  'inline-flex border items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: ['bg-[#232335]', 'text-white', 'border-[#54619C]', 'hover:bg-slate-900'],
        secondary: ['bg-[linear-gradient(96deg,_rgba(29,_29,_45,_0.25)_0%,_rgba(216,_156,_99,_0.25)_97.83%),_#232335]', 'text-white', 'border-[#54619C]', 'hover:bg-slate-900'],
      },
      size: {
        medium: ['text-base', 'py-3', 'px-5'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    asChild?: boolean
  }

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={button({ variant, size, className })} {...props} />
}
