import React from 'react'
import './button.css'

export default function Button({ children, click }) {
  return <a onClick={click} className="Button">{children}</a>
}
