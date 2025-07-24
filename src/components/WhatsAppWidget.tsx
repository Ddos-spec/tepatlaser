import React from 'react';

const WhatsAppWidget: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya ingin konsultasi gratis mengenai jasa laser cutting. Bisa dibantu?");
    const phoneNumber = "6285165693179"; // Nomor yang sudah diubah
    // Memperbaiki URL dengan menghapus spasi ekstra
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="floating-widget">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat WhatsApp"
      >
        {/* Mengganti ikon dengan SVG lokal */}
        <img src="whatsapp.svg" alt="WhatsApp" className="w-7 h-7" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;