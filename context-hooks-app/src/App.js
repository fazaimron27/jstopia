import React from 'react'
import Home from './components/Home'
import { UserProvider } from './UserContext'

const App = () => {
   const user = { name: 'Fahmi', loggedIn: true }
   
   return (
      <UserProvider value={ user }>
         <Home />
      </UserProvider>
   )
}

export default App