import { useLogin } from '../../../hooks/useLogin'
import React from 'react'
import SignInForm from '../../../components/forms/SignInForm'

export default () => {
    const { login, error: loginError, loading: loginLoading } = useLogin()
    return (
        <>
            <h1>Login Form</h1>
            <SignInForm
                onSubmit={login}
                error={loginError}
                loading={loginLoading}
                submitButtonText={'Login'}
            />
        </>
    )
}
