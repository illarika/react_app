import{ Route, Routes} from "react-router-dom";
import React from 'react'
import Users from "./Users";
import Counter from "./Counter"


const AppRouter = () => {
  return (
   <Routes>
       <Route path='/' element={<Users/>}/>
       <Route path='/users' element={<Users/>}/>
       <Route path='/counter' element={<Counter/>}/>
   </Routes>
  )
}

export default AppRouter

