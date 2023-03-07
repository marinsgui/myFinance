import { useState } from 'react'
import useLogin from '../hooks/useLogin'

import style from '../styles/Login.module.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    function handleSubmit(e) {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className={style.login_form}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            <label>
                <span>Senha:</span>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {!isPending && <button className='btn'>Entrar</button>}
            {isPending && <button className='btn' disabled>Carregando</button>}
            {error && <p>{error}</p>}
        </form>
    )
}