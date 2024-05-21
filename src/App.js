import './App.css';
import SignUpForm from "./components/forms/SignUpForm";
import {useLogout} from "./hooks/useLogout";
import {useLogin} from "./hooks/useLogin";
import {useSignup} from "./hooks/useSignup";
import {useFirestore} from "./hooks/useFirestore";
import {useAuthContext} from "./hooks/useAuthContext";

function App() {
    const {logout} = useLogout()
    const {login, error: loginError, loading: loginLoading} = useLogin()
    const {error, loading, signup} = useSignup()
    const {addDocument, response} = useFirestore('users')
    const {user} = useAuthContext()

    const handleAddUsers = () => {
        addDocument({uid: user, name: 'John Doe', age: 30})
    }

    return (
        <div className="App">
            <h1>Sign Up Form</h1>
            <SignUpForm onSubmit={signup} error={error} loading={loading} submitButtonText={"Sign Up"} />
            <br/>
            <button onClick={logout}>Log out</button>
            <h1>Login Form</h1>
            <SignUpForm onSubmit={login} error={loginError} loading={loginLoading} submitButtonText={"Login"} />
            <br/>
            <button onClick={handleAddUsers}>Add users</button>
        </div>
  );
}

export default App;
