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