import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface RewriteResult {
  versions: {
    text: string;
    variant: string;
  }[];
  scores: {
    humanScore: number;
    clarityScore: number;
    ctaScore: number;
  };
}

export async function rewriteText(
  originalText: string,
  tone: string = "profissional e humano"
): Promise<RewriteResult> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.8,
    messages: [
      {
        role: "system",
        content: `Você é um especialista em copywriting para LinkedIn. 
Seu trabalho é transformar textos genéricos e artificiais em conteúdo que soa genuinamente humano. 

Regras:
- Escreva como uma pessoa real, não como IA
- Use linguagem conversacional e natural
- Mantenha a essência do texto original
- Adicione elementos de storytelling quando possível
- Evite clichês e frases genéricas de IA
- O tom deve ser: ${tone}

Responda EXATAMENTE neste formato JSON (sem markdown):
{
  "versions": [
    { "text": "versão A do texto reescrito", "variant": "A" },
    { "text": "versão B do texto reescrito", "variant": "B" },
    { "text": "versão C do texto reescrito", "variant": "C" }
  ],
  "scores": {
    "humanScore": 0.0 a 1.0,
    "clarityScore": 0.0 a 1.0,
    "ctaScore": 0.0 a 1.0
  }
}

Os scores são para o texto ORIGINAL (antes da reescrita):
- humanScore: quão humano o texto original soa (0 = robótico, 1 = totalmente humano)
- clarityScore: quão claro e direto é (0 = confuso, 1 = cristalino)  
- ctaScore: quão forte é o call-to-action (0 = sem CTA, 1 = CTA irresistível)`,
      },
      {
        role: "user",
        content: `Reescreva este texto para LinkedIn de forma mais humana e engajante:\n\n${originalText}`,
      },
    ],
  });

  const content = response.choices[0]?.message?.content;
  if (!content) throw new Error("Sem resposta da IA");

  try {
    return JSON.parse(content) as RewriteResult;
  } catch {
    throw new Error("Resposta da IA em formato inválido");
  }
}
