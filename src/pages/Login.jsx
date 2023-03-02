import { useState } from 'react'

import style from '../styles/Login.module.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        
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
            <button className='btn'>Entrar</button>
        </form>
    )
}