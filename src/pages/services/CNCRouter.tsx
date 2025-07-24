// src/pages/services/CNCRouter.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Settings } from 'lucide-react';

const CNCRouter: React.FC = () => {
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan jasa CNC Router untuk cutting MDF. Bisa konsultasi gratis?");
    const phoneNumber = "6281234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const painPoints = [
    "Hasil potong manual yang tidak presisi dan bergelombang",
    "Waktu pengerjaan lama karena proses cutting konvensional",
    "Biaya tambahan untuk finishing akibat hasil yang kasar"
  ];

  const solutions = [
    "Teknologi CNC Router dengan presisi 0.1mm untuk hasil sempurna",
    "Proses otomatis yang 10x lebih cepat dari metode manual",
    "Hasil siap pakai tanpa perlu finishing tambahan"
  ];

  const materials = ['MDF', 'Kayu Lapis', 'Multiplex', 'Particle Board', 'Acrylic'];

  const portfolio = [
    {
      title: 'Furniture Custom MDF',
      image: 'https://images.pexels.com/photos/5974402/pexels-photo-5974402.jpeg',
      description: 'Cutting presisi untuk komponen furniture'
    },
    {
      title: 'Signage Acrylic',
      image: 'https://images.pexels.com/photos/7937653/pexels-photo-7937653.jpeg',
      description: 'Cutting bentuk kompleks untuk signage'
    },
    {
      title: 'Dekorasi Interior',
      image: 'https://images.pexels.com/photos/5974401/pexels-photo-5974401.jpeg',
      description: 'Panel dekoratif dengan detail presisi'
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
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <span className="text-orange-300 font-semibold">CNC Router</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Potong Presisi MDF dengan CNC Router
              </h1>
              
              {/* Teks deskripsi panjang (bagus buat SEO) */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-blue-100 leading-relaxed">
                  Menghadapi tantangan dalam memotong MDF dan material kayu dengan presisi tinggi? 
                  Metode cutting manual sering menghasilkan tepi yang kasar, tidak akurat, dan membutuhkan 
                  waktu pengerjaan yang lama. Hal ini tentu merugikan dari segi biaya dan kualitas hasil akhir.
                </p>
                <p className="text-xl text-blue-100 leading-relaxed">
                  TepatLaser menghadirkan solusi CNC Router canggih yang memberikan hasil cutting 
                  presisi hingga 0.1mm. Teknologi otomatis kami memastikan setiap potongan sempurna, 
                  konsisten, dan siap pakai tanpa finishing tambahan. Tim profesional berpengalaman 
                  10+ tahun siap mengerjakan proyek Anda dengan cepat dan akurat.
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
                src="cnc.webp" 
                alt="Mesin CNC Router TepatLaser"
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
              Masalah yang Sering Dihadapi
            </h2>
            <p className="text-xl text-gray-600">
              Tantangan umum dalam cutting MDF dan material kayu
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
              Solusi TepatLaser
            </h2>
            <p className="text-xl text-gray-600">
              Teknologi CNC Router untuk hasil cutting yang sempurna
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
                src="https://images.pexels.com/photos/5974403/pexels-photo-5974403.jpeg" 
                alt="Hasil potong CNC Router pada MDF"
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
              Portfolio Hasil Kerja
            </h2>
            <p className="text-xl text-gray-600">
              Contoh hasil cutting CNC Router dengan kualitas premium
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
                  <div className="mt-4 text-sm text-orange-600 font-medium">
                    Mesin: CNC Router
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
            Butuh Cutting MDF yang Presisi?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Konsultasikan proyek cutting MDF Anda dengan tim ahli CNC Router kami. 
            Dapatkan penawaran terbaik dan hasil yang memuaskan!
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

export default CNCRouter;