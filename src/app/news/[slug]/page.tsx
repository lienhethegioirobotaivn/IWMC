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

  const imageUrl = post.thumbnail || null;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: imageUrl ? [imageUrl] : [],
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
