import Navbar from "./components/Navbar"
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import { Outlet } from "react-router-dom";


function App() {



  return (
    <>
      <Navbar />

      <Outlet />


    </>
  )
}

export default App
