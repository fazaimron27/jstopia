import React, { useContext } from 'react'
import UserContext from '../UserContext';

const Home = () => {
   const user = useContext(UserContext)
   console.log(user)

   return (
      <div>Home</div>
   )
}

export default Home