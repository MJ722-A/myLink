"use client";

import { MyLinkProfile } from "@/types/link";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface ProfileHeaderProps {
  profile: MyLinkProfile;
  onCopyEmail: (email: string) => void;
}

export function ProfileHeader({ profile, onCopyEmail }: ProfileHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopyEmail(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="bg-white dark:bg-[#1E1E1E] rounded-[24px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(25,31,40,0.04)] dark:shadow-none border border-[#E5E8EB] dark:border-white/10 flex flex-col items-center text-center transition-colors">
      {/* 상단 아바타 및 활동 상태 */}
      <div className="relative mb-4">
        <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-[24px] bg-[#F2F4F6] dark:bg-white/10 border border-[#E5E8EB] dark:border-white/15 flex items-center justify-center text-4xl shadow-inner select-none transition-transform hover:scale-105 duration-200">
          {profile.avatarEmoji || "👨‍💻"}
        </div>
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3182F6] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#3182F6] border-2 border-white dark:border-[#1E1E1E]" />
        </span>
      </div>

      {/* 실시간 협업 상태 뱃지 */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3FF] dark:bg-[#3182F6]/20 text-[#3182F6] text-[12px] font-semibold mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]" />
        {profile.statusText || "새로운 협업에 열려있어요"}
      </div>

      {/* 이름 */}
      <h1 className="text-[24px] sm:text-[26px] font-bold text-[#191F28] dark:text-neutral-100 tracking-[-0.02em] leading-tight">
        {profile.name}
      </h1>

      {/* 역할 / 직무 */}
      <p className="text-[14px] font-medium text-[#3182F6] mt-1 mb-2.5">
        {profile.role}
      </p>

      {/* Bio 한 줄 소개 */}
      <p className="text-[14px] sm:text-[15px] text-[#4E5968] dark:text-neutral-400 leading-[1.6] max-w-[380px] mb-4">
        {profile.bio}
      </p>

      {/* 이메일 원클릭 복사 알약 버튼 */}
      <button
        onClick={handleCopy}
        type="button"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F4F6] hover:bg-[#E5E8EB] dark:bg-white/10 dark:hover:bg-white/15 text-[#333D4B] dark:text-neutral-200 text-[13px] font-medium transition-all active:scale-[0.97] cursor-pointer"
        title="클릭하여 이메일 주소 복사"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#00A854]" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-[#8B95A1] dark:text-neutral-400" />
        )}
        <span className="tabular-nums">{profile.email}</span>
      </button>
    </header>
  );
}
