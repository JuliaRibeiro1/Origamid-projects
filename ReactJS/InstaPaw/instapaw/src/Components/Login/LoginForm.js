import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm.js'
import UserContext from '../../UserContext'
import Error from "../Helper/Error"
import styles from "./LoginForm.module.css"
import stylesBtn from "../Forms/Button.module.css"


function LoginForm() {

    

    async function handleSubmit(e) {
        e.preventDefault()

        if(username.validate() && password.validate()) {
            userLogin(username.value,password.value)
      
    }
    }
    const {userLogin, error, loading} = React.useContext(UserContext)
    const username = useForm()
    const password = useForm()
    console.log(error)
  
  return (
    <section className='animeLeft'>
        <h1 className='title'>Login</h1>
        <form action='' onSubmit={handleSubmit} className={styles.form}>
            <Input
                label="usuário"
                type="text"
                name="username"
                {...username}
            />
            <Input
                label="Senha"
                type="password"
                name="password"
                {...password}
            />

           {loading ? <Button disabled>Carregando</Button> : <Button>Entrar</Button> } 
            <Error error={error}/>
        </form>
        <Link className={styles.lost} to="login/lost-password">Esqueceu a senha?</Link>

        <div className={styles.cadastro}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta ? Cadastre-se no site.</p>
            <Link className={stylesBtn.button} to="/login/sign-up"> Cadastrar </Link>
        </div>
        
    </section>
  )
}

export default LoginForm