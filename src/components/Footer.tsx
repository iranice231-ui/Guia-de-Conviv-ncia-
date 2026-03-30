import React from 'react';
import { LogoSVG } from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-8 flex justify-center w-full">
          <div className="h-28 w-80 sm:h-32 sm:w-96">
            <LogoSVG className="w-full h-full object-contain object-center" />
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">Guia de Convivência - Viana e Moura Construções</p>
          <p>&copy; {currentYear} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
