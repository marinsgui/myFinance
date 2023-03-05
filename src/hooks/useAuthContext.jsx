import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export default function useAuthContext() {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('useAuthContext deve estar dentro de um AuthContextProvider')
    }

    return context
}