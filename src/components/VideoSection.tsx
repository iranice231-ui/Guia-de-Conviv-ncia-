import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gray-50"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100 relative z-10"
        >
          <div className="inline-flex items-center justify-center p-4 bg-brand-red/10 rounded-full mb-6">
            <PlayCircle className="w-10 h-10 text-brand-red" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Importância da Boa Convivência
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Assista ao vídeo e entenda melhor como funciona a convivência no seu condomínio.
          </p>
          
          <a
            href="https://youtu.be/vP-KuLF6xkI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-brand-red hover:bg-brand-red-light shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <PlayCircle className="w-6 h-6 fill-current" />
            Assistir Vídeo Explicativo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
