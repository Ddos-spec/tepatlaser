import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronDown, Zap, Settings, Layers, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Efek ini buat nutup semua menu pas pindah halaman
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Efek buat shadow di navbar pas scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efek buat nutup dropdown kalo klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { name: 'Mesin CNC Router', path: '/jasa/cnc-router', icon: Settings },
    { name: 'Mesin CNC Laser CO₂', path: '/jasa/cnc-laser-co2', icon: Zap },
    { name: 'Mesin CNC Laser Fiber Metal', path: '/jasa/cnc-laser-fiber', icon: Layers },
    { name: 'Mesin Galvo 30W (Laser Engraving)', path: '/jasa/galvo-engraving', icon: Sparkles },
  ];

  // Fungsi buat render link menu, sekarang lebih simpel
  const renderLinks = () => (
    <>
      <Link
        to="/"
        className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm ${
          location.pathname === '/'
            ? 'text-orange-500 bg-orange-50 font-semibold'
            : 'text-gray-700 hover:text-orange-500'
        }`}
      >
        <Home className="w-4 h-4" />
        <span>Beranda</span>
      </Link>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(prev => !prev)}
          className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm text-gray-700 hover:text-orange-500"
        >
          <span>Jasa Cutting</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-lg shadow-lg border z-10">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  to={service.path}
                  className="flex items-center space-x-3 px-4 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{service.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <Link
        to="/produk"
        className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm ${
          location.pathname === '/produk'
            ? 'text-orange-500 bg-orange-50 font-semibold'
            : 'text-gray-700 hover:text-orange-500'
        }`}
      >
        <span>Produk</span>
      </Link>

      <Link
        to="/blog"
        className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm ${
          location.pathname.startsWith('/blog')
            ? 'text-orange-500 bg-orange-50 font-semibold'
            : 'text-gray-700 hover:text-orange-500'
        }`}
      >
        <span>Blog</span>
      </Link>
    </>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'navbar-shadow' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Tampilan ini sekarang dipake buat SEMUA ukuran layar --- */}
        <div className="flex flex-col items-center py-3">
          {/* Logo di tengah atas */}
          <Link to="/" className="flex items-center space-x-2 mb-2">
            <img src="/Logo.webp" alt="TepatLaser Logo" className="h-9 w-auto" />
            <span className="text-2xl font-bold text-gradient">TepatLaser</span>
          </Link>
          {/* Menu di bawah logo, bisa wrap kalo ga muat */}
          <div className="flex items-center justify-center flex-wrap">
            {renderLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;