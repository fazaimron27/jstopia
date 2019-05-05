import React from 'react'

const EditUser = props => {
   const [user, setUser] = React.useState(props.currentUser)

   React.useEffect(() => {
      setUser(props.currentUser)
      console.log(props)
   },[props])

   const handleSubmit = event => {
      event.preventDefault()

      props.updateUser(user.id, user)
   }
   const handleInputChange = event => {
      const { name, value } = event.target

      setUser({...user, [name]: value })
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>Name</label>
         <input type="text" name="name" value={user.name} onChange={handleInputChange} />
         <label>Username</label>
         <input type="text" name="username" value={user.username} onChange={handleInputChange} />
         <button>Update user</button>
         <button onClick={() => props.setEdit(false)} className="button muted-button">
            Cancel
         </button>
      </form>
   )
}

export default EditUser