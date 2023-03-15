import useFirestore from '../hooks/useFirestore'

import style from '../styles/TransactionList.module.css'

export default function TransactionList({ transactions }) {
    const { deleteDocument, response } = useFirestore('transactions')

    console.log(response)

    return (
        <ul className={style.transactions}>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    <p className={style.name}>{transaction.name}</p>
                    <p className={style.amount}>R${transaction.amount}</p>
                    <button onClick={() => deleteDocument(transaction.id)}>x</button>
                </li>
            ))}
        </ul>
    )
}