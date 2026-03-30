import React from 'react';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand-yellow/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-red/10 rounded-full mb-8">
            <Home className="w-6 h-6 text-brand-red" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Guia de <span className="text-brand-red">Convivência</span>
          </h1>
          
          <p className="mt-4 text-xl sm:text-2xl text-gray-600 mb-10 font-medium">
            Tudo o que você precisa saber para viver bem em condomínio
          </p>
          
          <div className="mt-10 flex justify-center">
            <a
              href="#boas-vindas"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-brand-red hover:bg-brand-red-light shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Acessar Guia
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
