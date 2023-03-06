import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export function authReducer(state, action) {
    switch(action.type) {
        case 'LOGIN': return { ...state, user: action.payload }
        case 'LOGOUT': return { ...state, user: null }
        
        default: return state
    }
}

export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}