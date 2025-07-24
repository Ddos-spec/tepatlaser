// src/pages/services/CNCLaserFiber.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Layers } from 'lucide-react';

const CNCLaserFiber: React.FC = () => {
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan jasa CNC Laser Fiber untuk cutting metal. Bisa konsultasi gratis?");
    const phoneNumber = "6281234567890";
    window.open(`https.wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const painPoints = [
    "Cutting ACP manual merusak lapisan aluminium dan core",
    "Hasil tidak presisi dan rentan korosi pada bagian potong",
    "Waktu pengerjaan lama dengan biaya operasional tinggi"
  ];

  const solutions = [
    "Laser Fiber Metal yang memotong tanpa merusak struktur material",
    "Seal sempurna yang tahan cuaca untuk aplikasi indoor/outdoor",
    "Proses cepat dengan hasil industrial grade yang presisi"
  ];

  const materials = ['ACP (Aluminium Composite Panel)', 'Stainless Steel', 'Aluminium', 'Mild Steel', 'Galvanized Steel'];

  const portfolio = [
    {
      title: 'Fasad ACP Building',
      image: 'https://images.pexels.com/photos/7937653/pexels-photo-7937653.jpeg',
      description: 'Cutting ACP untuk fasad gedung modern'
    },
    {
      title: 'Panel Stainless Steel',
      image: 'https://images.pexels.com/photos/5974402/pexels-photo-5974402.jpeg',
      description: 'Potongan presisi stainless untuk industri'
    },
    {
      title: 'Komponen Aluminium',
      image: 'https://images.pexels.com/photos/7587209/pexels-photo-7587209.jpeg',
      description: 'Cutting aluminium untuk komponen mesin'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <span className="text-orange-300 font-semibold">CNC Laser Fiber Metal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Cutting Metal & ACP dengan Laser Fiber
              </h1>
              
              {/* Teks deskripsi panjang (bagus buat SEO) */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-blue-100 leading-relaxed">
                  Cutting ACP dan material metal konvensional berisiko merusak lapisan aluminium, 
                  mengakibatkan hasil yang tidak presisi, bergelombang, dan rentan korosi. 
                  Metode manual juga membutuhkan waktu lama dengan hasil yang tidak konsisten.
                </p>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Teknologi CNC Laser Fiber Metal TepatLaser memotong ACP dan material metal 
                  dengan presisi tinggi tanpa merusak struktur. Menghasilkan tepi yang seal 
                  sempurna, tahan cuaca, dan cocok untuk aplikasi eksterior maupun interior. 
                  Ideal untuk fasad gedung, panel industri, dan komponen presisi.
                </p>
              </div>

              {/* Tombol dibagi dua */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <button 
                  onClick={handleConsultation}
                  className="btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full"
                >
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link 
                  to="/produk"
                  className="font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <span>Lihat Produk</span>
                </Link>
              </div>
            </div>

            <div className="lg:pl-12">
              {/* GAMBAR MESIN BARU + OPTIMASI */}
              <img 
                src="/fibermetal.webp" 
                alt="Mesin CNC Laser Fiber Metal TepatLaser"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tantangan Cutting Metal
            </h2>
            <p className="text-xl text-gray-600">
              Masalah umum dalam pemotongan ACP dan material metal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Laser Fiber
            </h2>
            <p className="text-xl text-gray-600">
              Teknologi cutting metal paling canggih untuk hasil industrial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Material yang Dilayani:</h3>
                <div className="space-y-2">
                  {materials.map((material, index) => (
                    <div key={index} className="px-4 py-2 bg-gray-100 rounded-lg">
                      <span className="font-medium text-gray-800">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/5974402/pexels-photo-5974402.jpeg" 
                alt="Hasil potong Laser Fiber pada metal"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Metal Cutting
            </h2>
            <p className="text-xl text-gray-600">
              Hasil cutting metal dengan standar industri tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="mt-4 text-sm text-purple-600 font-medium">
                    Mesin: CNC Laser Fiber Metal
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Cutting ACP atau Metal Presisi?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Konsultasikan proyek cutting metal Anda dengan tim ahli Laser Fiber kami. 
            Dapatkan hasil industrial grade yang tahan lama!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-lg mx-auto">
            <button 
              onClick={handleConsultation}
              className="btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full"
            >
              <span>Konsultasi Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link 
              to="/produk"
              className="font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full border-2 border-white text-white hover:bg-white hover:text-orange-500 transition-colors"
            >
              <span>Lihat Produk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CNCLaserFiber;