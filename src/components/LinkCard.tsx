"use client";

import { LinkItem } from "@/types/link";
import { ChevronRight, ExternalLink } from "lucide-react";

interface LinkCardProps {
  link: LinkItem;
  onClick: (id: string) => void;
}

export function LinkCard({ link, onClick }: LinkCardProps) {
  const getBadgeStyle = (variant?: string) => {
    switch (variant) {
      case "accent":
        return "bg-[#FEEAE8] text-[#F04452] dark:bg-[#F04452]/20 dark:text-[#FF7070]";
      case "primary":
        return "bg-[#E8F3FF] text-[#3182F6] dark:bg-[#3182F6]/20 dark:text-[#5B9DF8]";
      case "secondary":
        return "bg-[#E8F7EE] text-[#00A854] dark:bg-[#00A854]/20 dark:text-[#34D399]";
      default:
        return "bg-[#F2F4F6] text-[#4E5968] dark:bg-white/10 dark:text-neutral-300";
    }
  };

  const handleClick = () => {
    onClick(link.id);
  };

  const formatClicks = (clicks?: number) => {
    if (!clicks) return null;
    if (clicks >= 1000) {
      return `${(clicks / 1000).toFixed(1)}k`;
    }
    return `${clicks}`;
  };

  return (
    <a
      href={link.url}
      target={link.openInNewTab !== false ? "_blank" : "_self"}
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group relative flex items-start justify-between p-4 sm:p-4.5 rounded-[20px] bg-white dark:bg-[#1E1E1E] border transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-[0_2px_8px_rgba(25,31,40,0.03)] hover:shadow-[0_6px_20px_rgba(25,31,40,0.08)] dark:shadow-none hover:border-[#3182F6]/30 ${
        link.isHighlighted
          ? "border-[#3182F6]/40 dark:border-[#3182F6]/40"
          : "border-[#E5E8EB] dark:border-white/10"
      }`}
    >
      <div className="flex items-start gap-3.5 min-w-0 flex-1 pr-2">
        {/* 이모지 컨테이너 */}
        <div className="w-11 h-11 rounded-[14px] bg-[#F9FAFB] dark:bg-white/5 border border-[#E5E8EB]/70 dark:border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
          {link.emoji || "🔗"}
        </div>

        {/* 텍스트 정보 */}
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          {/* 타이틀 및 뱃지 */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-[15px] sm:text-[16px] font-bold text-[#191F28] dark:text-neutral-100 group-hover:text-[#3182F6] dark:group-hover:text-[#5B9DF8] transition-colors leading-snug">
              {link.title}
            </h3>
            {link.badge && (
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-[6px] shrink-0 tracking-tight ${getBadgeStyle(
                  link.badge.variant
                )}`}
              >
                {link.badge.text}
              </span>
            )}
          </div>

          {/* 상세 설명 */}
          {link.description && (
            <p className="text-[13px] text-[#4E5968] dark:text-neutral-400 leading-[1.5] line-clamp-2">
              {link.description}
            </p>
          )}

          {/* 태그 목록 & 클릭수 */}
          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            {link.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-[#6B7684] dark:text-neutral-400 bg-[#F2F4F6] dark:bg-white/5 px-2 py-0.5 rounded-[5px]"
              >
                {tag}
              </span>
            ))}
            {link.clicks !== undefined && link.clicks > 0 && (
              <span className="text-[11px] text-[#8B95A1] dark:text-neutral-500 tabular-nums ml-auto hidden sm:inline-block">
                {formatClicks(link.clicks)}회 클릭
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 우측 액션 아이콘 */}
      <div className="shrink-0 pt-1 text-[#B0B8C1] dark:text-neutral-500 group-hover:text-[#3182F6] dark:group-hover:text-[#5B9DF8] group-hover:translate-x-0.5 transition-all">
        <ChevronRight className="w-5 h-5" />
      </div>
    </a>
  );
}
