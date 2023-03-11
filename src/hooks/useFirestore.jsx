import { useReducer, useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

function firestoreReducer(state, action) {
    switch(action.type) {
        case 'IS_PENDING': return { isPending: true, document: null, success: false, error: null }
        case 'ADDED_DOCUMENT': return { isPending: false, document: action.payload, success: true, error: null }
        case 'ERROR': return { isPending: false, document: null, success: false, error: action.payload }

        default: return state
    }
}

export default function useFirestore(collection) {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = projectFirestore.collection(collection)

    function dispatchIfNotCancelled(action) {
        if(!isCancelled) {
            dispatch(action)
        } 
    }

    async function addDocument(doc) {
        dispatch({ type: 'IS_PENDING' })

        try {
            const addedDocument = await ref.add(doc)
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
        } catch(err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
        }
    }

    async function deleteDocument(id) {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }
}