"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
}

export function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8B95A1] dark:text-neutral-500">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="링크 제목, 설명 또는 태그로 검색..."
        className="w-full h-11 pl-10 pr-9 rounded-[16px] bg-white dark:bg-[#1E1E1E] border border-[#E5E8EB] dark:border-white/10 text-[14px] text-[#191F28] dark:text-neutral-100 placeholder-[#8B95A1] dark:placeholder-neutral-500 focus:outline-none focus:border-[#3182F6] dark:focus:border-[#3182F6] shadow-[0_2px_8px_rgba(25,31,40,0.02)] transition-colors"
      />
      {query && (
        <button
          onClick={() => onChange("")}
          type="button"
          aria-label="검색어 지우기"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8B95A1] hover:text-[#191F28] dark:text-neutral-500 dark:hover:text-neutral-300 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
