import TransactionForm from '../components/TransactionForm'
import useAuthContext from '../hooks/useAuthContext'

import style from '../styles/Home.module.css'

export default function Home() {
    const { user } = useAuthContext()

    return (
        <main className={style.container}>
            <div className={style.content}>
                transaction list
            </div>
            <aside className={style.sidebar}>
                <TransactionForm uid={user.uid} />
            </aside>
        </main>
    )
}