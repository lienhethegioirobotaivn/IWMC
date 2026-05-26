import {
  Author,
  Content,
  Hero,
  PostViewTracker,
  Sidebar,
} from "@/app/news/[slug]/_components";

import { NewsService } from "@/services/news.service";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await NewsService.getNewsBySlug(slug);
  if (!post) {
    return {
      title: "IWMC",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.thumbnail ? [{ url: post.thumbnail }] : [],
    },
  };
}

export default async function NewsDetails({ params }: Props) {
  const { slug } = await params;

  const post = await NewsService.getNewsBySlug(slug);

  if (!post) {
    return <div>Không tìm thấy bài viết</div>;
  }
  const firstCategoryId = post.categoryId;

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
