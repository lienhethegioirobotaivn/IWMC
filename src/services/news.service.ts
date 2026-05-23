import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface NewsData {
  hero: {
    background_image: string;
    title: string;
    sub_title: string;
  };
  expert_perspectives: {
    title: string;
    description: string;
  };
  newsletter: {
    text_1: string;
    text_2: string;
  };
}

const SLUG = "news";

export const NewsService = {
  async getData(): Promise<NewsData | null> {
    const data = await getACFDataBySlug<NewsData>(SLUG);

    if (!data) return null;

    return {
      ...data,
    };
  },
};
