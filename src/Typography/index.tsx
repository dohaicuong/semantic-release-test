import React from 'react'

export type Props = {
  variant: 'h1' | 'p' | 'div'
}
const Button: React.FC<Props> = ({ variant, children }) => {
  if (variant === 'h1') return <h1>{children}</h1>
  if (variant === 'p') return <p>{children}</p>

  return <div>{children}</div>
}
export default Button