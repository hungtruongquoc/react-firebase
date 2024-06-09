import {projectFirestore, timestamp} from "../firebase/config";
import {useReducer, useEffect, useState} from "react";
import {collection, addDoc} from "firebase/firestore";

let initialState = {
    doc: null,
    error: null,
    loading: false,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return {doc: null, success: false, error: null, loading: true}
        case 'ADDED_DOC':
            return {loading: false, success: true, doc: action.payload, error: null}
        case 'ERROR':
            return {error: action.payload, loading: false, doc: null, success: false}
        default:
            return state
    }
}

export const useFirestore = (users) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = collection(projectFirestore, 'users')

    const addDocument = async (doc) => {
        dispatch({type: 'IS_LOADING'})
        debugger
        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDoc = await addDoc(ref, {...doc, createdAt})
            if (isCancelled) return
            dispatch({type: 'ADDED_DOC', payload: addedDoc})
        }
        catch (error) {
            if (isCancelled) return
            dispatch({type: 'ERROR', payload: error.message})
        }
    }

    const deleteDocument = (id) => {

    }

    useEffect(() => {
        // This is called when the component is unmounted
        return () => {
            setIsCancelled(true)
        }
    }, []);

    return {addDocument, deleteDocument, response}
}
