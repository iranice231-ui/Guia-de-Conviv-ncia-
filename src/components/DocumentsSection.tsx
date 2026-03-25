import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ScrollText, HardHat } from 'lucide-react';

const documents = [
  {
    title: "Convenção do Condomínio",
    description: "É o documento principal que estabelece as regras gerais do condomínio, como funcionamento, direitos e deveres dos condôminos, uso das áreas comuns e forma de administração.",
    icon: BookOpen
  },
  {
    title: "Regimento Interno",
    description: "Complementa a convenção e trata das regras do dia a dia, como horários, uso de espaços comuns, comportamento e convivência entre moradores.",
    icon: ScrollText
  },
  {
    title: "Normas Construtivas",
    description: "Definem as regras para reformas e modificações nas unidades, garantindo segurança, padronização e evitando prejuízos à estrutura do condomínio.",
    icon: HardHat
  }
];

export default function DocumentsSection() {
  return (
    <section id="documentos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Documentos Oficiais
            </h2>
            <div className="text-lg text-gray-600 max-w-3xl mx-auto space-y-4">
              <p>
                Todos os documentos oficiais do seu condomínio estão disponíveis no Portal do Cliente.
              </p>
              <p>
                É muito importante que você conheça e leia esses documentos, pois eles orientam a convivência, garantem a organização e contribuem para a valorização do patrimônio de todos.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                <doc.icon className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {doc.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {doc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
