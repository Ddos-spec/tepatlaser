// src/pages/Home.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react';
import Modal from '../components/Modal';

// --- OPTIMASI: Konstanta di luar komponen ---
// Memindahkan array ini ke luar mencegahnya dibuat ulang setiap kali Home dirender.
// Ini meningkatkan performa, terutama pada komponen yang lebih kompleks.
const features = [
  { icon: CheckCircle, title: 'Presisi Tinggi', desc: 'Akurasi hingga 0.1mm' },
  { icon: Clock, title: 'Pengerjaan Cepat', desc: 'Delivery sesuai jadwal' },
  { icon: Shield, title: 'Garansi Kualitas', desc: 'Jaminan hasil sempurna' },
  { icon: Users, title: 'Tim Profesional', desc: 'Berpengalaman 10+ tahun' }
];

const materials = [
  {
    name: 'MDF',
    image: 'mdf.webp',
    problems: 'Sering mengalami masalah presisi potong yang tidak akurat, waktu pengerjaan yang lama karena proses manual, dan komunikasi yang buruk dengan penyedia jasa yang membuat proyek terhambat.',
    solution: 'TepatLaser menggunakan teknologi CNC Router canggih yang memberikan presisi potong hingga 0.1mm untuk material MDF. Tim profesional kami menyelesaikan proyek dengan cepat dan selalu memberikan update progress secara real-time kepada klien.',
    link: '/jasa/cnc-router',
    alt: 'Potongan material MDF hasil kerja mesin CNC Router TepatLaser'
  },
  {
    name: 'GRC',
    image: 'grc.webp',
    problems: 'Material GRC membutuhkan penanganan khusus yang sering diabaikan penyedia jasa umum, mengakibatkan hasil potong kasar, retak, dan tidak sesuai spesifikasi yang diminta klien.',
    solution: 'Dengan pengalaman bertahun-tahun menangani GRC, TepatLaser menggunakan teknik cutting khusus dan parameter yang tepat untuk menghasilkan potongan GRC yang halus, presisi, dan tahan lama sesuai standar industri konstruksi.',
    link: '/jasa/cnc-router',
    alt: 'Panel GRC dengan motif custom hasil potongan presisi'
  },
  {
    name: 'PVC',
    image: 'pvc.webp',
    problems: 'Pemotongan PVC konvensional sering menghasilkan tepi yang meleleh, tidak rata, dan membutuhkan finishing tambahan yang menambah biaya dan waktu pengerjaan proyek.',
    solution: 'TepatLaser menggunakan teknologi laser CO₂ dengan parameter suhu dan kecepatan yang optimal untuk PVC, menghasilkan potongan yang bersih tanpa leleh, tepi yang halus, dan siap pakai tanpa finishing tambahan.',
    link: '/jasa/cnc-laser-co2',
    alt: 'Signage dari bahan PVC yang dipotong rapi menggunakan Laser CO₂'
  },
  {
    name: 'ACP',
    image: 'acp.webp',
    problems: 'Cutting ACP manual berisiko merusak lapisan aluminium dan core material, mengakibatkan hasil yang tidak presisi, bergelombang, dan rentan terhadap korosi pada bagian yang terpotong.',
    solution: 'Teknologi CNC Laser Fiber Metal TepatLaser memotong ACP dengan presisi tinggi tanpa merusak struktur material, menghasilkan tepi yang seal sempurna dan tahan terhadap cuaca untuk aplikasi eksterior maupun interior.',
    link: '/jasa/cnc-laser-fiber',
    alt: 'Fasad gedung modern menggunakan material ACP hasil cutting Laser Fiber'
  },
  {
    name: 'Grafir/Engrave',
    image: 'engraving.webp',
    problems: 'Proses engraving manual memakan waktu lama, hasil tidak konsisten antar produk, dan sulit mencapai detail yang kompleks, terutama untuk produksi dalam jumlah besar.',
    solution: 'Mesin Galvo 30W TepatLaser memberikan hasil engraving yang konsisten dan detail hingga resolusi tinggi. Proses otomatis memungkinkan produksi massal dengan kualitas identik dan waktu pengerjaan yang sangat efisien.',
    link: '/jasa/galvo-engraving',
    alt: 'Proses laser engraving detail pada sebuah produk kayu'
  }
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- READABILITY: Fungsi helper untuk tombol ---
  // Membuat fungsi terpisah agar kode di dalam return JSX lebih bersih dan mudah dibaca.
  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya ingin konsultasi gratis mengenai jasa laser cutting TepatLaser. Bisa dibantu?");
    const phoneNumber = "6285165693179";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // --- OPTIMASI: Memoization untuk list fitur ---
  // `useMemo` memastikan komponen list ini tidak dirender ulang jika data `features` tidak berubah.
  // Berguna jika page `Home` punya state lain yang sering update.
  const featureList = useMemo(() => (
    features.map((feature, index) => {
      const Icon = feature.icon;
      return (
        <div key={index} className="text-center">
          <Icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
          <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
          <p className="text-gray-200 text-base">{feature.desc}</p>
        </div>
      );
    })
  ), []);

  return (
    <>
      {/* TIPS SEO: 
        Pastikan komponen <App> atau layout utama lu punya meta tags yang dinamis. 
        Gunakan library seperti 'react-helmet-async' untuk set:
        - <title>Jasa Laser Cutting Presisi & Engraving - TepatLaser Indonesia</title>
        - <meta name="description" content="TepatLaser menyediakan solusi laser cutting dan engraving untuk MDF, GRC, PVC, ACP, dan metal dengan teknologi CNC terdepan. Presisi tinggi, pengerjaan cepat." />
      */}

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white section-padding"
        style={{ backgroundImage: "url('hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* SEO: h1 adalah heading paling penting di halaman */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Jasa Laser Cutting
            <span className="block text-orange-400">Presisi Tinggi & Engraving</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Solusi terpercaya untuk cutting MDF, GRC, PVC, ACP, dan layanan engraving 
            dengan teknologi CNC terdepan di seluruh Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto mb-12">
            <button 
              onClick={handleConsultation}
              className="btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full"
              aria-label="Konsultasi Gratis via WhatsApp"
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link 
              to="/produk"
              className="font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
              aria-label="Lihat portfolio produk TepatLaser"
            >
              <span>Lihat Portfolio</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {featureList}
          </div>
        </div>
      </section>

      {/* Premium Materials Section */}
      <section id="layanan-material" className="section-padding bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solusi untuk Berbagai Material
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spesialisasi dalam berbagai material dengan teknologi cutting terdepan 
              untuk hasil yang sempurna setiap saat.
            </p>
          </div>
          {/* RESPONSIVE: Penyesuaian grid untuk layar lebih kecil */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material) => (
              <article key={material.name} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col">
                <div className="h-48 overflow-hidden">
                  {/* PERFORMANCE & SEO: `loading` dan `alt` text yang deskriptif */}
                  <img 
                    src={material.image} 
                    alt={material.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{material.name}</h3>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Masalah Umum:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {material.problems}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Solusi TepatLaser:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {material.solution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button 
                      onClick={handleConsultation}
                      className="flex-1 btn-primary text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      aria-label={`Konsultasi untuk material ${material.name}`}
                    >
                      <span>Konsultasi</span>
                    </button>
                    <Link
                      to={material.link}
                      className="flex-1 btn-secondary text-blue-600 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 text-center"
                      aria-label={`Lihat rekomendasi jasa untuk ${material.name}`}
                    >
                      <span>Rekomendasi Jasa</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih TepatLaser?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman bertahun-tahun dan komitmen terhadap kualitas membuat kami 
              menjadi pilihan utama untuk kebutuhan laser cutting Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* READABILITY: Menggunakan map untuk menghindari repetisi kode */}
            {[
              { icon: Star, color: 'blue', title: 'Kualitas Premium', desc: 'Menggunakan mesin CNC terbaru dengan presisi tinggi untuk hasil yang sempurna' },
              { icon: Clock, color: 'orange', title: 'Pengerjaan Cepat', desc: 'Tim berpengalaman dan proses yang efisien memastikan proyek selesai tepat waktu' },
              { icon: Users, color: 'green', title: 'Layanan Profesional', desc: 'Konsultasi gratis, komunikasi yang jelas, dan support penuh dari awal hingga akhir' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Konsultasikan kebutuhan laser cutting Anda dengan tim ahli kami. 
            Gratis dan tanpa komitmen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-lg mx-auto">
            <button 
              onClick={handleConsultation}
              className="btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full"
              aria-label="Mulai Konsultasi Gratis via WhatsApp"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-5 h-5" />
            </button>
             <Link 
              to="/produk"
              className="font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 w-full border-2 border-white text-white hover:bg-white hover:text-orange-500 transition-colors"
              aria-label="Lihat semua produk di portfolio"
            >
              <span>Lihat Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal di-render kondisional, tidak menambah beban jika tidak dibuka */}
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Ringkasan Layanan TepatLaser"
        >
          {/* Menambahkan children untuk memenuhi tipe ModalProps */}
          <div className="space-y-4">
            <p className="text-gray-600">
              TepatLaser menyediakan layanan laser cutting dan engraving presisi tinggi untuk berbagai material seperti MDF, GRC, PVC, ACP, dan logam.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Cutting dengan presisi hingga 0.1mm</li>
              <li>Pengerjaan cepat dan tepat waktu</li>
              <li>Konsultasi gratis sebelum proyek dimulai</li>
              <li>Garansi kualitas hasil akhir</li>
            </ul>
            <div className="pt-4">
              <button
                onClick={handleConsultation}
                className="w-full btn-primary text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
              >
                <span>Konsultasi Sekarang via WhatsApp</span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;