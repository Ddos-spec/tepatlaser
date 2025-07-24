// src/pages/BlogPost.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react';

// --- OPTIMASI & READABILITY: Data di luar komponen ---
// Memindahkan data ke luar mencegah pembuatan ulang objek yang besar ini setiap render.
// Data ini juga diperluas untuk mencakup semua slug dari halaman Blog.
const blogPosts: Record<string, any> = {
  'cara-memilih-jasa-laser-engraving-mdf': {
    title: 'Cara Memilih Jasa Laser Engraving MDF yang Tepat',
    image: '/produk1.webp',
    alt: 'Contoh hasil laser engraving detail pada material MDF.',
    category: 'Tips & Trik',
    date: '15 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '5 min',
    content: [
      {
        type: 'paragraph',
        text: 'Memilih jasa laser engraving MDF yang tepat adalah kunci untuk mendapatkan hasil yang memuaskan dan sesuai ekspektasi. MDF (Medium Density Fiberboard) merupakan material yang populer untuk berbagai aplikasi seperti signage, furniture, dan dekorasi interior karena teksturnya yang halus dan mudah dikerjakan.'
      },
      {
        type: 'paragraph',
        text: 'Namun, tidak semua penyedia jasa memiliki kemampuan dan teknologi yang sama dalam menangani engraving MDF. Kesalahan dalam pemilihan penyedia jasa dapat berakibat pada hasil yang tidak presisi, waktu pengerjaan yang lama, dan biaya yang membengkak karena perlu perbaikan atau pengerjaan ulang.'
      },
      {
        type: 'heading',
        text: '5 Kriteria Penting dalam Memilih Jasa Laser Engraving MDF'
      },
      {
        type: 'list',
        items: [
          'Teknologi Mesin: Pastikan menggunakan laser engraving dengan daya yang sesuai untuk MDF (minimal 30W untuk hasil optimal).',
          'Portfolio dan Pengalaman: Lihat contoh hasil kerja sebelumnya untuk memastikan kualitas.',
          'Presisi dan Detail: Tanyakan kemampuan mesin untuk menghasilkan detail halus hingga 0.1mm.',
          'Waktu Pengerjaan: Cari tahu estimasi proses yang efisien tanpa mengorbankan kualitas.',
          'Layanan Konsultasi: Pilih penyedia yang menawarkan konsultasi gratis untuk desain dan spesifikasi teknis.'
        ]
      }
    ]
  },
  'tips-cutting-pvc-dengan-laser-co2': {
    title: 'Tips Cutting PVC dengan Laser CO₂ untuk Hasil Maksimal',
    image: '/produk2.webp',
    alt: 'Huruf dari bahan PVC hasil potongan rapi menggunakan mesin laser CO₂.',
    category: 'Tips & Trik',
    date: '12 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '4 min',
    content: [
      {
        type: 'paragraph',
        text: 'PVC (Polyvinyl Chloride) adalah material yang sangat populer untuk berbagai aplikasi seperti signage, display, dan komponen industri. Namun, cutting PVC memerlukan teknik khusus agar menghasilkan potongan yang bersih tanpa meleleh atau meninggalkan bekas terbakar.'
      },
      {
        type: 'paragraph',
        text: 'Teknologi Laser CO₂ adalah solusi terbaik untuk cutting PVC karena dapat mengontrol suhu dan kecepatan dengan presisi tinggi. Dengan parameter yang tepat, Anda dapat memperoleh hasil cutting yang sempurna dengan tepi yang halus dan siap pakai.'
      },
      {
        type: 'heading',
        text: 'Parameter Optimal untuk Cutting PVC'
      },
      {
        type: 'list',
        items: [
          'Daya Laser: Atur daya di 40-60% dari kapasitas maksimal untuk mencegah overheating.',
          'Kecepatan Cutting: Gunakan kecepatan 15-25 mm/s untuk PVC ketebalan 1-3mm.',
          'Frekuensi Pulse: Set frekuensi di 2000-5000 Hz untuk hasil tepi yang halus.',
          'Assist Gas: Manfaatkan udara bertekanan rendah untuk meniup debris dan mendinginkan area potong.',
          'Focus Height: Atur titik fokus sekitar 0.5-1mm di atas permukaan material.'
        ]
      }
    ]
  },
  // --- Data lain ditambahkan agar link dari halaman Blog tidak error ---
  'panduan-cutting-acp-dengan-laser-fiber': {
    title: 'Panduan Cutting ACP dengan Laser Fiber Metal',
    image: '/produk3.webp',
    alt: 'Panel ACP dengan pola rumit yang dipotong presisi oleh laser fiber.',
    category: 'Tips & Trik',
    date: '10 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '6 min',
    content: [{ type: 'paragraph', text: 'Konten untuk artikel panduan cutting ACP akan segera hadir. Stay tuned!' }]
  },
  'free-design-konsultasi-signage-acrylic': {
    title: 'Free Design & Konsultasi untuk Signage Acrylic Anda',
    image: '/produk1.webp',
    alt: 'Contoh signage modern dari bahan acrylic bening.',
    category: 'Free Service',
    date: '8 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '3 min',
    content: [{ type: 'paragraph', text: 'Konten untuk artikel free design signage acrylic akan segera hadir. Stay tuned!' }]
  },
  'showcase-trophy-custom-galvo-engraving': {
    title: 'Showcase: Trophy Custom dengan Galvo Engraving',
    image: '/produk2.webp',
    alt: 'Trophy custom dengan detail grafir yang sangat presisi.',
    category: 'Showcase',
    date: '5 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '4 min',
    content: [{ type: 'paragraph', text: 'Konten untuk artikel showcase trophy custom akan segera hadir. Stay tuned!' }]
  },
    'free-konsultasi-furniture-components-mdf': {
    title: 'Free Konsultasi: Furniture Components dari MDF',
    image: '/produk3.webp',
    alt: 'Komponen furniture dari MDF yang siap dirakit.',
    category: 'Free Service',
    date: '3 Januari 2024',
    author: 'Tim TepatLaser',
    readTime: '5 min',
    content: [{ type: 'paragraph', text: 'Konten untuk artikel free konsultasi furniture akan segera hadir. Stay tuned!' }]
  }
};


