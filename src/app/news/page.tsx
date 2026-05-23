import {
  Hero,
  CategoryFilter,
  NewsGrid,
  Sidebar,
  ExpertPerspectives,
  Newsletter,
  Pagination,
} from "@/app/news/_components";
import { NewsService } from "@/services/news.service";
import type { News } from "@/types/wordpress";

export const dynamic = "force-dynamic";

export default async function News({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageData = await NewsService.getData();
  if (!pageData) return null;

  const params = await searchParams;

  const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;
  if (!REST_URL) {
    throw new Error("NEXT_PUBLIC_WP_REST_URL is missing in .env");
  }

  const currentPage = Number(params.page) || 1;

  const currentCategory =
    typeof params.category === "string"
      ? decodeURIComponent(params.category)
      : "Tất cả";

  const itemPerPage = 6;

  async function getNews(): Promise<{
    posts: News[];
    totalPages: number;
  }> {
    try {
      const apiUrl = `${REST_URL}/news?_embed&per_page=100`;

      const res = await fetch(apiUrl, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to fetch news");

      const data: News[] = await res.json();

      if (!Array.isArray(data)) {
        return {
          posts: [],
          totalPages: 0,
        };
      }

      let filteredNews = data;

      if (currentCategory !== "Tất cả") {
        filteredNews = data.filter(
          (post) =>
            post.acf?.topic?.toLowerCase().trim() ===
            currentCategory.toLowerCase().trim(),
        );
      }

      const totalPages = Math.ceil(filteredNews.length / itemPerPage);

      const startIndex = (currentPage - 1) * itemPerPage;
      const endIndex = startIndex + itemPerPage;

      return {
        posts: filteredNews.slice(startIndex, endIndex),
        totalPages,
      };
    } catch (error) {
      console.error(error);

      return {
        posts: [],
        totalPages: 0,
      };
    }
  }

  async function getMostViewedNews(): Promise<News[]> {
    try {
      const postsRes = await fetch(`${REST_URL}/news?_embed&per_page=100`, {
        cache: "no-store",
      });

      if (!postsRes.ok) {
        throw new Error("Failed to fetch posts");
      }

      const posts: News[] = await postsRes.json();

      if (!posts.length) {
        return [];
      }

      const postsWithViews = await Promise.all(
        posts.map(async (post) => {
          try {
            const viewsRes = await fetch(
              `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/post-views-counter/get-post-views/${post.id}`,
              {
                cache: "no-store",
              },
            );

            const viewsData = await viewsRes.json();

            return {
              ...post,
              post_views: Number(viewsData || 0),
            };
          } catch {
            return {
              ...post,
              post_views: 0,
            };
          }
        }),
      );

      return postsWithViews
        .sort((a, b) => (b.post_views || 0) - (a.post_views || 0))
        .slice(0, 5);
    } catch (error) {
      console.error("Sidebar views error:", error);

      return [];
    }
  }

  const [{ posts: postsToDisplay, totalPages }, mostViewedPosts] =
    await Promise.all([getNews(), getMostViewedNews()]);

  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero hero={pageData.hero} />
      <main className="container mx-auto px-4 md:px-8 py-10">
        <CategoryFilter currentCategory={currentCategory} />
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-8">
          <div className="lg:col-span-5">
            <NewsGrid posts={postsToDisplay} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
          <aside className="lg:col-span-2">
            <Sidebar mostViewedPosts={mostViewedPosts} />
          </aside>
        </div>
        <ExpertPerspectives
          expert_perspectives={pageData.expert_perspectives}
        />
      </main>
      <Newsletter newsletter={pageData.newsletter} />
    </main>
  );
}
