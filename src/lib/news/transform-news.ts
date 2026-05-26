import type { News, NewsCategory, RawNews } from "@/types/news/news";
import { decode } from "html-entities";

export function transformNews(
  posts: RawNews[],
  categories: NewsCategory[],
): News[] {
  const categoryMap = new Map<number, NewsCategory>(
    categories.map((category) => [category.id, category]),
  );

  return posts.map((post) => {
    const firstCategoryId = post["news-category"]?.[0];

    const category = firstCategoryId
      ? categoryMap.get(firstCategoryId)
      : undefined;

    return {
      id: post.id,
      slug: post.slug,
      title: post.title.rendered,
      thumbnail: post.acf?.thumbnail_image || "",
      description: post.acf?.description || "",
      content: post.acf?.content || "",
      category: decode(category?.name) || "Tin tức",
      categorySlug: category?.slug || "",
      categoryId: firstCategoryId,
      date: new Date(post.date).toLocaleDateString("vi-VN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      rawDate: post.date,
      author: post.acf?.author,
      views: Number(post.post_views) || 0,
    };
  });
}
