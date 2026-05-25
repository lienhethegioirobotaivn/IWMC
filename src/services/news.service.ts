import { cache } from "react";

import { REST_URL } from "@/lib/env";
import { transformNews, createNewsQuery } from "@/lib/news";
import { wpFetch } from "@/lib/wp-fetch";
import { getACFDataBySlug } from "@/lib/wp-rest-api";

import type { News, NewsCategory, RawNews } from "@/types/news/news";

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

interface GetNewsParams {
  page: number;
  perPage?: number;
  categoryId?: number;
}

interface GetNewsResponse {
  posts: News[];
  totalPages: number;
}

const SLUG = "news";

const NEWS_FIELDS = "id,slug,title,acf,date,modified,news-category,post_views";

export const getCategories = cache(async (): Promise<NewsCategory[]> => {
  try {
    return await wpFetch<NewsCategory[]>(`${REST_URL}/news-category`, {
      next: {
        revalidate: 3600,
      },
    });
  } catch (error) {
    console.error("Get categories error:", error);

    return [];
  }
});

export const NewsService = {
  async getData(): Promise<NewsData | null> {
    const data = await getACFDataBySlug<NewsData>(SLUG);

    if (!data) return null;

    return data;
  },

  async getNews({
    page,
    perPage = 6,
    categoryId,
  }: GetNewsParams): Promise<GetNewsResponse> {
    try {
      const url = createNewsQuery({
        page,
        per_page: perPage,
        _fields: NEWS_FIELDS,
        "news-category": categoryId,
      });

      const [res, categories] = await Promise.all([
        fetch(url, {
          next: {
            revalidate: 60,
          },
        }),

        getCategories(),
      ]);

      if (!res.ok) {
        throw new Error("Failed to fetch news");
      }

      const rawPosts: RawNews[] = await res.json();

      return {
        posts: transformNews(rawPosts, categories),

        totalPages: Number(res.headers.get("X-WP-TotalPages") || 1),
      };
    } catch (error) {
      console.error("Get news error:", error);

      return {
        posts: [],
        totalPages: 0,
      };
    }
  },

  async getMostViewedNews(limit = 5): Promise<News[]> {
    try {
      const url = createNewsQuery({
        per_page: limit,
        orderby: "post_views",
        order: "desc",
        _fields: NEWS_FIELDS,
      });

      const [rawPosts, categories] = await Promise.all([
        wpFetch<RawNews[]>(url, {
          next: {
            revalidate: 60,
          },
        }),

        getCategories(),
      ]);

      return transformNews(rawPosts, categories);
    } catch (error) {
      console.error("Get most viewed news error:", error);

      return [];
    }
  },

  async getNewsBySlug(slug: string): Promise<News | null> {
    try {
      const url = createNewsQuery({
        slug,
        _fields: NEWS_FIELDS,
      });

      const [rawPosts, categories] = await Promise.all([
        wpFetch<RawNews[]>(url, {
          next: {
            revalidate: 60,
          },
        }),

        getCategories(),
      ]);

      const posts = transformNews(rawPosts, categories);

      return posts[0] || null;
    } catch (error) {
      console.error("Get news by slug error:", error);

      return null;
    }
  },

  async getRelatedNews(
    categoryId: number,
    currentPostId: number,
    limit = 5,
  ): Promise<News[]> {
    try {
      const url = createNewsQuery({
        per_page: limit + 1,
        "news-category": categoryId,
        _fields: NEWS_FIELDS,
      });

      const [rawPosts, categories] = await Promise.all([
        wpFetch<RawNews[]>(url, {
          next: {
            revalidate: 60,
          },
        }),

        getCategories(),
      ]);

      return transformNews(rawPosts, categories)
        .filter((post) => post.id !== currentPostId)
        .slice(0, limit);
    } catch (error) {
      console.error("Get related news error:", error);

      return [];
    }
  },
};
