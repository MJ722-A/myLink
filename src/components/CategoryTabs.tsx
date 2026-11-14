"use client";

import { useId } from "react";

interface CategoryTabsProps {
  categories: { key: string; label: string; count: number }[];
  activeCategory: string;
  onSelectCategory: (key: string) => void;
}

export function CategoryTabs({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-1">
      <div className="flex items-center gap-1.5 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              type="button"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[14px] text-[13px] font-semibold transition-all duration-150 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-[#3182F6] text-white shadow-[0_2px_8px_rgba(49,130,246,0.25)]"
                  : "bg-white dark:bg-[#1E1E1E] text-[#6B7684] dark:text-neutral-400 hover:text-[#191F28] dark:hover:text-neutral-200 border border-[#E5E8EB] dark:border-white/10"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full tabular-nums font-medium ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#F2F4F6] dark:bg-white/10 text-[#8B95A1] dark:text-neutral-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
