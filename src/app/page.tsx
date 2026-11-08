"use client";

import { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleCopyEmail = () => {
    const email = "gildong.hong@example.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      title: "GitHub 저장소",
      desc: "공부한 코드와 프로젝트 구경하기",
      url: "https://github.com",
      badge: "Code",
      badgeBg: "bg-[#e0e7ff]",
      iconBg: "bg-[#c7d2fe]",
      icon: (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      title: "기술 블로그",
      desc: "매일 배우는 바이브 코딩 기록 및 TIL",
      url: "https://velog.io",
      badge: "Blog",
      badgeBg: "bg-[#bbf7d0]",
      iconBg: "bg-[#86efac]",
      icon: (
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "MyLink 프로젝트",
      desc: "직접 구현해 본 나만의 링크 트리 웹서비스",
      url: "#",
      badge: "Project",
      badgeBg: "bg-[#fed7aa]",
      iconBg: "bg-[#fdba74]",
      icon: (
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  const skills = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "AI Vibe Coding",
    "Git & GitHub",
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-[#faf6ee] text-black selection:bg-black selection:text-[#fef08a]">
      {/* 배경 도트 그리드 패턴 & 레트로 네오브루탈리즘 장식 요소 */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#000000 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* 배경 장식 스티커들 */}
      <div className="hidden md:block fixed top-10 left-12 rotate-[-8deg] pointer-events-none z-0">
        <div className="bg-[#a7f3d0] border-[3px] border-black rounded-[12px] px-4 py-2 font-black text-sm shadow-[4px_4px_0px_0px_#000000]">
          ✦ VIBE CODING ✦
        </div>
      </div>
      <div className="hidden md:block fixed bottom-12 right-12 rotate-[6deg] pointer-events-none z-0">
        <div className="bg-[#fbcfe8] border-[3px] border-black rounded-[12px] px-4 py-2 font-black text-sm shadow-[4px_4px_0px_0px_#000000]">
          ★ CREATIVE DEV ★
        </div>
      </div>
      <div className="hidden lg:block fixed top-24 right-20 rotate-[12deg] pointer-events-none z-0">
        <div className="w-10 h-10 bg-[#fed7aa] border-[3px] border-black rounded-[8px] shadow-[4px_4px_0px_0px_#000000] flex items-center justify-center font-black">
          ⚡
        </div>
      </div>

      {/* ========================================================
          프로필 카드 (Neobrutalism Profile Card)
          - 스타일 가이드:
            * 굵은 검은 테두리: 3px solid black
            * 하드 그림자: 6px 6px 0 black (블러 없음)
            * 배경색: 밝은 노란색 (#fef08a)
            * 둥근모서리: 12px
            * 패딩: 24px (모바일 16px), 중앙 정렬
          - 반응형 규칙:
            * 모바일 (360px-767px): 카드너비 100%, 패딩 16px
            * 태블릿 (768px-1023px): 카드너비 80%, 최대 480px, 패딩 24px
            * 데스크탑 (1024px~): 카드너비 400px 고정, 패딩 24px
         ======================================================== */}
      <main className="relative z-10 w-full p-[16px] md:w-[80%] md:max-w-[480px] md:p-[24px] lg:w-[400px] lg:max-w-[400px] bg-[#fef08a] border-[3px] border-black rounded-[12px] shadow-[6px_6px_0px_0px_#000000] flex flex-col items-center text-center">
        
        {/* 프로필 이미지 섹션
            - 형태 : 원형 (border-radius: 50%)
            - 크기 : 120px x 120px
            - 테두리 : 3px solid black
            - 하드 그림자 : 4px 4px 0 black
        */}
        <div className="relative mb-5">
          <div className="w-[120px] h-[120px] rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] bg-white flex items-center justify-center overflow-hidden">
            <span className="text-6xl select-none" role="img" aria-label="profile emoji">
              👨‍💻
            </span>
          </div>

          {/* 활동 상태 뱃지 (Neobrutalism 태그) */}
          <span className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#86efac] border-[2.5px] border-black shadow-[2px_2px_0px_0px_#000000]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
            </span>
            코딩 중
          </span>
        </div>

        {/* 이름 & 소속 */}
        <h1 className="text-3xl font-black text-black tracking-tight mb-2">
          홍길동
        </h1>
        <div className="inline-flex items-center gap-1.5 bg-white border-[2.5px] border-black rounded-[8px] px-3 py-1 text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0px_0px_#000000] mb-4">
          <span>🌱</span> 예비 풀스택 개발자 · 대학생
        </div>

        {/* 소개글 박스 */}
        <div className="bg-white border-[3px] border-black rounded-[12px] p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#000000] w-full mb-4 text-center">
          <p className="text-sm sm:text-base text-black font-black leading-snug">
            &ldquo;안녕하세요 바이브 코딩을 배우고 있는 대학생 입니다&rdquo;
          </p>
          <p className="text-xs text-neutral-800 font-medium mt-1.5 leading-relaxed">
            AI 도구를 적극 활용하여 상상을 현실의 프로덕트로 빠르게 구현하는 과정을 즐깁니다.
          </p>
        </div>

        {/* 기술 스택 태그 */}
        <div className="w-full mb-5">
          <div className="flex flex-wrap justify-center gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-black px-2.5 py-1 rounded-[8px] bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000000] transition-all cursor-default"
              >
                #{skill}
              </span>
            ))}
          </div>
        </div>

        {/* 주요 링크 목록 */}
        <div className="w-full flex flex-col gap-3 mb-5">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 sm:p-3.5 bg-white border-[3px] border-black rounded-[12px] shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000000] transition-all"
            >
              <div className="flex items-center gap-3 text-left">
                <div
                  className={`w-9 h-9 rounded-[8px] border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000000] ${link.iconBg}`}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm text-black group-hover:underline">
                      {link.title}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-[5px] border-[1.5px] border-black font-black ${link.badgeBg}`}
                    >
                      {link.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-700 font-medium mt-0.5">
                    {link.desc}
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-black bg-[#faf6ee] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shrink-0 ml-2">
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* 인터랙티브 액션 섹션: 응원하기 & 이메일 복사 버튼 */}
        <div className="flex items-center justify-center gap-2.5 w-full mb-4">
          <button
            onClick={handleLike}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-[12px] text-xs sm:text-sm font-black border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000000] transition-all cursor-pointer ${
              hasLiked ? "bg-[#fda4af]" : "bg-[#fbcfe8] hover:bg-[#f472b6]"
            }`}
          >
            <span className={hasLiked ? "scale-125 transition-transform" : ""}>❤️</span>
            <span>응원하기</span>
            <span className="bg-white border-2 border-black px-2 py-0.5 rounded-[6px] text-xs font-black shadow-[1px_1px_0px_0px_#000000]">
              {likes}
            </span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-[12px] text-xs sm:text-sm font-black border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000000] bg-[#bae6fd] hover:bg-[#7dd3fc] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-950 font-black">복사완료!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>이메일 복사</span>
              </>
            )}
          </button>
        </div>

        {/* 하단 푸터 */}
        <footer className="pt-2 text-center">
          <p className="text-[11px] font-black text-black">
            © 2026 홍길동 · Neobrutalism Profile
          </p>
        </footer>
      </main>
    </div>
  );
}
