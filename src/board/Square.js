import React from 'react'
import './Square.css'


export default function Square({ children }) {
  const map = {
    '0': 'white',
    '2': 'yellow',
    '4': 'orange',
    '8': 'red',
    '16': 'magenta',
    '32': 'purple'
  }
  return <div className="Square" style={{backgroundColor: `${map[children]}`}}>{children}</div>
}
