import {
  Author,
  Content,
  Hero,
  PostViewTracker,
  Sidebar,
} from "@/app/news/[slug]/_components";
import { News } from "@/types/wordpress";

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;
  if (!REST_URL) {
    throw new Error("NEXT_PUBLIC_WP_REST_URL is missing in .env");
  }

  const res = await fetch(`${REST_URL}/news?slug=${slug}&_embed`, {
    cache: "no-store",
  });

  const data = await res.json();

  const post: News = data[0];

  if (!post) {
    return <div>Không tìm thấy bài viết</div>;
  }

  const relatedRes = await fetch(`${REST_URL}/news?_embed&per_page=4`, {
    cache: "no-store",
  });

  const relatedData: News[] = await relatedRes.json();

  const relatedPosts = relatedData.filter(
    (item) => item.id !== post.id && item.acf.topic === post.acf.topic,
  );

  return (
    <>
      <PostViewTracker postId={post.id} />

      <main>
        <Hero post={post} />

        <Author post={post} />
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 mt-1 mb-12 px-6 lg:px-12">
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
