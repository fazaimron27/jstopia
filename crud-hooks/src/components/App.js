import React from 'react'
import UserTable from './tables/UserTable'
import AddUser from './form/AddUser'
import EditUser from './form/EditUser'

const App = () => {
   const initialFormState = { id: null, username: ''}
   
   const usersData = [
      { id: 1, name: 'Tania', username: 'floppydiskette' },
      { id: 2, name: 'Craig', username: 'siliconeidolon' },
      { id: 3, name: 'Ben', username: 'benisphere' },      
   ]

   const [users, setUsers] = React.useState(usersData)
   const [edit, setEdit] = React.useState(false)
   const [currentUser, setCurrentUser] = React.useState(initialFormState)

   const addUser = user => {
      user.id = users.length + 1
      setUsers([...users, user])
   }
   const deleteUser = id => {
      setUsers(users.filter(user => user.id !== id))
   }
   const editRow = user => {
      setEdit(true)
      setCurrentUser({ id: user.id, name: user.name, username: user.username })
   }
   const updateUser = (id, updatedUser) => {
      setEdit(false)
      setUsers(users.map(user => user.id === id ? updatedUser : user))
   }

   return (
      <div className="container">
         <h1>CRUD App with Hooks</h1>
         <div className="flex-row">
            <div className="flex-large">
               { edit ? (
                  <div>
                     <h2>Edit user</h2>
                     <EditUser
                        edit={edit}
                        setEdit={setEdit}
                        currentUser={currentUser}
                        updateUser={updateUser}
                     />
                  </div>
               ) : (
                  <div>
                     <h2>Add user</h2>
                     <AddUser addUser={addUser} />
                  </div>
               )}
            </div>
            <div className="flex-large">
               <h2>View users</h2>
               <UserTable users={ users } editRow={editRow} deleteUser={deleteUser} />
            </div>
         </div>
      </div>
   )
}

export default App