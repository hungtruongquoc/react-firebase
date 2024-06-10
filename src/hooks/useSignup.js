import {useEffect, useState} from 'react'
import {projectAuth} from "../firebase/config"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {useAuthContext} from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const {dispatch} = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setLoading(true)

        try {
            const response = await createUserWithEmailAndPassword(projectAuth, email, password)

            if (!response) {
                throw new Error('Could not complete the signup process')
            }

            await updateProfile(response.user, {displayName})

            dispatch({type: 'LOGIN', payload: response.user})
        } catch (err) {
            if (isCancelled) return
            console.error('Error signing up', err.message)
            setError(err.message)
        }

        if (isCancelled) return
        setLoading(false)
    }

    useEffect(() => {
        // This is called when the component is unmounted
        return () => {
            debugger
            setIsCancelled(true)
        }
    }, []);

    return {error, loading, signup}
}
