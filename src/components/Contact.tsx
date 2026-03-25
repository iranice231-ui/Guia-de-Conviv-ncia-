import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-red text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-brand-yellow/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Ajuda?
            </h2>
            
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Em caso de dúvidas, fale com o setor de relacionamento com o cliente.
              Nossa equipe está pronta para ajudar você a viver melhor.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://wa.me/5581992486893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-brand-red bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6 mr-3 text-green-500" />
                Chamar no WhatsApp
              </a>
              
              <div className="flex items-center gap-3 text-red-100 font-medium text-lg">
                <Phone className="w-5 h-5" />
                <span>(81) 99248-6893</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
