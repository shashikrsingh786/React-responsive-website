
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Services  from './components/pages/Services';
import  Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
  





  function App() {
  
    useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    }, []);
    
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
