import { button, type ButtonVariants } from './Button.css'

type Props = React.ComponentProps<'button'> &
  ButtonVariants & {
    children: React.ReactNode
  }

export const Button: React.FC<Props> = ({
  children,
  color,
  size = 'medium',
}) => {
  return (
    <button
      className={button({
        color,
        size,
      })}
    >
      <span>{children}</span>
    </button>
  )
}
