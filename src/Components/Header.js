import './Header.scss'
import React from 'react'

export default function Header() {
  return (
    <div className = 'header'>
     <nav className='nav-links'>
          <a href="/">Home</a>
          <a href="/ourApartment">Our Apartment</a>
          <a href="/Rio">Rio</a>
          <a href="/Contact">Contact</a>
          <a href="/" className='book-btn'>Book</a>
      </nav>
    </div>
  )
}
