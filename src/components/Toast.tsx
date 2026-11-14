"use client";

import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out animate-in fade-in slide-in-from-top-4">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-[16px] bg-[#191F28] text-white dark:bg-white dark:text-[#191F28] shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
        <CheckCircle2 className="w-4 h-4 text-[#00A854] shrink-0" />
        <span className="text-[14px] font-medium tracking-tight whitespace-nowrap">
          {message}
        </span>
      </div>
    </div>
  );
}
