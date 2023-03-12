import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'

import useAuthContext from '../hooks/useAuthContext'
import useCollection from '../hooks/useCollection'

import style from '../styles/Home.module.css'

export default function Home() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection('transactions')

    return (
        <main className={style.container}>
            <div className={style.content}>
                {error && <p>{error}</p>}
                {documents && <TransactionList transactions={documents} />}
            </div>
            <aside className={style.sidebar}>
                <TransactionForm uid={user?.uid} />
            </aside>
        </main>
    )
}