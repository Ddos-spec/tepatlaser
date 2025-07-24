// src/pages/Products.tsx

import React, { useState, useMemo } from 'react';

import { ExternalLink } from 'lucide-react';

// --- OPTIMASI: Konstanta di luar komponen ---
// Mencegah array dibuat ulang setiap render, meningkatkan performa.
const categories = ['All', 'Signage', 'Display', 'Arsitektur', 'Trophy', 'Furniture', 'Industrial', 'Corporate', 'Dekorasi'];

const products = [
    // SEO: Alt text yang deskriptif untuk setiap gambar
  {
    title: 'Signage MDF Premium',
    image: '/produk1.webp',
    description: 'Papan nama toko dari bahan MDF yang dipotong presisi menggunakan teknologi CNC Router canggih, menghasilkan detail yang tajam dan finishing halus.',
    machine: 'CNC Router',
    category: 'Signage',
    alt: 'Signage MDF premium dengan tulisan custom untuk sebuah toko'
  },
  {
    title: 'Display Acrylic Modern',
    image: '/produk2.webp',
    description: 'Display produk modern dari bahan acrylic bening, dipotong dengan laser CO₂ untuk tepian yang mengkilap dan bebas dari bekas pemotongan.',
    machine: 'CNC Laser CO₂',
    category: 'Display',
    alt: 'Display produk dari acrylic bening dengan beberapa tingkatan'
  },
  {
    title: 'Panel ACP Fasad',
    image: '/produk3.webp',
    description: 'Panel fasad untuk eksterior gedung dari material ACP (Aluminium Composite Panel), dipotong dengan laser fiber untuk presisi industrial grade.',
    machine: 'CNC Laser Fiber',
    category: 'Arsitektur',
    alt: 'Panel ACP dengan motif geometris terpasang di fasad gedung'
  },
  {
    title: 'Trophy Acrylic Custom',
    image: '/produk1.webp', 
    description: 'Trophy atau plakat penghargaan dari acrylic yang dipersonalisasi dengan teknik engraving laser Galvo, menghasilkan tulisan dan logo yang sangat detail.',
    machine: 'Galvo 30W',
    category: 'Trophy',
    alt: 'Trophy penghargaan dari bahan acrylic dengan grafir logo perusahaan'
  },
  {
    title: 'Furniture Components',
    image: '/produk2.webp',
    description: 'Komponen-komponen furniture seperti panel dekoratif atau partisi ruangan yang dipotong custom dari material kayu olahan dengan CNC Router.',
    machine: 'CNC Router',
    category: 'Furniture',
    alt: 'Beberapa komponen furniture dari kayu dengan pola potongan yang rumit'
  },
  {
    title: 'Industrial Marking',
    image: '/produk3.webp',
    description: 'Penandaan (marking) permanen pada komponen industri berbahan metal menggunakan laser engraving Galvo untuk nomor seri atau kode produksi.',
    machine: 'Galvo 30W',
    category: 'Industrial',
    alt: 'Detail marking nomor seri pada sebuah komponen mesin dari metal'
  },
  {
    title: 'PVC Signboard',
    image: '/produk1.webp',
    description: 'Papan reklame atau petunjuk arah dari material PVC yang ringan dan tahan cuaca, dipotong dengan laser CO₂ untuk hasil yang bersih dan presisi.',
    machine: 'CNC Laser CO₂',
    category: 'Signage',
    alt: 'Papan nama dari PVC putih dengan tulisan yang dipotong rapi'
  },
  {
    title: 'Metal Name Tag',
    image: '/produk2.webp',
    description: 'Name tag atau papan nama meja dari stainless steel yang dipotong menggunakan laser fiber, memberikan kesan premium dan presisi.',
    machine: 'CNC Laser Fiber',
    category: 'Corporate',
    alt: 'Name tag berbahan stainless steel dengan grafir nama dan jabatan'
  },
  {
    title: 'Decorative Panel',
    image: '/produk3.webp',
    description: 'Panel dekoratif untuk interior maupun eksterior dengan pattern atau pola rumit yang dipotong sempurna menggunakan CNC Router.',
    machine: 'CNC Router',
    category: 'Dekorasi',
    alt: 'Panel dekoratif besar dari kayu dengan pola floral yang detail'
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // --- OPTIMASI: Memoization untuk proses filter ---
  // `useMemo` memastikan proses filter yang berpotensi berat hanya berjalan
  // ketika `selectedCategory` benar-benar berubah.
  const filteredProducts = useMemo(() => 
    selectedCategory === 'All' 
      ? products 
      : products.filter(product => product.category === selectedCategory),
    [selectedCategory]
  );

  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan produk yang telah dibuat TepatLaser. Bisa konsultasi untuk proyek serupa?");
    const phoneNumber = "6281234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
       {/* TIPS SEO:
        Gunakan 'react-helmet-async' untuk set:
        - <title>Portfolio Produk Laser Cutting & Engraving | TepatLaser</title>
        - <meta name="description" content="Lihat hasil karya dan portfolio produk TepatLaser. Kami mengerjakan signage, display, panel ACP, trophy, dan komponen furniture dengan presisi tinggi." />
      */}

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio Produk
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Hasil karya terbaik dari teknologi CNC cutting dan laser engraving 
            TepatLaser untuk berbagai kebutuhan industri dan personal.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section id="kategori-produk" className="py-12 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                }`}
                aria-label={`Filter produk berdasarkan kategori: ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600">
              Menampilkan {filteredProducts.length} produk
              {selectedCategory !== 'All' && ` dalam kategori ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <article key={product.title} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col">
                <div className="h-64 overflow-hidden">
                  {/* PERFORMANCE & SEO */}
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="256"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <span className="text-sm text-gray-500">{product.machine}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="text-sm text-orange-600 font-medium">
                      Mesin: {product.machine}
                    </div>
                    <button 
                      onClick={handleConsultation}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      aria-label={`Tanya detail tentang produk ${product.title}`}
                    >
                      <span>Tanya Detail</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tertarik dengan Produk Serupa?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Konsultasikan kebutuhan proyek Anda dengan tim ahli kami. 
            Dapatkan hasil berkualitas tinggi seperti produk-produk di atas!
          </p>
          <button 
            onClick={handleConsultation}
            className="btn-primary text-white font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 mx-auto"
            aria-label="Konsultasi proyek Anda sekarang via WhatsApp"
          >
            <span>Konsultasi Proyek Anda</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;