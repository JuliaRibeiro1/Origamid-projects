import React from 'react'
import "./App.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Login from "./Components/Login"
import { UserStorage } from './UserContext'
import User from './Components/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'



const App = () => {
  return (
  <div>
    <BrowserRouter>
    <UserStorage>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/conta/*' element={<ProtectedRoute><User/></ProtectedRoute>}/>
      </Routes>
      </main>
      <Footer/>
      </UserStorage>
    </BrowserRouter>uihuhuh
  </div>
  )
}

export default App