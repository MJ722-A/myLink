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
      desc: "공부한 코드와 진행 중인 프로젝트 구경하기",
      url: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
      badge: "Code",
      badgeColor: "bg-slate-800 text-slate-200 border-slate-700",
    },
    {
      title: "기술 블로그",
      desc: "매일 배우는 바이브 코딩 기록 및 TIL",
      url: "https://velog.io",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      badge: "Blog",
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-800/50",
    },
    {
      title: "MyLink 프로젝트",
      desc: "직접 구현해 본 나만의 링크 트리 웹서비스",
      url: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      badge: "Project",
      badgeColor: "bg-indigo-950/80 text-indigo-300 border-indigo-800/50",
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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-gradient-to-br from-slate-950 via-[#0d1322] to-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* 배경 장식 원형 조명 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 중앙 메인 컨테이너 */}
      <main className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
        {/* 상단 프로필 이미지 & 상태 태그 */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md group-hover:opacity-100 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-sky-400 to-purple-500 shadow-xl">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl sm:text-5xl select-none shadow-inner border border-white/10">
              👨‍💻
            </div>
          </div>
          {/* 활동 중 뱃지 */}
          <span className="absolute bottom-1 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-emerald-400 border border-emerald-500/30 shadow-md backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            코딩 중
          </span>
        </div>

        {/* 이름 & 소속 */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          홍길동
        </h1>
        <p className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-4">
          <span>🌱</span> 예비 풀스택 개발자 · 대학생
        </p>

        {/* 소개글 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-lg max-w-md w-full mb-6 text-center">
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
            &ldquo;안녕하세요 바이브 코딩을 배우고 있는 대학생 입니다&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            AI 도구를 적극 활용하여 상상을 현실의 프로덕트로 빠르게 구현하는 과정을 즐깁니다.
          </p>
        </div>

        {/* 기술 스택 태그 */}
        <div className="w-full mb-8">
          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800 shadow-sm hover:border-slate-700 hover:text-white transition-colors"
              >
                #{skill}
              </span>
            ))}
          </div>
        </div>

        {/* 주요 링크 목록 */}
        <div className="w-full flex flex-col gap-3.5 mb-8">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center gap-3.5 text-left">
                <div className="p-2.5 rounded-lg bg-slate-800/80 text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-600/20 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {link.title}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{link.desc}</p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* 인터랙티브 액션 섹션: 응원하기 & 이메일 복사 */}
        <div className="flex items-center justify-center gap-3 w-full max-w-sm mb-10">
          <button
            onClick={handleLike}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 border ${
              hasLiked
                ? "bg-rose-500/20 border-rose-500/40 text-rose-300 scale-95"
                : "bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-200 hover:border-rose-500/30"
            }`}
          >
            <span className={hasLiked ? "scale-125 transition-transform" : ""}>
              ❤️
            </span>
            <span>응원하기</span>
            <span className="text-xs bg-slate-800/80 px-2 py-0.5 rounded-full font-mono text-slate-300">
              {likes}
            </span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-slate-200 transition-all duration-200"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">복사완료!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>이메일 복사</span>
              </>
            )}
          </button>
        </div>

        {/* 하단 푸터 */}
        <footer className="text-xs text-slate-500 space-y-1">
          <p>© 2026 홍길동. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            Crafted with Next.js & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}

