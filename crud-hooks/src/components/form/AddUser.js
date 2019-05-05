import React from 'react'

const AddUser = props => {
   
   const initialFormState = { id: null, name: '', username: '' }
   const [user, setUser] = React.useState(initialFormState)

   const handleSubmit = event => {
      event.preventDefault()
      if (!user.name || !user.username) return

      console.log(user)
      
      props.addUser(user)
      setUser(initialFormState)
   }
   const handleInputChange = event => {
      const { name, value } = event.target
      setUser({...user, [name]: value})
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>Name</label>
         <input type="text" name="name" value={ user.name } onChange={ handleInputChange } />
         <label>Username</label>
         <input type="text" name="username" value={ user.username } onChange={ handleInputChange } />
         <button> Add new user </button>
      </form>
   )
}

export default AddUser