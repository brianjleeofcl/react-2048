import React from 'react'
import { Link } from 'react-router'
import './Modal.css'

export default function Modal({children}) {
  return <div className="Modal-background">
    <div className="Modal">
      <div>{children}</div>
      <Link to="/">Close Modal</Link>
    </div>
  </div>
}
