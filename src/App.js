import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Gear from "./components/Gear";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
     <div className = 'App'>
        <Navbar />
          <Routes>
            <Route path = "/" element={<Homepage />}></Route>
            <Route path = "about" element={<About />}></Route>
            <Route path = "contact" element={<Contact />}></Route>
            <Route path = "gear" element={<Gear />}></Route>
          </Routes>
      </div>
  ); 
}

export default App;
