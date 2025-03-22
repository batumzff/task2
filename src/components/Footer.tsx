import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream/40 py-10 border-t border-mint/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:max-w-xs">
            <div className="text-2xl font-bold text-lavender mb-3">BM Store</div>
            <p className="text-sm text-powder/90">&copy; {new Date().getFullYear()} BM Store. Tüm hakları saklıdır.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <h4 className="font-medium text-powder mb-4 uppercase text-sm tracking-wider">Hızlı Erişim</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-sm text-lavender/80 hover:text-lavender transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-sm text-lavender/80 hover:text-lavender transition-colors">İletişim</a></li>
                <li><a href="#" className="text-sm text-lavender/80 hover:text-lavender transition-colors">Gizlilik Politikası</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-powder mb-4 uppercase text-sm tracking-wider">Kategoriler</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-sm text-lavender/80 hover:text-lavender transition-colors">Elektronik</a></li>
                <li><a href="#" className="text-sm text-lavender/80 hover:text-lavender transition-colors">Giyim</a></li>
                <li><a href="#" className="text-sm text-lavender/80 hover:text-lavender transition-colors">Aksesuar</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 