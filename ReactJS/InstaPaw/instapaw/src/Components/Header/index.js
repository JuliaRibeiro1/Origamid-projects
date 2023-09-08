import React from 'react'
import styles from "../Header/Header.module.css"
import { ReactComponent as Dogs} from "../Assets/dogs.svg"
import { Link } from 'react-router-dom'
import UserContext from '../../UserContext'

function Header() {
 const {data,userLogout} = React.useContext(UserContext);
  return (
    <div className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <ul>
                <li>
                  <Link to="/" className={styles.logo} aria-label="Home"> <Dogs/></Link>
                </li>
                {data ? (
                  <Link to="/conta" className={styles.login}> {data.nome} <button onClick={userLogout}>Sair</button></Link>) :  
                <li>
                  <Link to="/login" className={styles.login}>Login / Cadastrar</Link>
                </li>}
               
            </ul>
            
           
        </nav>
    </div>
  )
}

export default Header