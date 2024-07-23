import { Slot } from '@radix-ui/react-slot'
import { HtmlHTMLAttributes, FC } from 'react'
import { cn } from '../../_utils/cn'

type ContainerProps = HtmlHTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

export const Container: FC<ContainerProps> = ({ asChild, className, ...props }) => {
  const Comp = asChild ? Slot : 'div'

  return <Comp className={cn('max-w-8xl px-4 mx-auto', className)} {...props} />
}
