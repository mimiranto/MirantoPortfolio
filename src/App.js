import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Utilisez Routes au lieu de Switch
import Header from './component/header/index';
import Presentation from './component/presentation';
import Projet from './component/projet';
import Footer from './component/Footer';
import MaNouvellePage from './component/cv';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ma-nouvelle-page" element={<MaNouvellePage />} />
          <Route path="/" element={<>
            <Header />
            <Presentation />
            <Projet />
            <Footer />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
