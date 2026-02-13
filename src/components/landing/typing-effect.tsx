"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Estou feliz em anunciar minha promoção...",
  "A IA vai transformar o mercado...",
  "Estamos contratando desenvolvedores...",
  "Dicas para ser mais produtivo...",
];

export function TypingEffect() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentChar < phrase.length) {
            setCurrentChar((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentChar > 0) {
            setCurrentChar((c) => c - 1);
          } else {
            setIsDeleting(false);
            setCurrentPhrase((p) => (p + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentPhrase]);

  return (
    <span className="text-gray-400">
      {phrases[currentPhrase].slice(0, currentChar)}
      <span className="typing-cursor" />
    </span>
  );
}
