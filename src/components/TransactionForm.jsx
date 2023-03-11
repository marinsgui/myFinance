import { useEffect, useState } from "react"
import useFirestore from '../hooks/useFirestore'

export default function TransactionForm({ uid }) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('transactions')

    function handleSubmit(e) {
        e.preventDefault()
        addDocument({ uid, name, amount })
    }

    useEffect(() => {
        if(response.success) {
            setName('')
            setAmount('')
        }
    }, [response.success])
    
    return (
        <>
            <h3>Adicione uma transação</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome da transação:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>

                <label>
                    <span>Valor da transação:</span>
                    <input 
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button>Adicionar transação</button>
            </form>
        </>
    )
}