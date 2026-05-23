export interface News {
  id: number;
  date: string;
  modified: string;
  slug: string;

  title: {
    rendered: string;
  };

  post_views?: number | string;

  acf: {
    author: {
      avatar: string;
      name: string;
      role: string;
    };
    thumbnail_image: string;
    description: string;
    content: string;
    topic: string;
  };
}
