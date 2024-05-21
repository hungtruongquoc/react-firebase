import {useState} from 'react';
import {projectAuth} from "../firebase/config";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const signup = async (email, password, displayName) => {
        setError(null);
        setLoading(true);

        try {
            await projectAuth.createUserWithEmailAndPassword(email, password);
        } catch (err) {
            console.error('Error signing up', err.message)
            setError(err.message);
        }
        setLoading(false);
    }

    return {error, loading, signup};
}
