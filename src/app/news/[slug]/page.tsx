import {
  Author,
  Content,
  Hero,
  PostViewTracker,
  Sidebar,
} from "@/app/news/[slug]/_components";

import { NewsService } from "@/services/news.service";

export const revalidate = 60;

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await NewsService.getNewsBySlug(slug);

  if (!post) {
    return <div>Không tìm thấy bài viết</div>;
  }

  const firstCategoryId = post.categories?.[0]?.id;

  const relatedPosts = firstCategoryId
    ? await NewsService.getRelatedNews(firstCategoryId, post.id)
    : [];

  return (
    <>
      <PostViewTracker postId={post.id} />

      <main>
        <Hero post={post} />
        <Author post={post} />
        <div className="mt-1 mb-12 grid grid-cols-1 gap-4 px-6 lg:grid-cols-9 lg:px-12">
          <div className="lg:col-span-6">
            <Content post={post} />
          </div>
          <aside className="lg:col-span-3">
            <Sidebar posts={relatedPosts} />
          </aside>
        </div>
      </main>
    </>
  );
}
