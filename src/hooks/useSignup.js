import {useState} from 'react'
import {projectAuth} from "../firebase/config"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setLoading(true)

        try {
            const response = await createUserWithEmailAndPassword(projectAuth, email, password)

            if (!response) {
                throw new Error('Could not complete the signup process')
            }

            await updateProfile(response.user, {displayName})
        } catch (err) {
            console.error('Error signing up', err.message)
            setError(err.message)
        }
        setLoading(false)
    }

    return {error, loading, signup}
}
