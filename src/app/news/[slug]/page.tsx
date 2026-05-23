import { PostViewTracker } from "@/app/news/[slug]/_components";

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;

  const res = await fetch(`${REST_URL}/news?slug=${slug}&_embed`, {
    cache: "no-store",
  });

  const data = await res.json();

  const post = data[0];

  if (!post) {
    return <div>Không tìm thấy bài viết</div>;
  }

  return (
    <>
      <PostViewTracker postId={post.id} />

      <main>
        <h1>{post.title.rendered}</h1>
      </main>
    </>
  );
}
