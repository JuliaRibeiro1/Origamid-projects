import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import { useNavigate } from 'react-router-dom'



export const UserContext = React.createContext()


export function UserStorage({children}) {
    
const [data, setData] = React.useState()
const [login, setLogin] = React.useState(false)
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(null)
const navigate = useNavigate()

const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      
    },
    [],
  );


React.useEffect(() => {
    async function autoLogin() {
        const token = window.localStorage.getItem("token")
            if(token) {
                try {
                    setError(null)
                    setLoading(true)
                    const {url, options} = TOKEN_VALIDATE_POST(token)
                    const response = await fetch(url,options)
                    if(!response) throw new Error("Token Inválido")
                    await getUser(token)
                }
                catch(err) {
                    userLogout()
                }
                finally {
                    setLoading(false)
                }
        }
       
    }
    autoLogin()
},[userLogout])

async function getUser(token) {
    const {url, options} = USER_GET(token)
    const response = await fetch(url,options)
    const json = await response.json()
    setLogin(true)
    setData(json)
    console.log(response)
}
async function userLogin(username,password) {
    try {
        setError(null)
        setLoading(true)
        const {url,options} = TOKEN_POST({username,password});
        const tokenRes = await fetch(url,options)
        console.log(tokenRes)
        if(!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`)
        const {token} = await tokenRes.json()
        window.localStorage.setItem("token",token)
        await getUser(token)
        navigate("/conta")
    } catch(err) {
        setError(err.message)
        setLogin(false)
        console.log("eerrrrrr")

    }
    finally {
        setLoading(false)
    }
}

  return (
   <UserContext.Provider value={{userLogin, data, userLogout, error, loading, login}}>{children}</UserContext.Provider>
  )
}

export default UserContext