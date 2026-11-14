export type LinkCategory =
  | "all"
  | "project"
  | "career"
  | "social"
  | "article"
  | "contact"
  | string;

export interface CategoryInfo {
  key: string;
  label: string;
  count?: number;
}

export interface LinkBadge {
  text: string;
  variant?: "primary" | "secondary" | "accent" | "default";
}

export interface LinkItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  category: string;
  categoryLabel?: string;
  emoji?: string;
  icon?: string;
  badge?: LinkBadge | null;
  tags?: string[];
  isHighlighted?: boolean;
  clicks?: number;
  order?: number;
  openInNewTab?: boolean;
  isVisible?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface MyLinkProfile {
  name: string;
  role: string;
  statusText: string;
  bio: string;
  email: string;
  avatarEmoji?: string;
  avatarUrl?: string;
}

export interface SocialLinkItem {
  name: string;
  url: string;
  iconName: "github" | "linkedin" | "blog" | "twitter" | "email" | "globe";
  label: string;
}

export interface MyLinkStoreData {
  version: string;
  profile: MyLinkProfile;
  socials: SocialLinkItem[];
  links: LinkItem[];
}
