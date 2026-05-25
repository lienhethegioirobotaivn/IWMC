import { createPerspectiveQuery } from "@/lib/news/perspective";
import { wpFetch } from "@/lib/wp-fetch";

import type { Perspective, RawPerspective } from "@/types/news/perspective";

interface GetPerspectiveParams {
  page: number;
  perPage?: number;
}

interface GetPerspectiveResponse {
  posts: Perspective[];
  totalPages: number;
}

const PERSPECTIVE_FIELDS = "id,slug,title,acf,date,modified";

export const PerspectiveService = {
  async getPerspective({
    page,
    perPage = 3,
  }: GetPerspectiveParams): Promise<GetPerspectiveResponse> {
    try {
      const url = createPerspectiveQuery({
        page,
        per_page: perPage,
        _fields: PERSPECTIVE_FIELDS,
      });

      const [res] = await Promise.all([
        fetch(url, {
          next: {
            revalidate: 60,
          },
        }),
      ]);

      if (!res.ok) {
        throw new Error("Failed to fetch perspective");
      }

      const rawPosts: RawPerspective[] = await res.json();

      return {
        posts: rawPosts,

        totalPages: Number(res.headers.get("X-WP-TotalPages") || 1),
      };
    } catch (error) {
      console.error("Get perspective error:", error);

      return {
        posts: [],
        totalPages: 0,
      };
    }
  },

  async getPerspectiveBySlug(slug: string): Promise<Perspective | null> {
    try {
      const url = createPerspectiveQuery({
        slug,
        _fields: PERSPECTIVE_FIELDS,
      });

      const [rawPosts] = await Promise.all([
        wpFetch<RawPerspective[]>(url, {
          next: {
            revalidate: 60,
          },
        }),
      ]);

      const posts = rawPosts;

      return posts[0] || null;
    } catch (error) {
      console.error("Get perspective by slug error:", error);

      return null;
    }
  },
};
