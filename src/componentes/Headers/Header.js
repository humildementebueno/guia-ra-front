import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='header-ul'>
         <a href='/'>Inicia Sesion</a>
         <a href='/login'> |  Resgistrate</a>
        </ul>
      </nav>
         
    </header>
  )
}

export default Header