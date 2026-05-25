import {
  Author,
  Content,
  Hero,
  PostViewTracker,
  Sidebar,
} from "@/app/news/perspective/[slug]/_components";

import { PerspectiveService } from "@/services/perspective.service";

export const revalidate = 60;

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await PerspectiveService.getPerspectiveBySlug(slug);

  if (!post) {
    return <div>Không tìm thấy bài viết</div>;
  }

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
            <Sidebar />
          </aside>
        </div>
      </main>
    </>
  );
}
