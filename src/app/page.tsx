"use client";

import { useState } from "react";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleCopyEmail = () => {
    const email = "gildong.hong@example.com";
    navigator.clipboard.writeText(email);
    showToast("이메일 주소를 복사했어요");
  };

  const projects = [
    {
      title: "MyLink",
      category: "개인 프로젝트",
      desc: "Next.js 16과 Tailwind로 구현한 인터랙티브 프로필 링크 서비스예요.",
      tags: ["Next.js", "React 19", "TypeScript"],
      url: "https://github.com",
    },
    {
      title: "AI 바이브 코딩 플레이그라운드",
      category: "연구 & 실험",
      desc: "LLM을 활용해 아이디어를 실제 웹 프로덕트로 빠르게 빌드하는 프로젝트예요.",
      tags: ["AI Agent", "Next.js", "API"],
      url: "https://github.com",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      label: "코드 저장소",
      icon: (
        <svg className="w-5 h-5 text-[#191F28]" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "Tech Blog",
      url: "https://velog.io",
      label: "기술 블로그",
      icon: (
        <svg className="w-5 h-5 text-[#191F28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-8 sm:py-16 bg-[#F2F4F6] text-[#191F28]">
      {/* TDS Floating Toast 알림 */}
      {toastMessage && (
        <div className="fixed top-6 z-50 transition-all duration-300 ease-out">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-[14px] bg-[#191F28] text-white shadow-[0_8px_24px_rgba(25,31,40,0.16)]">
            <div className="w-5 h-5 rounded-full bg-[#00A854] flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[14px] font-medium tracking-tight">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* 중앙 메인 컨테이너 (TDS 기반 단일 컬럼 모바일 퍼스트 레이아웃) */}
      <main className="w-full max-w-[460px] flex flex-col gap-4">

        {/* 1. 상단 프로필 헤더 카드 */}
        <section className="bg-white rounded-[24px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(25,31,40,0.04)] border border-[#E5E8EB]">
          <div className="flex items-start justify-between mb-5">
            {/* 미니멀 아바타 */}
            <div className="w-16 h-16 rounded-[20px] bg-[#F2F4F6] border border-[#E5E8EB] flex items-center justify-center text-3xl select-none">
              👨‍💻
            </div>

            {/* 현재 협업/학습 가능 상태 뱃지 (TDS blue-50 + blue-500) */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3FF] text-[#3182F6] text-[13px] font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3182F6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3182F6]" />
              </span>
              새로운 협업에 열려있어요
            </div>
          </div>

          {/* 이름 & 포지션 */}
          <h1 className="text-[26px] font-bold text-[#191F28] tracking-[-0.02em] leading-tight">
            홍길동
          </h1>
          <p className="text-[15px] font-medium text-[#3182F6] mt-1 mb-3">
            예비 풀스택 개발자 · 대학생
          </p>

          {/* 한 줄 가치 제안 카피 (TDS 해요체) */}
          <p className="text-[15px] text-[#4E5968] leading-[1.6]">
            복잡한 문제를 직관적인 사용자 경험으로 풀어내는 개발자 홍길동이에요. AI 도구를 적극 활용해 아이디어를 실제 프로덕트로 빠르게 구현하는 과정을 즐겨요.
          </p>
        </section>

        {/* 2. Bento 그리드: 핵심 요약 정보 (Quick Overview) */}
        <section className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[20px] p-4 border border-[#E5E8EB] shadow-[0_2px_8px_rgba(25,31,40,0.03)] flex flex-col justify-between">
            <span className="text-[12px] font-medium text-[#8B95A1]">전공 및 상태</span>
            <span className="text-[15px] font-bold text-[#191F28] mt-1">컴퓨터공학 학부생</span>
          </div>
          <div className="bg-white rounded-[20px] p-4 border border-[#E5E8EB] shadow-[0_2px_8px_rgba(25,31,40,0.03)] flex flex-col justify-between">
            <span className="text-[12px] font-medium text-[#8B95A1]">활동 지역</span>
            <span className="text-[15px] font-bold text-[#191F28] mt-1">서울 · 원격 협업</span>
          </div>
        </section>

        {/* 3. 보유 기술 스택 (Tech Stack) */}
        <section className="bg-white rounded-[24px] p-6 border border-[#E5E8EB] shadow-[0_2px_12px_rgba(25,31,40,0.04)]">
          <h2 className="text-[16px] font-bold text-[#191F28] mb-3">
            다룰 수 있는 기술이에요
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "AI Vibe Coding", "Git / GitHub"].map((tech) => (
              <span
                key={tech}
                className="text-[13px] font-medium text-[#333D4B] bg-[#F2F4F6] px-3.5 py-1.5 rounded-full hover:bg-[#E5E8EB] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 4. 대표 프로젝트 (Projects Showcase) */}
        <section className="bg-white rounded-[24px] p-6 border border-[#E5E8EB] shadow-[0_2px_12px_rgba(25,31,40,0.04)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-bold text-[#191F28]">
              만든 프로젝트예요
            </h2>
            <span className="text-[13px] text-[#8B95A1] font-medium">최신순</span>
          </div>

          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-[18px] bg-[#F9FAFB] hover:bg-[#F2F4F6] border border-[#F2F4F6] transition-all flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#3182F6] bg-[#E8F3FF] px-2 py-0.5 rounded-[6px]">
                    {project.category}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#B0B8C1] group-hover:text-[#191F28] group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#191F28] group-hover:text-[#3182F6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#4E5968] leading-[1.5]">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium text-[#6B7684] bg-white border border-[#E5E8EB] px-2 py-0.5 rounded-[6px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. 소셜 채널 & 링크 (TDS ListRow 패턴) */}
        <section className="bg-white rounded-[24px] p-5 border border-[#E5E8EB] shadow-[0_2px_12px_rgba(25,31,40,0.04)]">
          <h2 className="text-[16px] font-bold text-[#191F28] mb-3 px-1">
            활동 기록 둘러보기
          </h2>
          <div className="flex flex-col gap-1">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-[16px] hover:bg-[#F9FAFB] active:bg-[#F2F4F6] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-[#F2F4F6] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[15px] font-semibold text-[#191F28] group-hover:text-[#3182F6] transition-colors">
                      {item.name}
                    </span>
                    <p className="text-[12px] text-[#8B95A1]">{item.label}</p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-[#B0B8C1] group-hover:text-[#191F28] group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* 6. 연락하기 (Primary Action CTA) */}
        <section className="bg-white rounded-[24px] p-6 border border-[#E5E8EB] shadow-[0_2px_12px_rgba(25,31,40,0.04)] flex flex-col gap-3">
          <div>
            <h2 className="text-[17px] font-bold text-[#191F28]">
              함께 이야기 나눠봐요
            </h2>
            <p className="text-[13px] text-[#6B7684] mt-1">
              새로운 프로젝트 제안이나 커피챗은 언제든 환영해요.
            </p>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full h-[52px] rounded-[16px] bg-[#3182F6] hover:bg-[#2575EB] active:bg-[#1B64DA] text-white font-bold text-[15px] flex items-center justify-center gap-2 transition-all shadow-[0_4px_12px_rgba(49,130,246,0.2)] cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <span>이메일 주소 복사하기</span>
          </button>
        </section>

        {/* 7. 미니멀 푸터 */}
        <footer className="py-6 text-center">
          <p className="text-[12px] text-[#8B95A1]">
            © 2026 홍길동 · Next.js & TDS 기반으로 정성껏 만들었어요
          </p>
        </footer>
      </main>
    </div>
  );
}
