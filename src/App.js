import './App.css';
import {useLogout} from "./hooks/useLogout";
import {useSignup} from "./hooks/useSignup";
import {useFirestore} from "./hooks/useFirestore";
import {useAuthContext} from "./hooks/useAuthContext";
import LoginPage from "./features/Auth/pages/LoginPage";
import SignUpPage from "./features/Auth/pages/SignUpPage";



function App() {
    const {logout} = useLogout()
    const {error, loading, signup} = useSignup()
    const {addDocument, response} = useFirestore('users')
    const {user} = useAuthContext()

    const handleAddUsers = () => {
        addDocument({uid: user, name: 'John Doe', age: 30})
    }

    return (
        <div className="App">
            <SignUpPage/>
            <br/>
            <button onClick={logout}>Log out</button>
            {user ? null : <LoginPage/>}
            <br/>
            <button onClick={handleAddUsers}>Add users</button>
        </div>
    );
}

export default App;
