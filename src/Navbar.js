import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>The bobs blogs</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color: 'white',
                backgroundColor: '#8728ed',
                borderRadius: '8px'
            }}>New Blog</Link>
        </div>
      </nav>
    </div>
  )
}
