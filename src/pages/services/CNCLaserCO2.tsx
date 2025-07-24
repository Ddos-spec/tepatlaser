// src/pages/services/CNCLaserCO2.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const CNCLaserCO2: React.FC = () => {
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan jasa CNC Laser CO₂ untuk cutting PVC. Bisa konsultasi gratis?");
    const phoneNumber = "6281234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const painPoints = [
    "Hasil potong PVC yang meleleh dan tepi tidak rapi",
    "Kesulitan cutting bentuk kompleks dengan presisi tinggi",
    "Proses manual yang lambat dan tidak konsisten"
  ];

  const solutions = [
    "Laser CO₂ dengan kontrol suhu optimal untuk cutting tanpa leleh",
    "Presisi hingga 0.05mm untuk bentuk detail dan kompleks",
    "Proses otomatis yang cepat dengan konsistensi sempurna"
  ];

  const materials = ['PVC', 'Acrylic', 'Kayu', 'Karet', 'Foam', 'Karton'];

  const portfolio = [
    {
      title: 'Signage PVC Premium',
      image: 'https://images.pexels.com/photos/5974401/pexels-photo-5974401.jpeg',
      description: 'Cutting PVC dengan detail presisi tinggi'
    },
    {
      title: 'Display Acrylic',
      image: 'https://images.pexels.com/photos/7937653/pexels-photo-7937653.jpeg',
      description: 'Potongan acrylic dengan finishing sempurna'
    },
    {
      title: 'Prototype Plastik',
      image: 'https://images.pexels.com/photos/5974402/pexels-photo-5974402.jpeg',
      description: 'Cutting presisi untuk prototype produk'
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
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="text-orange-300 font-semibold">CNC Laser CO₂</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Cutting PVC Presisi dengan Laser CO₂
              </h1>
              
              {/* Teks deskripsi panjang (bagus buat SEO) */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-blue-100 leading-relaxed">
                  Pemotongan PVC konvensional sering menghasilkan tepi yang meleleh, tidak rata, 
                  dan membutuhkan finishing tambahan yang menambah biaya. Apalagi untuk bentuk 
                  kompleks dan detail halus, metode manual sangat sulit menghasilkan presisi yang diinginkan.
                </p>
                <p className="text-xl text-blue-100 leading-relaxed">
                  TepatLaser menggunakan teknologi CNC Laser CO₂ canggih dengan parameter suhu 
                  dan kecepatan yang optimal khusus untuk PVC. Hasil cutting bersih tanpa leleh, 
                  tepi yang halus, dan siap pakai tanpa finishing tambahan. Cocok untuk berbagai 
                  aplikasi dari signage hingga komponen industri.
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
                src="co2.webp" 
                alt="Mesin CNC Laser CO₂ TepatLaser"
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
              Tantangan Cutting PVC
            </h2>
            <p className="text-xl text-gray-600">
              Masalah umum dalam pemotongan material PVC dan plastik
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
              Keunggulan Laser CO₂
            </h2>
            <p className="text-xl text-gray-600">
              Teknologi terdepan untuk cutting material non-metal
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
                <div className="flex flex-wrap gap-3">
                  {materials.map((material, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/7587209/pexels-photo-7587209.jpeg" 
                alt="Hasil potong Laser CO₂ pada acrylic"
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
            <h2 className="text-3xl md-text-4xl font-bold text-gray-900 mb-4">
              Contoh Hasil Kerja
            </h2>
            <p className="text-xl text-gray-600">
              Portfolio cutting dengan teknologi Laser CO₂
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
                  <div className="mt-4 text-sm text-blue-600 font-medium">
                    Mesin: CNC Laser CO₂
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
            Butuh Cutting PVC yang Presisi?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Konsultasikan kebutuhan cutting PVC dan material non-metal lainnya. 
            Dapatkan hasil sempurna dengan teknologi Laser CO₂ terdepan!
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

export default CNCLaserCO2;