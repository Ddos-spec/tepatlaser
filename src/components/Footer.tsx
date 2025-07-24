import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'; // Zap dihapus karena tidak digunakan

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Logo.webp" alt="TepatLaser Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold">TepatLaser</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Solusi terpercaya untuk jasa laser cutting presisi tinggi di seluruh Indonesia. 
              Kami menggunakan teknologi CNC terdepan untuk hasil yang sempurna setiap saat.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">+62 851-6569-3179</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">info@tepatlaser.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jasa/cnc-router" className="text-gray-300 hover:text-orange-500 transition-colors">
                  CNC Router
                </Link>
              </li>
              <li>
                <Link to="/jasa/cnc-laser-co2" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Laser CO₂
                </Link>
              </li>
              <li>
                <Link to="/jasa/cnc-laser-fiber" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Laser Fiber Metal
                </Link>
              </li>
              <li>
                <Link to="/jasa/galvo-engraving" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Galvo Engraving
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/produk" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 TepatLaser. All rights reserved.
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;