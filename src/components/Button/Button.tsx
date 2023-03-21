type Props = {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button>
      <span>{children}</span>
    </button>
  )
}
