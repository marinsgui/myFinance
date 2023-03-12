import style from '../styles/TransactionList.module.css'

export default function TransactionList({ transactions }) {
    return (
        <ul className={style.transactions}>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    <p className={style.name}>{transaction.name}</p>
                    <p className={style.amount}>R${transaction.amount}</p>
                </li>
            ))}
        </ul>
    )
}