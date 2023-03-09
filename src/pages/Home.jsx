import TransactionForm from '../components/TransactionForm'
import style from '../styles/Home.module.css'

export default function Home() {
    return (
        <main className={style.container}>
            <div className={style.content}>
                transaction list
            </div>
            <aside className={style.sidebar}>
                <TransactionForm />
            </aside>
        </main>
    )
}