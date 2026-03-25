import React from 'react';
import { motion } from 'motion/react';
import { XCircle } from 'lucide-react';

const notAllowedItems = [
  "Fazer barulho excessivo, especialmente entre 22h e 8h (Lei do Silêncio).",
  "Alterar a fachada da unidade sem aprovação prévia em assembleia.",
  "Estacionar veículos em áreas comuns ou vagas de outros moradores.",
  "Deixar lixo fora das lixeiras apropriadas ou em áreas comuns.",
  "Permitir que animais de estimação circulem soltos pelas áreas comuns.",
  "Realizar obras e reformas fora dos horários permitidos.",
  "Utilizar as áreas de lazer para fins comerciais ou eventos não autorizados.",
  "Desrespeitar funcionários do condomínio ou outros moradores."
];

export default function NotAllowed() {
  return (
    <section id="nao-permitido" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O que não é Permitido</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Práticas proibidas para manter a ordem, segurança e o respeito mútuo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {notAllowedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-red-50/30 p-6 rounded-xl shadow-sm border border-red-100 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mt-1">
                <XCircle className="w-6 h-6 text-brand-red" />
              </div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
