import Footer from "./components/Footer";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
      <div className=" w-full">
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App
