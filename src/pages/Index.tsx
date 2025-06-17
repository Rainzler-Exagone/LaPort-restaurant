
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import VideoBackground from '@/components/VideoBackground';
import AccueilSection from '@/components/AccueilSection';
import MenusSection from '@/components/MenusSection';
import PhotosSection from '@/components/PhotosSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('accueil');

 
  const handleNavigateToMenus = () => {
    setActiveSection('menus');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'accueil':
        return <AccueilSection onNavigateToMenus={handleNavigateToMenus} />;
      case 'menus':
        return <MenusSection />;
      case 'photos':
        return <PhotosSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AccueilSection onNavigateToMenus={handleNavigateToMenus} />;
    }
  };


  return (
    <div className="min-h-screen bg-restaurant-black text-white">
      <VideoBackground />
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative z-10">
        {renderSection()}
      </main>
      <Footer/>
    </div>
    
  );
};

export default Index;
