import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import About from './pages/About';

import Header from './components/Header';
import Contact from './pages/Contact';



export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}
