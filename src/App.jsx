import Register from "./routes/Register/Register.jsx";
import HomePage from "./routes/HomePage/HomePage.jsx"
import {Layout,  RequiredAuth } from "./routes/Layout/Layout.jsx";
import ListPage from "./routes/ListPage/ListPage.jsx"
import Login from "./routes/Login/Login.jsx";
import ProfilePage from "./routes/ProfilePage/ProfilePage.jsx";
import SinglePage from "./routes/SinglePage/SinglePage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage.jsx";
import NewPostPage from "./routes/NewPostPage/NewPostPage.jsx";
import { ListPageLoader, ProfilePageLoader, singlePageLoader } from "./lib/loaders.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />,
          loader :ListPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader  :singlePageLoader
        },

        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    }, 

    {

      path: "/",
      element:
        <RequiredAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />, 
          loader : ProfilePageLoader
        },
        {
          path: "/add",
          element: <NewPostPage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },

        
      ]
    }

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App