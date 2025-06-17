import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className=" flex  items-center justify-center gap-4 max-w-5xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">Restaurant la Porte des Laurentides</h3>
        <p className="text-sm mb-1">📞 450-439-1711</p>
        <p className="text-sm mb-1">📍 802 rue St-Isidore, St-Lin-Laurentides, Qc</p>
        <div className="border-t border-gray-700 my-4"></div>
        <p className="text-xs text-gray-400">© 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
