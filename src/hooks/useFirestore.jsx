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

        default: return state
    }
}

export default function useFirestore(collection) {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = projectFirestore.collection(collection)

    function addDocument(doc) {

    }

    function deleteDocument(id) {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }
}