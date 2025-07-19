import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Landing from "./pages/Landing"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: "coctail",
          element: <Layout />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
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
