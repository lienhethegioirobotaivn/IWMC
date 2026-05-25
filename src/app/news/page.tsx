import { Suspense } from "react";

import {
  Hero,
  CategoryFilter,
  ExpertPerspectives,
  Newsletter,
} from "@/app/news/_components";

import { getCategories, NewsService } from "@/services/news.service";

import {
  NewsSection,
  SidebarSection,
  NewsGridSkeleton,
  SidebarSkeleton,
} from "@/app/news/_components";

export const revalidate = 60;

export default async function News({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;

  const categoryParam =
    typeof params.category === "string" ? params.category : "";

  const currentCategory = categoryParam || "tat-ca";

  const [pageData, categories] = await Promise.all([
    NewsService.getData(),

    getCategories(),
  ]);

  if (!pageData) {
    return null;
  }

  const selectedCategory = categories.find(
    (category) => category.slug === categoryParam,
  );

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
            <Suspense fallback={<NewsGridSkeleton />}>
              <NewsSection
                currentPage={currentPage}
                categoryId={selectedCategory?.id}
              />
            </Suspense>
          </div>

          <aside className="lg:col-span-2">
            <Suspense fallback={<SidebarSkeleton />}>
              <SidebarSection />
            </Suspense>
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
