import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Settings } from 'lucide-react';

const Plywood: React.FC = () => {
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya ingin konsultasi mengenai jasa cutting laser untuk material Plywood/Multiplex. Bisa dibantu?");
    const phoneNumber = "6285165693179";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePriceInquiry = () => {
    const message = encodeURIComponent("Halo, saya ingin mengetahui harga jasa cutting laser untuk material Plywood/Multiplex. Bisa minta informasi biayanya?");
    const phoneNumber = "6285165693179";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jasa Cutting Laser
                <span className="block text-orange-400">Plywood/Multiplex</span>
              </h1>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                Solusi terpercaya untuk cutting plywood dan multiplex dengan teknologi CNC Router. 
                Hasil presisi tinggi tanpa splintering untuk furniture dan konstruksi berkualitas.
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
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Tanya Harga
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/plywood.webp" 
                alt="Furniture plywood dengan detail cutting rumit hasil CNC Router"
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
              Tentang Material Plywood/Multiplex
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plywood adalah material kayu lapis yang terdiri dari beberapa lapisan veneer kayu yang direkatkan dengan arah serat silang untuk kekuatan optimal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Karakteristik Plywood</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Kekuatan tinggi dengan berat yang relatif ringan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Tahan terhadap warping dan cracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Permukaan halus dengan tekstur kayu alami</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Mudah difinishing dengan cat atau varnish</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Aplikasi Umum</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Furniture custom dan built-in</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Konstruksi dan struktur bangunan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Interior design dan dekorasi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Packaging dan kemasan khusus</span>
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
              Rekomendasi Jasa untuk Plywood
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berdasarkan karakteristik material plywood, berikut adalah jasa cutting yang paling optimal untuk hasil terbaik.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-amber-600 p-4 rounded-full">
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CNC Router - Pilihan Terbaik untuk Plywood</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Teknologi CNC Router dengan mata pisau khusus kayu adalah solusi ideal untuk cutting plywood 
                karena mampu menghasilkan potongan halus tanpa splintering pada lapisan veneer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tanpa Splintering</h4>
                <p className="text-gray-600 text-sm">Potongan bersih tanpa merusak lapisan veneer</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Detail Rumit</h4>
                <p className="text-gray-600 text-sm">Mampu mengerjakan bentuk kompleks dengan presisi</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Shield className="w-8 h-8 text-orange-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Siap Finishing</h4>
                <p className="text-gray-600 text-sm">Hasil langsung siap untuk proses finishing</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/jasa/cnc-router"
                className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
              Faktor Penentu Biaya Cutting Plywood
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harga jasa cutting plywood ditentukan oleh beberapa faktor utama yang mempengaruhi kompleksitas pengerjaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Ketebalan Plywood</h3>
              <p className="text-gray-600 text-sm">
                Plywood tersedia dari 3mm hingga 30mm, mempengaruhi waktu cutting
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Grade Material</h3>
              <p className="text-gray-600 text-sm">
                Grade A, B, C memiliki kualitas dan harga yang berbeda
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Kompleksitas Desain</h3>
              <p className="text-gray-600 text-sm">
                Bentuk melengkung dan detail rumit memerlukan teknik khusus
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Volume Produksi</h3>
              <p className="text-gray-600 text-sm">
                Produksi furniture massal mendapat harga yang lebih ekonomis
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Untuk mendapatkan estimasi harga yang akurat sesuai spesifikasi plywood Anda, 
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
            Siap Memulai Proyek Plywood Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dapatkan hasil cutting plywood terbaik dengan teknologi CNC Router terdepan. 
            Konsultasi gratis untuk proyek furniture Anda!
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
              to="/jasa/cnc-router"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Lihat Detail Jasa CNC Router
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plywood;

