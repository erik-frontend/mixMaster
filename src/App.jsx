import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
