import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import Booking from "./Pages/Booking";
import Blog from "./Pages/Blog";
import Tnc from "./Pages/Tnc";
import Form from "./Components/Contact/Form";
import Notfound from './Components/NotFound/Notfound';
import AddSpace from "./Pages/AddSpace";
import About from "./Pages/About";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" excat element={<Home />} />
          <Route path="/about" excat element={<About />} />
          <Route path="/book" excat element={<Booking />} />
          <Route path="/add" excat element={<AddSpace />} />
          <Route path="/blogs" excat element={<Blog />} />
          <Route path="/contact" excat element={<Form />} />
          <Route path="/tnc" excat element={<Tnc />} />
          <Route path="*" excat element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
