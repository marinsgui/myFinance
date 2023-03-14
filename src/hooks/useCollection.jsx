import { useState, useEffect, useRef } from 'react'
import { projectFirestore } from '../firebase/config'

export default function useCollection(collection, _query, _orderBy) {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        if(query) {
            ref = ref.where(...query)
        }

        if(orderBy) {
            ref = ref.orderBy(...orderBy)
        }

        const unsub = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach((doc) => {
                results.push({ ...doc.data(), id: doc.id })
            })

            setDocuments(results)
            setError(null)
        })

        return () => unsub()
    }, [collection, query])

    return { documents, error }
}