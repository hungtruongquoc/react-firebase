import {useLogin} from "../../../hooks/useLogin";
import SignUpForm from "../../../components/forms/SignUpForm";

export default () => {
    const {login, error: loginError, loading: loginLoading} = useLogin()
    return (
        <>
            <h1>Login Form</h1>
            <SignUpForm
                onSubmit={login}
                error={loginError}
                loading={loginLoading}
                submitButtonText={"Login"}
            />
        </>
    )
};
