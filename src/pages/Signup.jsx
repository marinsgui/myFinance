import { useState } from 'react'

import style from '../styles/Signup.module.css'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        
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
            <button className='btn'>Cadastrar</button>
        </form>
    )
}