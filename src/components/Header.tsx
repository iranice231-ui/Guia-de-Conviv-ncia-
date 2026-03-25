import React from 'react';
import { LogoSVG } from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="block h-14 w-48">
            <LogoSVG />
          </a>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#boas-vindas" className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors">Início</a>
          <a href="#permitido" className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors">Permitido</a>
          <a href="#nao-permitido" className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors">Não Permitido</a>
          <a href="#direitos-deveres" className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors">Direitos e Deveres</a>
          <a href="#documentos" className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors">Documentos</a>
        </nav>
        <a 
          href="#contato" 
          className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-red hover:bg-brand-red-light transition-colors"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
