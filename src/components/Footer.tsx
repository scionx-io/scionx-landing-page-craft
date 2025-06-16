
import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  console.log('Footer component rendering');
  
  const handleSocialClick = (url: string, platform: string) => {
    console.log(`${platform} link clicked`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <footer className="bg-slate-950/80 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <img 
                src="/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png"
                alt="ScionX Logo" 
                className="w-full h-full object-contain rounded-md bg-white/10"
                onLoad={() => console.log('Footer logo loaded successfully')}
                onError={(e) => console.log('Footer logo failed to load', e)}
              />
            </div>
            <h3 className="text-lg font-semibold text-white">
              ScionX Web3 Consulting Services
            </h3>
          </div>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
            <button 
              onClick={() => handleSocialClick('https://twitter.com/scionx_io', 'Twitter')}
              className="text-slate-400 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800 rounded-lg border border-slate-700"
            >
              <Twitter size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={() => handleSocialClick('https://instagram.com/scionx_io', 'Instagram')}
              className="text-slate-400 hover:text-pink-400 transition-colors p-2 hover:bg-slate-800 rounded-lg border border-slate-700"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={() => handleSocialClick('https://www.linkedin.com/company/101620307/admin/dashboard/', 'LinkedIn')}
              className="text-slate-400 hover:text-blue-600 transition-colors p-2 hover:bg-slate-800 rounded-lg border border-slate-700"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
          
          <p className="text-slate-400 text-sm sm:text-base px-4">
            © 2024 ScionX Web3 Consulting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
