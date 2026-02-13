"use client";

import { cn } from "@/lib/utils";

interface ScoreBadgeProps {
  label: string;
  score: number;
  className?: string;
}

export function ScoreBadge({ label, score, className }: ScoreBadgeProps) {
  const percentage = Math.round(score * 100);
  const color =
    percentage >= 80
      ? "bg-green-100 text-green-700 ring-green-600/20"
      : percentage >= 60
        ? "bg-blue-100 text-blue-700 ring-blue-600/20"
        : percentage >= 40
          ? "bg-yellow-100 text-yellow-700 ring-yellow-600/20"
          : "bg-red-100 text-red-700 ring-red-600/20";

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </span>
      <span
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset",
          color
        )}
      >
        {percentage}%
      </span>
    </div>
  );
}
