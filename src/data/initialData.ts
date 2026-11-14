import { MyLinkStoreData } from "@/types/link";
import mockData from "@/mock/links.json";

export const INITIAL_STORE_DATA: MyLinkStoreData = {
  version: "1.0",
  profile: {
    name: "홍길동",
    role: "예비 풀스택 개발자 · 대학생",
    statusText: "새로운 협업에 열려있어요",
    bio: "복잡한 문제를 직관적인 사용자 경험으로 풀어내는 개발자 홍길동이에요. AI 도구를 적극 활용해 아이디어를 실제 프로덕트로 빠르게 구현하는 과정을 즐겨요.",
    email: "gildong.hong@example.com",
    avatarEmoji: "👨‍💻",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      iconName: "github",
      label: "오픈소스 저장소",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      iconName: "linkedin",
      label: "커리어 및 네트워크",
    },
    {
      name: "Velog",
      url: "https://velog.io",
      iconName: "blog",
      label: "기술 블로그",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com",
      iconName: "twitter",
      label: "테크 인사이트",
    },
  ],
  links: mockData.data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    url: item.url,
    category: item.category,
    categoryLabel: item.categoryLabel,
    emoji: item.emoji,
    badge: item.badge
      ? {
          text: item.badge.text,
          variant: item.badge.variant as "primary" | "secondary" | "accent",
        }
      : null,
    tags: item.tags,
    isHighlighted: item.isHighlighted,
    clicks: item.clicks,
    order: item.order,
    openInNewTab: item.openInNewTab,
    isVisible: true,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  })),
};

export const CATEGORY_FILTERS = [
  { key: "all", label: "전체" },
  { key: "project", label: "프로젝트" },
  { key: "career", label: "이력서·경력" },
  { key: "social", label: "소셜·채널" },
  { key: "article", label: "글·아티클" },
  { key: "contact", label: "연락처" },
];
