import React from 'react'
import './Square.css'


export default function Square({ children }) {
  const colorMap = {
    '0': '#000000',
    '2': '#1588ff',
    '4': '#00b1ff',
    '8': '#00d8ff',
    '16': '#66e7ff',
    '32': '#b2f3ff',
    '64': '#ffffff',
    '128': '#ffffff',
    '256': '#ffffff',
    '512': '#ffffff',
    '1024': '#ffffff',
    '2048': '#ffffff'
  }
  return <div className="Square" style={{backgroundColor: `${colorMap[children]}`}}>{children}</div>
}
