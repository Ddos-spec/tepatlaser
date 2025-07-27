// src/App.tsx (VERSI FINAL YANG SUDAH DIPERBAIKI)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import CNCRouter from './pages/services/CNCRouter';
import CNCLaserCO2 from './pages/services/CNCLaserCO2';
import CNCLaserFiber from './pages/services/CNCLaserFiber';
import GalvoEngraving from './pages/services/GalvoEngraving';
import Products from './pages/Products';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import MDF from './pages/material/MDF';
import GRC from './pages/material/GRC';
import PVC from './pages/material/PVC';
import ACP from './pages/material/ACP';
import StainlessSteel from './pages/material/StainlessSteel';
import Plywood from './pages/material/Plywood';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jasa/cnc-router" element={<CNCRouter />} />
            <Route path="/jasa/cnc-laser-co2" element={<CNCLaserCO2 />} />
            <Route path="/jasa/cnc-laser-fiber" element={<CNCLaserFiber />} />
            <Route path="/jasa/galvo-engraving" element={<GalvoEngraving />} />
            <Route path="/material/mdf" element={<MDF />} />
            <Route path="/material/grc" element={<GRC />} />
            <Route path="/material/pvc" element={<PVC />} />
            <Route path="/material/acp" element={<ACP />} />
            <Route path="/material/stainless-steel" element={<StainlessSteel />} />
            <Route path="/material/plywood" element={<Plywood />} />
            <Route path="/produk" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;