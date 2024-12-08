import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import MovieDetails from "../pages/MovieDetails";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UpdateMovie from "../pages/UpdateMovie";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/top-rated-movies')
        },
        {
          path: "/all-movie",
          element: <AllMovies></AllMovies>,
          loader: () => fetch('http://localhost:5000/movies')
        },
        {
          path: "/add-movie",
          element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/update-movie/:id",
          element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
          loader:  ({ params }) =>  fetch(`http://localhost:5000/movies/${params.id}`).then(res => res.json()),
                  
        },
        {
          path: "/movie-details/:id",
          element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
          loader: ({params}) =>
             fetch(`http://localhost:5000/movies/${params.id}`),
            
          
        },
        
        {
          path: "/my-favorites",
          element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>,
          
        },
        
       
        
        {
          path: "/auth",
          element: <AuthLayouts></AuthLayouts>,
          children: [
            {
              path: "/auth/login",
              element: <Login></Login>
            },
            {
              path: "/auth/register",
              element: <Register></Register>,
            },
          ]
        }
        
      ]
    },
  ]);
export default router;