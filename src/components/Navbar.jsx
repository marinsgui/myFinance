import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext'

import style from '../styles/Navbar.module.css'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className={style.navbar}>
            <ul>
                <li className={style.title}>myFinance</li>

                {!user && (
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Cadastro</Link>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>Olá, {user.displayName}!</li>
                        <li>
                            <button className='btn' onClick={logout}>Sair</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}