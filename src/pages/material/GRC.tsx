import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Settings } from 'lucide-react';

const GRC: React.FC = () => {
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya ingin konsultasi mengenai jasa cutting laser untuk material GRC. Bisa dibantu?");
    const phoneNumber = "6285165693179";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePriceInquiry = () => {
    const message = encodeURIComponent("Halo, saya ingin mengetahui harga jasa cutting laser untuk material GRC. Bisa minta informasi biayanya?");
    const phoneNumber = "6285165693179";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-600 to-stone-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jasa Cutting Laser GRC
                <span className="block text-orange-400">Presisi Tinggi</span>
              </h1>
              <p className="text-xl text-stone-100 mb-8 leading-relaxed">
                Solusi terpercaya untuk cutting GRC (Glass Reinforced Concrete) dengan teknologi CNC Router. 
                Penanganan khusus untuk hasil presisi sesuai standar industri konstruksi.
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
                  className="border-2 border-white text-white hover:bg-white hover:text-stone-600 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Tanya Harga
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/grc.webp" 
                alt="Panel GRC dengan motif custom hasil potongan presisi"
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
              Tentang Material GRC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glass Reinforced Concrete (GRC) adalah material komposit yang terdiri dari semen, pasir, air, dan serat kaca untuk kekuatan ekstra.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Karakteristik GRC</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Kekuatan tinggi dengan berat yang relatif ringan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Tahan terhadap cuaca dan fire resistant</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Dapat dibentuk dalam berbagai desain kompleks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Maintenance rendah dan tahan lama</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Aplikasi Umum</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Fasad dan cladding bangunan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Panel dekoratif dan ornamen arsitektur</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Komponen precast untuk konstruksi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Elemen landscape dan urban furniture</span>
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
              Rekomendasi Jasa untuk GRC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berdasarkan karakteristik material GRC, berikut adalah jasa cutting yang paling optimal untuk hasil terbaik.
            </p>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-stone-600 p-4 rounded-full">
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CNC Router - Pilihan Terbaik untuk GRC</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Teknologi CNC Router dengan parameter khusus adalah solusi ideal untuk cutting GRC karena mampu 
                menangani material komposit ini tanpa menyebabkan retak atau kerusakan struktur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tanpa Retak</h4>
                <p className="text-gray-600 text-sm">Teknik khusus mencegah kerusakan struktur material</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Presisi Tinggi</h4>
                <p className="text-gray-600 text-sm">Hasil sesuai standar industri konstruksi</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Shield className="w-8 h-8 text-orange-500 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tahan Lama</h4>
                <p className="text-gray-600 text-sm">Potongan halus dengan daya tahan optimal</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/jasa/cnc-router"
                className="inline-flex items-center space-x-2 bg-stone-600 hover:bg-stone-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
              Faktor Penentu Biaya Cutting GRC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harga jasa cutting GRC ditentukan oleh beberapa faktor utama yang mempengaruhi kompleksitas pengerjaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Ketebalan Panel</h3>
              <p className="text-gray-600 text-sm">
                GRC tersedia dalam berbagai ketebalan, mempengaruhi teknik cutting
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Densitas Material</h3>
              <p className="text-gray-600 text-sm">
                Kandungan serat kaca dan komposisi mempengaruhi kesulitan cutting
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Kompleksitas Bentuk</h3>
              <p className="text-gray-600 text-sm">
                Detail arsitektur rumit memerlukan presisi dan kehati-hatian ekstra
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Volume Proyek</h3>
              <p className="text-gray-600 text-sm">
                Proyek konstruksi besar mendapat harga yang lebih ekonomis
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Untuk mendapatkan estimasi harga yang akurat sesuai spesifikasi GRC Anda, 
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
            Siap Memulai Proyek GRC Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dapatkan hasil cutting GRC terbaik dengan teknologi CNC Router dan penanganan khusus. 
            Konsultasi gratis untuk proyek konstruksi Anda!
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

export default GRC;

