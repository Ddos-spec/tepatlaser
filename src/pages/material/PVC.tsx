import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Zap } from 'lucide-react';

const PVC: React.FC = () => {
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya ingin konsultasi mengenai jasa cutting laser untuk material PVC. Bisa dibantu?");
    const phoneNumber = "6285165693179";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePriceInquiry = () => {
    const message = encodeURIComponent("Halo, saya ingin mengetahui harga jasa cutting laser untuk material PVC. Bisa minta informasi biayanya?");
    const phoneNumber = "6285165693179";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jasa Cutting Laser PVC
                <span className="block text-orange-400">Presisi Tinggi</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Solusi terpercaya untuk cutting PVC dengan teknologi CNC Laser CO₂. 
                Hasil potongan bersih tanpa leleh untuk signage, display, dan aplikasi komersial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleConsultation}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={handlePriceInquiry}
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Tanya Harga
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/pvc.webp" 
                alt="Signage dari bahan PVC yang dipotong rapi menggunakan Laser CO₂"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang Material PVC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Polyvinyl Chloride (PVC) adalah material plastik serbaguna yang banyak digunakan untuk aplikasi signage, display, dan konstruksi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Karakteristik PVC</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Tahan terhadap cuaca dan UV</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Ringan namun kuat dan tahan lama</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Tersedia dalam berbagai warna dan ketebalan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Mudah dibersihkan dan maintenance rendah</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Aplikasi Umum</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Signage dan papan nama</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Display dan booth pameran</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Partisi dan panel dekoratif</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Komponen industri dan kemasan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi Jasa */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rekomendasi Jasa untuk PVC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berdasarkan karakteristik material PVC, berikut adalah jasa cutting yang paling optimal untuk hasil terbaik.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-600 p-4 rounded-full">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CNC Laser CO₂ - Pilihan Terbaik untuk PVC</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Teknologi CNC Laser CO₂ adalah solusi ideal untuk cutting PVC karena mampu menghasilkan 
                potongan yang bersih tanpa meleleh dengan parameter suhu dan kecepatan yang optimal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tanpa Leleh</h4>
                <p className="text-gray-600 text-sm">Potongan bersih tanpa deformasi material</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Efisien</h4>
                <p className="text-gray-600 text-sm">Proses cepat untuk produksi signage massal</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Shield className="w-8 h-8 text-orange-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Siap Pakai</h4>
                <p className="text-gray-600 text-sm">Hasil langsung siap tanpa finishing tambahan</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/jasa/cnc-laser-co2"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Faktor Penentu Harga */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faktor Penentu Biaya Cutting PVC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harga jasa cutting PVC ditentukan oleh beberapa faktor utama yang mempengaruhi kompleksitas pengerjaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Ketebalan Material</h3>
              <p className="text-gray-600 text-sm">
                PVC tersedia dari 1mm hingga 20mm, mempengaruhi setting laser
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Jenis PVC</h3>
              <p className="text-gray-600 text-sm">
                Rigid, flexible, atau foam PVC memiliki karakteristik berbeda
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Kompleksitas Desain</h3>
              <p className="text-gray-600 text-sm">
                Detail halus dan bentuk rumit memerlukan presisi lebih tinggi
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Volume Produksi</h3>
              <p className="text-gray-600 text-sm">
                Produksi signage massal mendapat harga yang lebih ekonomis
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Untuk mendapatkan estimasi harga yang akurat sesuai spesifikasi PVC Anda, 
              silakan konsultasi langsung dengan tim ahli kami.
            </p>
            <button 
              onClick={handlePriceInquiry}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center space-x-2 mx-auto transition-colors"
            >
              <span>Konsultasi Harga via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Proyek PVC Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dapatkan hasil cutting PVC terbaik dengan teknologi CNC Laser CO₂ terdepan. 
            Konsultasi gratis untuk proyek signage Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link 
              to="/jasa/cnc-laser-co2"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Lihat Detail Jasa Laser CO₂
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PVC;

