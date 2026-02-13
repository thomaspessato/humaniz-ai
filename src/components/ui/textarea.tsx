"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  charCount?: boolean;
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, charCount, maxLength, className, value, ...props }, ref) => {
    const length = typeof value === "string" ? value.length : 0;

    return (
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          {label && (
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
          )}
          {charCount && maxLength && (
            <span
              className={cn(
                "text-xs",
                length > maxLength * 0.9 ? "text-red-500" : "text-gray-400"
              )}
            >
              {length}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          value={value}
          maxLength={maxLength}
          className={cn(
            "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 resize-none",
            "focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500",
            "disabled:bg-gray-50 disabled:text-gray-500",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
