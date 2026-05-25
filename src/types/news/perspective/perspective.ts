export interface PerspectiveAuthor {
  avatar: string;
  name: string;
  role: string;
}

export interface PerspectiveACF {
  author: PerspectiveAuthor;
  thumbnail_image: string;
  description: string;
  content: string;
}

export interface RawPerspective {
  id: number;
  date: string;
  modified: string;
  slug: string;

  title: {
    rendered: string;
  };

  acf: PerspectiveACF;
}

export interface Perspective {
  id: number;
  date: string;
  modified: string;
  slug: string;

  title: {
    rendered: string;
  };

  acf: PerspectiveACF;
}
