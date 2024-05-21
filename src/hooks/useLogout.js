import {useAuthContext} from "./useAuthContext";
import {useEffect, useState} from "react";
import {projectAuth} from "../firebase/config";
import {signOut} from "firebase/auth";

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)


    const logout = async () => {
        setError(null)
        setLoading(true)
        try {
            // This async call can be cancelled if the component is unmounted
            // The response might not be returned before the component is unmounted
            await signOut(projectAuth)
            dispatch({type: 'LOGOUT'})
        } catch (err) {
            if (isCancelled) return
            console.error('Error logging out', err.message)
            setError(err.message)
        }

        if (isCancelled) return

        setError(null)
        setLoading(false)
    }

    useEffect(() => {
        // This is called when the component is unmounted
        return () => {
            setIsCancelled(true)
        }
    }, []);

    return {logout, error, loading}
}
