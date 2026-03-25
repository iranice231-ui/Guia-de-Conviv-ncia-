import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const allowedItems = [
  "Utilizar as áreas comuns de lazer nos horários estabelecidos.",
  "Realizar mudanças e reformas nos horários permitidos (segunda a sexta, das 8h às 17h; sábados, das 8h às 12h).",
  "Ter animais de estimação de pequeno porte, desde que não perturbem o sossego e a segurança dos demais moradores.",
  "Estacionar veículos apenas nas vagas destinadas à sua unidade.",
  "Descartar o lixo devidamente ensacado nas lixeiras do condomínio.",
  "Participar das assembleias e votar nas decisões do condomínio.",
  "Receber visitantes, desde que devidamente identificados na portaria.",
  "Manter a fachada da sua unidade limpa e conservada."
];

export default function Allowed() {
  return (
    <section id="permitido" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O que é Permitido</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Boas práticas que garantem a harmonia e o bem-estar de todos no condomínio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {allowedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
