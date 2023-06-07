import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>The bobs blogs</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
                color: 'white',
                backgroundColor: '#8728ed',
                borderRadius: '8px'
            }}>New Blog</a>
        </div>
      </nav>
    </div>
  )
}
