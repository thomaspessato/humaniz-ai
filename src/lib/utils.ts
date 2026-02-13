import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function scoreToLabel(score: number): string {
  if (score >= 0.8) return "Excelente";
  if (score >= 0.6) return "Bom";
  if (score >= 0.4) return "Regular";
  return "Precisa melhorar";
}

export function scoreToColor(score: number): string {
  if (score >= 0.8) return "text-green-500";
  if (score >= 0.6) return "text-blue-500";
  if (score >= 0.4) return "text-yellow-500";
  return "text-red-500";
}

export function truncate(str: string, length: number = 100): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "…";
}
