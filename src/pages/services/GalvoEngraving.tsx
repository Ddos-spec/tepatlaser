// src/pages/services/GalvoEngraving.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';

const GalvoEngraving: React.FC = () => {
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan jasa Galvo Engraving 30W. Bisa konsultasi gratis?");
    const phoneNumber = "6281234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const painPoints = [
    "Engraving manual lambat dan hasil tidak konsisten",
    "Sulit mencapai detail kompleks dengan resolusi tinggi",
    "Produksi massal memakan waktu sangat lama"
  ];

  const solutions = [
    "Galvo 30W untuk engraving detail hingga resolusi ultra tinggi",
    "Proses otomatis yang konsisten untuk setiap produk",
    "Kecepatan produksi massal dengan kualitas identik"
  ];

  const materials = ['Kayu', 'Acrylic', 'Metal', 'Kulit', 'Plastik', 'Karet'];
  
  const applications = [
    'Trophy & Plakat',
    'Nama Dada & ID Card',
    'Souvenir Personal',
    'Branding Produk',
    'Marking Industri',
    'Personalisasi Gift'
  ];

  const portfolio = [
    {
      title: 'Trophy Acrylic Custom',
      image: 'https://images.pexels.com/photos/5974403/pexels-photo-5974403.jpeg',
      description: 'Engraving presisi untuk trophy dan awards'
    },
    {
      title: 'Branding Produk Kayu',
      image: 'https://images.pexels.com/photos/7587209/pexels-photo-7587209.jpeg',
      description: 'Logo engraving untuk produk wooden craft'
    },
    {
      title: 'Name Tag Metal',
      image: 'https://images.pexels.com/photos/5974401/pexels-photo-5974401.jpeg',
      description: 'Engraving nama untuk keperluan corporate'
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
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="text-orange-300 font-semibold">Galvo Laser Engraving</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Engraving Presisi dengan Galvo 30W
              </h1>
              
              {/* Teks deskripsi panjang (bagus buat SEO) */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-blue-100 leading-relaxed">
                  Proses engraving manual memakan waktu lama, hasil tidak konsisten antar produk, 
                  dan sulit mencapai detail kompleks terutama untuk produksi dalam jumlah besar. 
                  Hal ini menjadi kendala utama dalam memenuhi deadline dan standar kualitas.
                </p>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Mesin Galvo 30W TepatLaser memberikan hasil engraving yang konsisten dan detail 
                  hingga resolusi ultra tinggi. Proses otomatis memungkinkan produksi massal dengan 
                  kualitas identik dan waktu pengerjaan yang sangat efisien. Cocok untuk trophy, 
                  branding produk, dan personalisasi dalam skala besar.
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
                src="/galvo.webp" 
                alt="Mesin Galvo Engraving TepatLaser"
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
              Tantangan Engraving Tradisional
            </h2>
            <p className="text-xl text-gray-600">
              Masalah umum dalam proses engraving dan personalisasi
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
              Keunggulan Galvo Engraving
            </h2>
            <p className="text-xl text-gray-600">
              Teknologi engraving terdepan untuk hasil professional
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {materials.map((material, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-medium text-center"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/7937653/pexels-photo-7937653.jpeg" 
                alt="Hasil engraving presisi dengan Galvo"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplikasi Galvo Engraving
            </h2>
            <p className="text-xl text-gray-600">
              Berbagai keperluan engraving untuk bisnis dan personal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{app}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Engraving
            </h2>
            <p className="text-xl text-gray-600">
              Contoh hasil engraving dengan kualitas professional
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
                    Mesin: Galvo 30W Engraving
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
            Butuh Engraving Berkualitas Tinggi?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Konsultasikan kebutuhan engraving Anda dengan tim ahli Galvo kami. 
            Dapatkan hasil detail dan konsisten untuk semua proyek!
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

export default GalvoEngraving;