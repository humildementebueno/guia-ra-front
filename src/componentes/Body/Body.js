import React from 'react'
import './Body.css'
import CustomButton from '../CustomButton/CustomButton'
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
          <CustomButton
          >INICIAR SESION</CustomButton>
          <CustomButton
          >RESEÑAS</CustomButton>
        </div>
      </div>
    </section>
  )
}

export default Body