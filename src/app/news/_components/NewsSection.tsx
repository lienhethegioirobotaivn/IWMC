import { NewsGrid, Pagination } from "@/app/news/_components";

import { NewsService } from "@/services/news.service";

interface NewsSectionProps {
  currentPage: number;
  categoryId?: number;
}

const ITEMS_PER_PAGE = 6;

export async function NewsSection({
  currentPage,
  categoryId,
}: NewsSectionProps) {
  const { posts, totalPages } = await NewsService.getNews({
    page: currentPage,
    perPage: ITEMS_PER_PAGE,
    categoryId,
  });

  return (
    <>
      <NewsGrid posts={posts} />

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
