
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <img 
                src="/public/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png" 
                alt="ScionX Consulting Logo" 
                className="w-full h-full object-contain rounded-md bg-white/10"
              />
            </div>
            <span className="font-mono text-blue-400 font-medium">scionx.consulting</span>
          </div>
          <p className="text-slate-400 text-center">
            © 2025 ScionX Consulting. Empowering the future of global payments.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
