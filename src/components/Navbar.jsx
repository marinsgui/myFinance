import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'

import style from '../styles/Navbar.module.css'

export default function Navbar() {
    const { logout } = useLogout()

    return (
        <nav className={style.navbar}>
            <ul>
                <li className={style.title}>myFinance</li>
                <li>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Cadastro</Link>
                </li>
                <li>
                    <button className='btn' onClick={logout}>Sair</button>
                </li>
            </ul>
        </nav>
    )
}