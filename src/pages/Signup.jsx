import { useState } from 'react'
import useSignup from '../hooks/useSignup'

import style from '../styles/Signup.module.css'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isPending, error } = useSignup()

    function handleSubmit(e) {
        e.preventDefault()
        signup(email, password, username)
    }

    return (
        <form onSubmit={handleSubmit} className={style.signup_form}>
            <h2>Se cadastre</h2>
            
            <label>
                <span>Nome de usuário:</span>
                <input 
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} 
                />
            </label>

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
            {!isPending && <button className='btn'>Cadastrar</button>}
            {isPending && <button className='btn' disabled>Loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}