const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentPost = slug ? blogPosts[slug] : null;

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-lg text-gray-600 mb-8">Maaf, artikel yang Anda cari tidak ada atau sudah dipindahkan.</p>
          <Link to="/blog" className="text-orange-600 hover:text-orange-700 font-semibold">
            &larr; Kembali ke Semua Artikel
          </Link>
        </div>
      </div>
    );
  }

  const handleConsultation = () => {
    const message = encodeURIComponent(`Halo, saya baru saja membaca artikel "${currentPost.title}" dan tertarik untuk konsultasi gratis. Bisa dibantu?`);
    const phoneNumber = "6281234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* TIPS SEO:
        Gunakan 'react-helmet-async' untuk set title dan meta description dinamis:
        - <title>{currentPost.title} | TepatLaser Blog</title>
        - <meta name="description" content={currentPost.content[0].text.substring(0, 160)} />
      */}

      <header className="relative">
        <div className="h-72 md:h-96 overflow-hidden">
          <img 
            src={currentPost.image} 
            alt={currentPost.alt}
            className="w-full h-full object-cover"
            width="1200"
            height="384"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentPost.category === 'Tips & Trik' ? 'bg-blue-100 text-blue-800' :
                currentPost.category === 'Free Service' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                <Tag className="w-3 h-3 inline mr-1" />
                {currentPost.category}
              </span>
              <span className="text-white/90 text-sm">{currentPost.readTime} read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {currentPost.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-white/80 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Oleh: {currentPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Diterbitkan: {currentPost.date}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors font-semibold"
            aria-label="Kembali ke halaman utama blog"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Artikel</span>
          </Link>

          {/* READABILITY: Menggunakan kelas `prose` untuk styling tipografi otomatis */}
          <article className="prose prose-lg max-w-none prose-h2:text-gray-900 prose-h2:font-bold prose-p:text-gray-700 prose-li:text-gray-600">
            {currentPost.content.map((section: any, index: number) => {
              switch (section.type) {
                case 'paragraph':
                  return <p key={index}>{section.text}</p>;
                case 'heading':
                  return <h2 key={index}>{section.text}</h2>;
                case 'list':
                  return (
                    <ul key={index}>
                      {section.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </article>

          <aside className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Butuh Bantuan untuk Proyek Anda?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim ahli TepatLaser siap membantu Anda dengan konsultasi gratis seputar 
              kebutuhan laser cutting dan engraving. Dapatkan solusi terbaik untuk proyek Anda!
            </p>
            <button 
              onClick={handleConsultation}
              className="btn-primary text-white font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 mx-auto"
              aria-label="Mulai konsultasi gratis via WhatsApp"
            >
              <span>Konsultasi Gratis Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;  