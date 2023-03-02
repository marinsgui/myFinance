import { Link } from 'react-router-dom'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <ul>
                <li className={style.title}>myFinance</li>
                <li>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Cadastro</Link>
                </li>
            </ul>
        </nav>
    )
}