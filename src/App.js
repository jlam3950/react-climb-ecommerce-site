import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Gear from "./components/Gear";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Favorites from "./components/Favorites";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
     <div className = 'App d-flex flex-column min-vh-100'>
        <Navbar />
          <Routes>
            <Route path = "/" element={<Homepage />}></Route>
            <Route path = "about" element={<About />}></Route>
            <Route path = "contact" element={<Contact />}></Route>
            <Route path = "gear" element={<Gear />}></Route>
            <Route path = "checkout" element={<Checkout />}></Route>
            <Route path = "favorites" element={<Favorites />}></Route>
          </Routes>
        <Footer />
      </div>
  ); 
}

export default App;
