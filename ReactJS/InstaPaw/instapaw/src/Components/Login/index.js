import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import UserContext from '../../UserContext'
import styles from "./Login.module.css"

function Login() {

  const {login} = React.useContext(UserContext)

  if(login === true) return <Navigate to="/conta"/>
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="sign-up" element={<LoginCreate/>}/>
          <Route path="forgot-password" element={<LoginPasswordLost/>}/>
          <Route path="password-reset" element={<LoginPasswordReset/>}/>

          <Route/>
      </Routes>
      </div>
    </section>
  )
}

export default Login