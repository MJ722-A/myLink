"use client";

import { useState, useMemo } from "react";
import { useMyLink } from "@/hooks/useMyLink";
import { CATEGORY_FILTERS } from "@/data/initialData";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialBar } from "@/components/SocialBar";
import { CategoryTabs } from "@/components/CategoryTabs";
import { SearchBar } from "@/components/SearchBar";
import { LinkCard } from "@/components/LinkCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Toast } from "@/components/Toast";
import { RotateCcw, Sparkles } from "lucide-react";

export default function HomePage() {
  const { data, isLoaded, recordClick, resetToInitial } = useMyLink();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    showToast("이메일 주소를 복사했어요");
  };

  const handleReset = () => {
    if (confirm("초기 Mock 데이터 상태로 복원하시겠어요?")) {
      resetToInitial();
      showToast("기본 데이터로 초기화했어요");
    }
  };

  // 노출 가능한 링크 목록 필터링
  const visibleLinks = useMemo(() => {
    return data.links.filter((l) => l.isVisible !== false);
  }, [data.links]);

  // 카테고리별 개수 카운트 계산
  const categoryFiltersWithCount = useMemo(() => {
    return CATEGORY_FILTERS.map((cat) => {
      if (cat.key === "all") {
        return { ...cat, count: visibleLinks.length };
      }
      const count = visibleLinks.filter((l) => l.category === cat.key).length;
      return { ...cat, count };
    });
  }, [visibleLinks]);

  // 검색어 및 선택된 카테고리에 따른 필터링
  const filteredLinks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return visibleLinks.filter((link) => {
      // 카테고리 일치 여부
      const matchCategory =
        selectedCategory === "all" || link.category === selectedCategory;

      if (!matchCategory) return false;

      // 검색어 필터링
      if (!q) return true;

      const inTitle = link.title.toLowerCase().includes(q);
      const inDesc = link.description?.toLowerCase().includes(q) ?? false;
      const inTags =
        link.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;

      return inTitle || inDesc || inTags;
    });
  }, [visibleLinks, selectedCategory, searchQuery]);

  // '전체' 탭이면서 검색어가 없을 때 카테고리별 그룹화
  const groupedLinks = useMemo(() => {
    if (selectedCategory !== "all" || searchQuery.trim() !== "") {
      return null;
    }

    const groups: {
      categoryKey: string;
      categoryLabel: string;
      items: typeof visibleLinks;
    }[] = [];

    CATEGORY_FILTERS.filter((c) => c.key !== "all").forEach((cat) => {
      const items = visibleLinks.filter((l) => l.category === cat.key);
      if (items.length > 0) {
        groups.push({
          categoryKey: cat.key,
          categoryLabel: cat.label,
          items,
        });
      }
    });

    return groups;
  }, [visibleLinks, selectedCategory, searchQuery]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#F2F4F6] dark:bg-[#121212] text-[#4E5968] dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-[#3182F6] border-t-transparent rounded-full animate-spin" />
          <span className="text-[14px] font-medium">프로필을 불러오는 중...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-6 sm:py-10 bg-[#F2F4F6] dark:bg-[#121212] text-[#191F28] dark:text-neutral-100 transition-colors duration-200">
      {/* TDS Floating Toast 알림 */}
      <Toast message={toastMessage} />

      {/* 중앙 레이아웃 컨테이너 (최대 너비 480px의 모바일 퍼스트 뷰) */}
      <div className="w-full max-w-[480px] flex flex-col gap-4">
        {/* 최상단 글로벌 컨트롤 바 */}
        <div className="flex items-center justify-between px-1 py-1">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-[15px] tracking-tight text-[#191F28] dark:text-white">
              myLink
            </span>
            <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-[5px] bg-[#E8F3FF] dark:bg-[#3182F6]/20 text-[#3182F6]">
              TDS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              title="데이터 초기화 (LocalStorage 시딩 상태로 복원)"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[12px] font-medium text-[#6B7684] dark:text-neutral-400 hover:text-[#191F28] dark:hover:text-neutral-200 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 transition-all cursor-pointer active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">초기화</span>
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* 1. 프로필 헤더 */}
        <ProfileHeader
          profile={data.profile}
          onCopyEmail={handleCopyEmail}
        />

        {/* 2. 소셜 아이콘 바 */}
        <SocialBar socials={data.socials} />

        {/* 3. 검색 입력창 */}
        <section aria-label="링크 검색" className="pt-1">
          <SearchBar query={searchQuery} onChange={setSearchQuery} />
        </section>

        {/* 4. 카테고리 탭 필터 */}
        <section aria-label="카테고리 필터">
          <CategoryTabs
            categories={categoryFiltersWithCount}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>

        {/* 5. 링크 목록 섹션 */}
        <main className="flex flex-col gap-5 pt-1">
          {/* 그룹화된 뷰 (전체 탭 & 검색어 없을 때) */}
          {groupedLinks ? (
            groupedLinks.map((group) => (
              <section key={group.categoryKey} className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-[14px] font-bold text-[#4E5968] dark:text-neutral-400 flex items-center gap-1.5">
                    <span>{group.categoryLabel}</span>
                    <span className="text-[12px] text-[#8B95A1] dark:text-neutral-500 font-normal">
                      {group.items.length}
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col gap-2.5">
                  {group.items.map((link) => (
                    <LinkCard
                      key={link.id}
                      link={link}
                      onClick={recordClick}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            /* 필터링 또는 검색 결과 리스트 */
            <section className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[13px] font-semibold text-[#6B7684] dark:text-neutral-400">
                  {searchQuery ? `검색 결과 ${filteredLinks.length}개` : `총 ${filteredLinks.length}개의 링크`}
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-[12px] text-[#3182F6] hover:underline cursor-pointer"
                  >
                    검색 초기화
                  </button>
                )}
              </div>

              {filteredLinks.length > 0 ? (
                filteredLinks.map((link) => (
                  <LinkCard
                    key={link.id}
                    link={link}
                    onClick={recordClick}
                  />
                ))
              ) : (
                /* 검색 결과 없음 Empty State */
                <div className="p-8 rounded-[20px] bg-white dark:bg-[#1E1E1E] border border-[#E5E8EB] dark:border-white/10 text-center flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#F2F4F6] dark:bg-white/5 flex items-center justify-center text-xl">
                    🔍
                  </div>
                  <p className="text-[15px] font-bold text-[#191F28] dark:text-neutral-200">
                    찾으시는 링크가 없어요
                  </p>
                  <p className="text-[13px] text-[#8B95A1] dark:text-neutral-400">
                    다른 검색어를 입력하거나 카테고리 필터를 변경해보세요.
                  </p>
                </div>
              )}
            </section>
          )}
        </main>

        {/* 6. 푸터 */}
        <footer className="pt-6 pb-10 text-center flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1 text-[13px] font-semibold text-[#8B95A1] dark:text-neutral-500">
            <span>마이링크</span>
            <span>•</span>
            <span>myLink</span>
          </div>
          <p className="text-[12px] text-[#8B95A1] dark:text-neutral-500">
            Designed with Toss Style & LocalStorage Persistence
          </p>
        </footer>
      </div>
    </div>
  );
}
