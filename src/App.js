import './App.css';
import {useFirestore} from "./hooks/useFirestore";
import {useAuthContext} from "./hooks/useAuthContext";
import LoginPage from "./features/Auth/pages/LoginPage";
import SignUpPage from "./features/Auth/pages/SignUpPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/signup",
        element: <SignUpPage/>,
    },
]);

function App() {
    const {addDocument, response} = useFirestore('users')
    const {user} = useAuthContext()

    const handleAddUsers = () => {
        addDocument({uid: user.uid, name: 'John Doe', age: 30})
    }

    return (
        <div className="App">
            <RouterProvider router={router}/>
            <button onClick={handleAddUsers}>Add users</button>
        </div>
    );
}

export default App;
