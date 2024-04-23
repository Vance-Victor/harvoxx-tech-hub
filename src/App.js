import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav  from './Components/Nav';
import './App.css';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Services from './Components/Services';
import Contact from './Components/Contact';

export default function App() {
  return (
    <section>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </section>
    
  );
}

