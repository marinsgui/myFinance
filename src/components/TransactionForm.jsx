import { useState } from "react";

export default function TransactionForm() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log({ name, amount })
    }
    
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