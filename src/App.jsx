import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./routes/Home"
import { AiOutlineClose } from "react-icons/ai";
import TopNav from "./components/TopNav";
import Header from "./components/Home/Header";
import Footer from "./components/Footer";
import SingleProject from "./routes/SingleProject";
import AboutUs from "./routes/AboutUs";
import Projects from "./routes/Projects";

function App() {
  
  return (
    <div className="App relative">
      <Router>
        <header className="max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
          <TopNav />
        </header>
        <Routes>
          <Route
              exact path='/'
              element={
                <Home  />
              }
          />
          <Route
              path="/project/:id"
              element={<SingleProject />}
          />
          <Route
              path="/about_us/"
              element={<AboutUs />}
          />
          <Route
              path="/projects/"
              element={<Projects />}
          />
        </Routes>
        <footer>
        <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App
