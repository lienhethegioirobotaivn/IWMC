import {
  Hero,
  CategoryFilter,
  NewsGrid,
  Sidebar,
  ExpertPerspectives,
  Newsletter,
  Pagination,
} from "@/app/news/_components";

import { getCategories, NewsService } from "@/services/news.service";

export const revalidate = 60;

const ITEMS_PER_PAGE = 6;
const SIDEBAR_POSTS_LIMIT = 5;

export default async function News({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;

  const categoryParam =
    typeof params.category === "string" ? params.category : "";

  const currentCategory = categoryParam || "tat-ca";

  const [pageData, categories, mostViewedPosts] = await Promise.all([
    NewsService.getData(),

    getCategories(),

    NewsService.getMostViewedNews(SIDEBAR_POSTS_LIMIT),
  ]);

  if (!pageData) {
    return null;
  }

  const selectedCategory = categories.find(
    (category) => category.slug === categoryParam,
  );

  const { posts: postsToDisplay, totalPages } = await NewsService.getNews({
    page: currentPage,
    perPage: ITEMS_PER_PAGE,
    categoryId: selectedCategory?.id,
  });

  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero hero={pageData.hero} />
      <div className="container mx-auto px-4 py-10 md:px-8">
        <CategoryFilter
          currentCategory={currentCategory}
          categories={categories}
        />
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-7">
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
      </div>
      <Newsletter newsletter={pageData.newsletter} />
    </main>
  );
}
