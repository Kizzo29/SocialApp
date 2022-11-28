import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import "./style.scss";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'


function App() {

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);


  const Layout = () =>{
    return(
      <QueryClientProvider>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <NavBar/>
      <div style={{display: "flex"}}>
      <LeftBar/>
      <div style={{flex: 6}}>
      <Outlet/>
      </div>
      <RightBar/>
      </div>
      </div></QueryClientProvider>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login'/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
      <ProtectedRoute>
      <Layout/>
      </ProtectedRoute>),
      children:[
        {
          path:'/',
          element: <Home/>,
        },

        {
          path:'/profile/:id',
          element: <Profile/>,

        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
