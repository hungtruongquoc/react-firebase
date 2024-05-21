import './App.css';
import SignUpForm from "./components/forms/SignUpForm";
import {useLogout} from "./hooks/useLogout";
import {useLogin} from "./hooks/useLogin";
import {useSignup} from "./hooks/useSignup";

function App() {
    const {logout} = useLogout()
    const {login, error: loginError, loading: loginLoading} = useLogin()
    const {error, loading, signup} = useSignup()

    return (
        <div className="App">
            <h1>Sign Up Form</h1>
            <SignUpForm onSubmit={signup} error={error} loading={loading} submitButtonText={"Sign Up"} />
            <SignUpForm onSubmit={login} error={loginError} loading={loginLoading} submitButtonText={"Login"} />
            <button onClick={logout}>Log out</button>
            <button onClick={login}>Login</button>
        </div>
  );
}

export default App;
