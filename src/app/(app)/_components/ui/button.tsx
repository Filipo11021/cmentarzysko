import React, { type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

const button = cva(
  'inline-flex border items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: ['bg-[#232335]', 'text-white', 'border-[#54619C]', 'hover:bg-slate-900'],
        secondary: ['bg-gradient', 'text-white', 'border-[#54619C]', 'hover:bg-slate-900'],
        outline: ['text-white', 'border-[#54619C]', 'hover:opacity-70', 'transition-opacity'],
        link: ['text-white', 'hover:opacity-70', 'border-none'],
      },
      size: {
        medium: ['text-base', 'py-3', 'px-5'],
        icon: 'p-3',
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
