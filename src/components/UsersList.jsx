import React from 'react'

const UsersList = ({user,
     setObjectUpdate, setIsShowForm , reset, deleteUser
    }) => {


    const updateUser =()=> {
        setIsShowForm(true)

        const obj = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            birthday: user.birthday,
            password: user.password,
          }
        reset(obj)
        setObjectUpdate(user)
    }
  return (
    <article className="cars">
       <div>
            <p>{user?.first_name} {user?.last_name}</p><hr></hr>
       </div> 

        <div className="cars_names"> 
            <p>CORREO</p> <span>{user?.email}</span>
            <p>CUMPLEAÑOS</p> <span>{user?.birthday}</span>
        </div>
        <hr></hr> 
        <div className="cars_btn">
    
            <button onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
            <button onClick={updateUser}><i className='bx bxs-pencil' ></i></button> 
        </div>
    </article>
  )
}

export default UsersList