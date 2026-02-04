export interface HeaderMenu {
  id: number;
  menu: string;
  toLink: string;
}

export interface Post {
    id: number;
    title: string;
    date: string;
    link: string;
}

export interface BannerItem {
    id: number;
    image: string;
    alt: string;
}