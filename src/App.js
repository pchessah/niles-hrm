import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Header from './components/Header/Header.jsx';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>

  );
}

export default App;
