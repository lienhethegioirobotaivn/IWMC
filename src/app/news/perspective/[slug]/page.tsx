import {
  Author,
  Content,
  Hero,
  PostViewTracker,
  Sidebar,
} from "@/app/news/perspective/[slug]/_components";

import { PerspectiveService } from "@/services/perspective.service";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await PerspectiveService.getPerspectiveBySlug(slug);

  if (!post) {
    return {
      title: "IWMC",
    };
  }

  const imageUrl = post.acf.thumbnail_image || null;

  return {
    title: post.title.rendered,
    description: post.acf.description,
    openGraph: {
      title: post.title.rendered,
      description: post.acf.description,
      type: "article",
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: post.acf.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function PerspectiveDetails({ params }: Props) {
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
