import { useState } from "react"
import { projectAuth } from "../firebase/config"
import useAuthContext from './useAuthContext'

export default function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    async function signup(email, password, username) {
        setError(null)
        setIsPending(true)

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if(!res) {
                throw new Error('Não foi possível completar o cadastro')
            }

            await res.user.updateProfile({ username })

            dispatch({ type: 'LOGIN', payload: res.user })

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