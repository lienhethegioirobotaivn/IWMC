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
  date: string;
  modified: string;
  slug: string;

  title: {
    rendered: string;
  };

  categories: NewsCategory[];

  acf: NewsACF;

  post_views?: number;
}
