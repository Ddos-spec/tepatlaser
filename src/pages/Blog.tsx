// src/pages/Blog.tsx

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

// --- OPTIMASI: Konstanta di luar komponen ---
const categories = ['All', 'Tips & Trik', 'Free Service', 'Showcase'];

const blogPosts = [
  {
    slug: 'cara-memilih-jasa-laser-engraving-mdf',
    title: 'Cara Memilih Jasa Laser Engraving MDF yang Tepat',
    excerpt: 'Panduan lengkap memilih penyedia jasa laser engraving MDF untuk hasil yang presisi dan berkualitas tinggi, cocok untuk signage, furnitur, dan dekorasi.',
    image: 'produk1.webp',
    category: 'Tips & Trik',
    date: '15 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '5 min',
    alt: 'Contoh hasil laser engraving detail pada material MDF.'
  },
  {
    slug: 'tips-cutting-pvc-dengan-laser-co2',
    title: 'Tips Cutting PVC dengan Laser CO₂ untuk Hasil Maksimal',
    excerpt: 'Teknik dan parameter optimal untuk cutting PVC menggunakan laser CO₂ agar mendapatkan hasil yang bersih, presisi, dan tidak meleleh.',
    image: 'produk2.webp',
    category: 'Tips & Trik',
    date: '12 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '4 min',
    alt: 'Huruf dari bahan PVC hasil potongan rapi menggunakan mesin laser CO₂.'
  },
  {
    slug: 'panduan-cutting-acp-dengan-laser-fiber',
    title: 'Panduan Cutting ACP dengan Laser Fiber Metal',
    excerpt: 'Semua yang perlu Anda ketahui tentang cutting ACP (Aluminium Composite Panel) menggunakan teknologi laser fiber untuk hasil industrial grade.',
    image: 'produk3.webp',
    category: 'Tips & Trik',
    date: '10 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '6 min',
    alt: 'Panel ACP dengan pola rumit yang dipotong presisi oleh laser fiber.'
  },
  {
    slug: 'free-design-konsultasi-signage-acrylic',
    title: 'Free Design & Konsultasi untuk Signage Acrylic Anda',
    excerpt: 'Dapatkan layanan desain gratis dan konsultasi profesional untuk proyek signage atau papan nama acrylic impian Anda bersama TepatLaser.',
    image: 'produk1.webp',
    category: 'Free Service',
    date: '8 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '3 min',
    alt: 'Contoh signage modern dari bahan acrylic bening.'
  },
  {
    slug: 'showcase-trophy-custom-galvo-engraving',
    title: 'Showcase: Trophy Custom dengan Galvo Engraving',
    excerpt: 'Melihat proses pembuatan trophy custom menggunakan teknologi Galvo 30W untuk hasil engraving yang detail, presisi, dan premium.',
    image: 'produk2.webp',
    category: 'Showcase',
    date: '5 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '4 min',
    alt: 'Trophy custom dengan detail grafir yang sangat presisi.'
  },
  {
    slug: 'free-konsultasi-furniture-components-mdf',
    title: 'Free Konsultasi: Furniture Components dari MDF',
    excerpt: 'Konsultasi gratis untuk pembuatan komponen furniture custom dari MDF dengan teknologi CNC Router presisi tinggi untuk hasil sempurna.',
    image: 'produk3.webp',
    category: 'Free Service',
    date: '3 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '5 min',
    alt: 'Komponen furniture dari MDF yang siap dirakit.'
  }
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() =>
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen">
      {/* TIPS SEO:
        Gunakan 'react-helmet-async' untuk set:
        - <title>Blog - Tips & Showcase Jasa Laser Cutting | TepatLaser</title>
        - <meta name="description" content="Baca tips, trik, dan insight terbaru seputar teknologi laser cutting, CNC machining, dan showcase hasil kerja TepatLaser." />
      */}

      <header className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog TepatLaser
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tips, trik, dan insight terbaru seputar teknologi laser cutting, 
            CNC machining, dan layanan manufaktur presisi.
          </p>
        </div>
      </header>

      <section id="kategori-blog" className="py-12 bg-gray-50 scroll-mt-16">
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
                aria-label={`Filter artikel blog berdasarkan kategori: ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              {filteredPosts.length} artikel tersedia
              {selectedCategory !== 'All' && ` dalam kategori "${selectedCategory}"`}
            </p>
          </div>
        </div>
      </section>

      <main className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.category === 'Tips & Trik' 
                        ? 'bg-blue-100 text-blue-800'
                        : post.category === 'Free Service'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-orange-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors mt-4"
                      aria-label={`Baca selengkapnya tentang ${post.title}`}
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <aside className="bg-gray-900 text-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jangan Lewatkan Update Terbaru
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dapatkan tips, trik, dan insight terbaru seputar teknologi laser cutting 
            langsung ke WhatsApp Anda.
          </p>
          <button 
            onClick={() => {
              const message = encodeURIComponent("Halo, saya ingin mendapatkan update terbaru dari blog TepatLaser");
              const phoneNumber = "6281234567890";
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="btn-primary text-white font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 mx-auto"
            aria-label="Subscribe update blog TepatLaser via WhatsApp"
          >
            <span>Subscribe via WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Blog;