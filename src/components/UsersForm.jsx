import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UsersForm = ({createUser, upDateUserById, 
  objectUpdate, handleSubmit, reset, register}) => {

    const defaulValuesForm = {
      first_name: '',
      last_name: '',
      email: '',
      birthday: '',
      password: '',
    }

    const submit = data => {
      if(objectUpdate !== undefined){
        upDateUserById(objectUpdate.id, data)
        reset(defaulValuesForm)
      }else {
        createUser(data)
      }
        reset(defaulValuesForm)
       
    }




  return (
    <div className='container'>
      <form onSubmit={handleSubmit(submit)} className="form">
        <div>
          <p>NUEVO USUARIO</p>

        </div>
              <div>
                <label htmlFor="first_name">Nombre: </label><br />
                <input type="text" id='first_name'{...register('first_name')}/> 
              </div>
              <div>
                <label htmlFor="last_name">Apellido: </label><br />
                <input type="text" id='last_name'{...register('last_name')}/> 
              </div>

              <div>
                <label htmlFor="email">Correo: </label><br />
                <input type="email" id='email'{...register('email')}/>
              </div>

              <div>
                <label htmlFor="birthday">Fecha de Nacimiento: </label> <br />
                <input type="date" id='birthday'{...register('birthday')}/> 
              </div>
              <div>
                <label htmlFor="password">Password </label> <br />
                <input type="password" id='password'{...register('password')}/> 
              </div>

              <div className='btn'>
                <button className='form_btn'>Submit</button>
              </div>
      </form>
    </div> 
  )
}

export default UsersForm