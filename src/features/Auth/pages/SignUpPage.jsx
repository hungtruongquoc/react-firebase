import { useSignup } from '../../../hooks/useSignup'
import SignUpForm from '../../../components/forms/SignUpForm'
import React from 'react'

export default () => {
    const { signup, error, loading } = useSignup()
    return (
        <>
            <h1>Sign Up Form</h1>
            <SignUpForm
                onSubmit={signup}
                error={error}
                loading={loading}
                submitButtonText={'Sign Up'}
            />
        </>
    )
}
