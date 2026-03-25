import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake } from 'lucide-react';

export default function Welcome() {
  return (
    <section id="boas-vindas" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-brand-yellow/10 rounded-full mb-6">
            <HeartHandshake className="w-8 h-8 text-brand-yellow" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Boas-vindas ao seu novo lar!
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Acreditamos que um condomínio é mais do que um conjunto de casas; é uma comunidade. 
            A boa convivência, a segurança e o respeito mútuo são os pilares para garantir que 
            todos possam desfrutar de um ambiente tranquilo e acolhedor. Este guia foi criado 
            para ajudar você a entender as regras básicas que tornam a vida em comunidade muito melhor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
