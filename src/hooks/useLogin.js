import {useAuthContext} from "./useAuthContext";
import {useEffect, useRef, useState} from "react";
import {projectAuth} from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth";

export const useLogin = () => {
    const {dispatch} = useAuthContext()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const isCancelled = useRef(false)


    const login = async (username, password, displayName) => {
        setError(null)
        setLoading(true)
        try {
            // This async call can be cancelled if the component is unmounted
            // The response might not be returned before the component is unmounted
            const response = await signInWithEmailAndPassword(projectAuth, username, password)
            dispatch({type: 'LOGIN', payload: response.user})
        } catch (err) {
            if (isCancelled.current) return
            console.error('Error logging in', err.message)
            setError(err.message)
        }

        if (isCancelled.current) return

        setError(null)
        setLoading(false)
    }

    useEffect(() => {
        // This is called when the component is unmounted
        return () => {
            debugger
            isCancelled.current = true
        }
    }, []);

    return {login, error, loading}
}
