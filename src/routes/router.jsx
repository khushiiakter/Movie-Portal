import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/all-movie",
          element: <AllMovies></AllMovies>,
        },
        {
          path: "/add-movie",
          element: <AddMovie></AddMovie>,
        },
        {
          path: "/my-favorites",
          element: <MyFavorites></MyFavorites>,
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