import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Landing from "./pages/Landing"
import {loader as landingLoader} from "./pages/Landing"
import Coctail from "./pages/Coctail"
import SinglePageError from "./pages/SinglePageError"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <SinglePageError/>
        },
        {
          path: "coctail/:id",
          element: <Coctail />,
          errorElement: <SinglePageError/>
        },
        {
          path: "about",
          element: <About />,
          errorElement: <SinglePageError/>
        },
        {
          path: "contact",
          element: <Contact />,
          errorElement: <SinglePageError/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
