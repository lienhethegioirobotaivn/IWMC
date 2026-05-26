export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
}

export interface NewsAuthor {
  avatar: string;
  name: string;
  role: string;
}

export interface NewsACF {
  author: NewsAuthor;
  thumbnail_image: string;
  description: string;
  content: string;
}

export interface RawNews {
  id: number;
  date: string;
  modified: string;
  slug: string;

  title: {
    rendered: string;
  };

  "news-category": number[];

  acf: NewsACF;

  post_views?: number;
}

export interface News {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
  content?: string;
  category: string;
  categorySlug?: string;
  categoryId?: number;
  date: string;
  rawDate: string;
  author?: NewsAuthor;
  views?: number;
}
