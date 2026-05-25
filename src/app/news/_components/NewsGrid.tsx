import type { News } from "@/types/news/news";
import { decode } from "html-entities";

import Image from "next/image";
import Link from "next/link";

interface NewsGridProps {
  posts: News[];
}

export function NewsGrid({ posts }: NewsGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-10 text-center text-3xl text-white">
        Không tìm thấy bài viết.
      </div>
    );
  }

  const getPostData = (post: News) => {
    return {
      title: post.title?.rendered,
      thumbnail_image: post.acf?.thumbnail_image || "",
      description: post.acf?.description || "Chưa có mô tả ngắn",
      category: decode(post.categories?.[0]?.name || "Tin tức"),
      date: new Date(post.date).toLocaleDateString("vi-VN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),

      slug: post.slug,
    };
  };

  const cleanPosts = posts?.map(getPostData) || [];

  const featuredPost = cleanPosts[0];

  if (!featuredPost) return null;

  const recentPosts = cleanPosts.slice(1, 3);

  const gridPosts = cleanPosts.slice(3, 6);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-4">
        <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-lg border border-white/20 bg-slate-950/40 lg:col-span-2">
          <div className="absolute top-4 left-4 z-10 rounded-md bg-linear-to-b from-[#f5e3c3] to-[#a88244] uppercase">
            <p className="px-3 py-1 text-[10px] font-semibold text-black lg:text-sm">
              Nổi bật
            </p>
          </div>

          <Link href={`/news/${featuredPost.slug}`}>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={featuredPost.thumbnail_image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

          <div className="p-4">
            <div className="mb-2 flex items-center gap-3 text-[11px] font-semibold">
              <span className="uppercase text-[#a88244]">
                {featuredPost.date}
              </span>

              <span className="font-light text-gray-300">|</span>

              <span className="uppercase text-[#f3d9a9]">
                {featuredPost.category}
              </span>
            </div>

            <Link href={`/news/${featuredPost.slug}`}>
              <h2 className="mb-3 line-clamp-2 text-xl font-bold text-slate-100 transition-colors group-hover:text-[#f3d9a9] md:text-2xl">
                {featuredPost.title}
              </h2>

              <p className="mb-4 line-clamp-2 text-sm text-slate-400">
                {featuredPost.description}
              </p>

              <div className="group/btn inline-flex items-center text-xs font-semibold text-[#a88244] transition-colors hover:text-[#f3d9a9]">
                Đọc thêm
                <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6">
          {recentPosts.map((post) => (
            <div
              key={post.title}
              className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/20 bg-slate-950/40"
            >
              <Link href={`/news/${post.slug}`}>
                <div className="relative mb-3 h-45 w-full overflow-hidden lg:mb-1 lg:h-33.5">
                  <Image
                    src={post.thumbnail_image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                </div>
              </Link>

              <div className="p-4">
                <div className="mb-1 flex items-center gap-3 text-[9px] font-semibold">
                  <span className="uppercase text-[#a88244]">{post.date}</span>

                  <span className="font-light text-gray-300">|</span>

                  <span className="uppercase text-[#f3d9a9]">
                    {post.category}
                  </span>
                </div>

                <Link href={`/news/${post.slug}`}>
                  <h3 className="line-clamp-2 text-sm font-bold text-slate-200 transition-colors group-hover:text-[#f3d9a9]">
                    {post.title}
                  </h3>

                  <div className="group/btn inline-flex items-center text-xs font-semibold text-[#a88244] transition-colors hover:text-[#f3d9a9]">
                    Đọc thêm
                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-6">
        {gridPosts.map((post) => (
          <div
            key={post.title}
            className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/20 bg-slate-950/40"
          >
            <Link href={`/news/${post.slug}`}>
              <div className="relative mb-3 h-45 w-full overflow-hidden lg:mb-1 lg:h-32.5">
                <Image
                  src={post.thumbnail_image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="p-4">
              <div className="mb-1 flex items-center gap-3 text-[9px] font-semibold">
                <span className="uppercase text-[#a88244]">{post.date}</span>

                <span className="font-light text-gray-300">|</span>

                <span className="uppercase text-[#f3d9a9]">
                  {post.category}
                </span>
              </div>

              <Link href={`/news/${post.slug}`}>
                <h3 className="mb-3 line-clamp-2 text-sm font-bold text-slate-200 transition-colors group-hover:text-[#f3d9a9]">
                  {post.title}
                </h3>

                <div className="group/btn inline-flex items-center text-[11px] font-semibold text-[#a88244] transition-colors hover:text-[#f3d9a9]">
                  Đọc thêm
                  <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
