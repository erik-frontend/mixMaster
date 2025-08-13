import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Landing from "./pages/Landing"
import {loader as landingLoader} from "./pages/Landing"
import {loader as singleCoctailLoader} from "./pages/Coctail"
import Coctail from "./pages/Coctail"
import SinglePageError from "./pages/SinglePageError"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

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
          loader: landingLoader(queryClient),
          errorElement: <SinglePageError/>
        },
        {
          path: "coctail/:id",
          element: <Coctail />,
          errorElement: <SinglePageError/>,
          loader: singleCoctailLoader(queryClient),
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
