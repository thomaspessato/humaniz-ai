"use client";

import { useState } from "react";

const tabs = [
  {
    id: "humanize",
    label: "Humanizar",
    icon: "✦",
    before: `Estou feliz em anunciar que nossa empresa atingiu 10.000 clientes. O sucesso é resultado do trabalho duro de toda a equipe. Obrigado.`,
    after: `10.000 clientes.

Quando a gente começou, o primeiro cliente era meu primo (obrigado, Marcos).

Hoje olho pra esse número e lembro de cada madrugada, cada "quase desistir" e cada pessoa do time que segurou junto.

Não é um post pra se gabar — é um obrigado de verdade.`,
    scores: { human: 94, clarity: 91, cta: 78 },
  },
  {
    id: "engage",
    label: "Engajar",
    icon: "◆",
    before: `A inteligência artificial vai mudar tudo. As empresas que não se adaptarem vão ficar para trás. É importante começar a usar IA agora.`,
    after: `85% das empresas do Fortune 500 já usam IA no dia a dia.

Mas aqui está o que ninguém fala:

Não é sobre USAR IA. É sobre usar IA para resolver problemas REAIS.

Vi empresas gastarem milhões em chatbots que ninguém usa.
E startups de 3 pessoas automatizarem processos que economizam 200h/mês.

A diferença? Contexto > Tecnologia.

Qual problema real você resolveria com IA?`,
    scores: { human: 96, clarity: 93, cta: 91 },
  },
  {
    id: "recruit",
    label: "Recrutar",
    icon: "●",
    before: `Estamos contratando desenvolvedores para trabalhar com React e Node.js. Se você tem experiência, entre em contato.`,
    after: `Procurando devs que amam construir produtos (não só código).

Na @MinhaStartup, estamos montando o time que vai escalar de 10k para 1M de usuários.

O que oferecemos:
🏠 100% remoto
💰 Salário competitivo + equity
📚 Budget de aprendizado ilimitado

Stack: React + Node.js + PostgreSQL

Não precisa ser sênior. Precisa ter fome de aprender.

Comente "EU" que mando o link →`,
    scores: { human: 89, clarity: 87, cta: 95 },
  },
];

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 w-16 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${value}%`,
            background:
              value >= 90
                ? "linear-gradient(90deg, #f97316, #ea580c)"
                : value >= 80
                ? "linear-gradient(90deg, #fb923c, #f97316)"
                : "linear-gradient(90deg, #fdba74, #fb923c)",
          }}
        />
      </div>
      <span className="text-xs font-mono font-medium text-gray-700 w-8 text-right">
        {value}
      </span>
    </div>
  );
}

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-gray-50 rounded-xl p-1 w-fit mx-auto">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === i
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className={`text-xs ${activeTab === i ? "text-orange-500" : ""}`}>
              {t.icon}
            </span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Demo Card */}
      <div className="bg-gray-950 rounded-2xl p-1.5 sm:p-2 orange-glow">
        <div className="bg-white rounded-xl overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-md font-mono">
                humaniz.ai/editor
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {/* Before */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Original
                  </span>
                </div>
                <span className="text-[10px] font-mono text-red-400 bg-red-50 px-2 py-0.5 rounded-full">
                  Score: baixo
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line transition-all duration-500">
                {tab.before}
              </p>
            </div>

            {/* After */}
            <div className="p-5 sm:p-6 bg-orange-50/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
                    Humanizado
                  </span>
                </div>
                <span className="text-[10px] font-mono text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                  Score: {tab.scores.human}
                </span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line transition-all duration-500">
                {tab.after}
              </p>
            </div>
          </div>

          {/* Scores Bar */}
          <div className="px-5 sm:px-6 py-4 border-t border-gray-100 bg-gray-50/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ScoreBar label="Humano" value={tab.scores.human} />
              <ScoreBar label="Clareza" value={tab.scores.clarity} />
              <ScoreBar label="CTA" value={tab.scores.cta} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
