import React from 'react'

const Register = () => {
  return (
    <section>
      <div>
        <h1>Create account</h1>
      </div>
        <form action="">
          <label >Name:</label>
          <input type="text" placeholder='Ingresa tu nombre' />

          <label >Email:</label>
          <input type="text" placeholder='Ingresa tu correo' />

          <label >Password:</label>
          <input type="text" placeholder='Ingresa tu contraseña' />
          <button>Sing in</button>
        </form>
    </section>
  )
}

export default Register