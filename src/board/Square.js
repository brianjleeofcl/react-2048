import React from 'react'
import './Square.css'


export default function Square({ children }) {
  const map = {
    '0': 'white',
    '1': 'yellow',
    '2': 'orange',
    '4': 'red',
    '8': 'magenta',
    '16': 'purple'
  }
  return <div className="Square" style={{backgroundColor: `${map[children]}`}}>{children}</div>
}
