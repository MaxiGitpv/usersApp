import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import { useForm} from 'react-hook-form'
function App() {

  const {register, handleSubmit, reset} = useForm()

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUsers = () => {

    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=> {
    getAllUsers()
  },[])

  const createUser = newUser => {

    axios.post('https://users-crud1.herokuapp.com/users/', newUser )
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(()=> getAllUsers())
  }

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => getAllUsers())
  }







  const upDateUserById = (id, upDateUserId) => {

    axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`, upDateUserId )
    .then(res => {
      console.log(res.data)
      getAllUsers()
      setObjectUpdate()
      setIsShowForm(false)
    })
    .catch(err => console.log(err))
  }
  




  const showForm =() => {
    const obj = {
      first_name: '',
      last_name: '',
      email: '',
      birthday: '',
      password: '',
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }
  return (
    <div className="App">

      <h1>Users App</h1>
      <div>
      <button onClick={showForm} className="app_btn"> 
          
          {
            isShowForm ? 'OCULTAR FORMULARIO' 
              : 
            <i className='bx bx-plus'> NUEVO REGISTRO</i>
          }
      </button>
      </div>

      {
        isShowForm && 
        <UsersForm 
          createUser={createUser}
          upDateUserById={upDateUserById}
          objectUpdate={objectUpdate}
          handleSubmit={handleSubmit}
          reset={reset}
          register={register}
          
        />
      }
      
      <div className="app_container">
        
        {
          users?.map(user =>(
            <UsersList 
            key={user.id}
            user={user}
            setObjectUpdate={setObjectUpdate}
            setIsShowForm={setIsShowForm}
            reset={reset}
            deleteUser={deleteUser}
            />
          ))
      
        }
      </div>
      
    </div>
  )
}

export default App
