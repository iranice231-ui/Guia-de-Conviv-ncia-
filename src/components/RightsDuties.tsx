import React from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldCheck } from 'lucide-react';

const rights = [
  "Usar, fruir e livremente dispor das suas unidades.",
  "Usar as partes comuns, conforme a sua destinação, e contanto que não exclua a utilização dos demais compossuidores.",
  "Votar nas deliberações da assembleia e delas participar, estando quite.",
  "Exigir do síndico prestação de contas e esclarecimentos sobre a gestão.",
  "Ter acesso à convenção do condomínio e ao regimento interno.",
  "Denunciar irregularidades ao síndico ou à administradora."
];

const duties = [
  "Contribuir para as despesas do condomínio na proporção das suas frações ideais.",
  "Não realizar obras que comprometam a segurança da edificação.",
  "Não alterar a forma e a cor da fachada, das partes e esquadrias externas.",
  "Dar às suas partes a mesma destinação que tem a edificação (residencial).",
  "Não utilizar as unidades de maneira prejudicial ao sossego, salubridade e segurança dos possuidores, ou aos bons costumes.",
  "Comunicar ao síndico qualquer irregularidade ou dano nas áreas comuns."
];

export default function RightsDuties() {
  return (
    <section id="direitos-deveres" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Direitos e Deveres</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as responsabilidades e os benefícios de ser um condômino.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Direitos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-lg">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Direitos dos Moradores</h3>
            </div>
            
            <ul className="space-y-4">
              {rights.map((right, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Deveres */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-yellow/10 rounded-lg">
                <Scale className="w-8 h-8 text-brand-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Deveres dos Moradores</h3>
            </div>
            
            <ul className="space-y-4">
              {duties.map((duty, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-brand-yellow font-bold mt-0.5">•</span>
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
