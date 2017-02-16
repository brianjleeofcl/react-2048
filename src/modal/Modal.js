import React from 'react'
import './Modal.css'

export default function({children}) {
  return <div className="Modal-background">
    <div className="Modal">
      <div>{children}</div>
      <a>Close Modal</a>
    </div>
  </div>
}
