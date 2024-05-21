import './App.css';
import SignUpForm from "./components/forms/SignUpForm";
import {useLogout} from "./hooks/useLogout";

function App() {
    const {logout} = useLogout()

    return (
        <div className="App">
            <h1>Sign Up Form</h1>
            <SignUpForm />
            <button onClick={logout}>Log out</button>
        </div>
  );
}

export default App;
