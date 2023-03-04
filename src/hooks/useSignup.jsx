import { useState } from "react";
import { projectAuth } from "../firebase/config";

export default function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    async function signup(email, password, username) {
        setError(null)
        setIsPending(true)

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if(!res) {
                throw new Error('Não foi possível completar o cadastro')
            }

            await res.user.updateProfile({ username })

            setIsPending(false)
            setError(null)
        } catch(err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, signup }
}