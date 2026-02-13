"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que é o Humaniz.ai?",
    a: "O Humaniz.ai é uma ferramenta de IA que transforma textos genéricos e robóticos em conteúdo autêntico e humano para LinkedIn. Cole seu rascunho, receba 3 versões humanizadas e publique em segundos.",
  },
  {
    q: "Preciso de cartão de crédito para começar?",
    a: "Não. O plano gratuito não exige cartão de crédito. Você pode criar sua conta e começar a usar imediatamente com 5 reescritas por mês.",
  },
  {
    q: "Como funciona o score de humanização?",
    a: "Nossa IA analisa padrões linguísticos que detectores de IA procuram — repetição, formalidade excessiva, falta de personalidade. O score vai de 0 a 100, onde 100 = indistinguível de texto humano.",
  },
  {
    q: "A IA vai copiar meu estilo de escrita?",
    a: "Sim. Com o tempo, o Humaniz.ai aprende suas preferências de tom, vocabulário e estrutura. Quanto mais você usa, mais os textos soam como você.",
  },
  {
    q: "Posso agendar posts diretamente pelo Humaniz.ai?",
    a: "Sim. No plano Pro, você pode agendar posts para publicação automática no LinkedIn. Basta escolher a data e hora — nós cuidamos do resto.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Absolutamente. Seus textos são processados de forma segura e nunca são compartilhados com terceiros. Usamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-xl transition-all duration-300 ${
            openIndex === i
              ? "border-orange-200 bg-orange-50/30"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span
              className={`text-sm font-medium transition-colors ${
                openIndex === i ? "text-gray-900" : "text-gray-700"
              }`}
            >
              {faq.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-48 pb-4" : "max-h-0"
            }`}
          >
            <p className="px-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
