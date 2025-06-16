
import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950/80 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <img 
                src="/public/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png" 
                alt="ScionX Logo" 
                className="w-full h-full object-contain rounded-md bg-white/10"
              />
            </div>
            <h3 className="text-lg font-semibold text-white">
              ScionX Web3 Consulting Services
            </h3>
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <a 
              href="https://twitter.com/scionx_io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://instagram.com/scionx_io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/101620307" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <p className="text-slate-400">
            © 2024 ScionX Web3 Consulting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
