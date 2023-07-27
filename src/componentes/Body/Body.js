import React from 'react'
import './Body.css'
const Body = () => {
  return (
    <section className='body'>
      <div className='box-one-body'>
        <div className='title-body'>
          INICIAR SESIÓN
        </div>
        <form className='form-body'>
          <input type='text' id='email' placeholder='Email' />
          <br></br>
          <input type='password' id='password' placeholder='Contraseña' />
        </form>
        <div className='box-two-body'>
          <button>INICIAR SESION</button>
          <button>RESEÑAS</button>
        </div>
      </div>
    </section>
  )
}

export default Body