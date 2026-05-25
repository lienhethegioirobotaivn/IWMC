import type { News, NewsCategory, RawNews } from "@/types/wordpress";

export function transformNews(
  posts: RawNews[],
  categories: NewsCategory[],
): News[] {
  const categoryMap = new Map(
    categories.map((category) => [category.id, category]),
  );

  return posts.map((post) => ({
    ...post,

    categories:
      post["news-category"]
        ?.map((categoryId) => categoryMap.get(categoryId))
        .filter((category): category is NewsCategory => Boolean(category)) ||
      [],
  }));
}
