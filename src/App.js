import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Our-Services/Services.jsx';
import Contact from './pages/Contact-us/Contact.jsx';
import Clients from './pages/OurClients/Clients.jsx';

import Header from './components/Header/Header.jsx';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<Services/>}/>
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/clients" element={<Clients/>} />
      </Routes>
    </>

  );
}

export default App;
