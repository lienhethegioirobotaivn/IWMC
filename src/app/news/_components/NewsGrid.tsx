"use client";

import type { News } from "@/types/wordpress";
import Image from "next/image";
import Link from "next/link";

export function NewsGrid({ posts }: { posts: News[] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-3xl text-white text-center py-10">
        Không tìm thấy bài viết.
      </div>
    );
  }

  const getPostData = (post: News) => {
    return {
      title: post.title?.rendered,
      thumbnail_image: post.acf.thumbnail_image,
      description: post.acf?.description || "Chưa có mô tả ngắn",
      category: post.acf?.topic,
      date: new Date(post.date).toLocaleDateString("vi-VN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      slug: post.slug,
    };
  };

  const cleanPosts = posts.map(getPostData);

  const featuredPost = cleanPosts[0] ?? null;
  const recentPosts = cleanPosts.slice(1, 3);
  const gridPosts = cleanPosts.slice(3, 6);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-start">
        <div className="col-span-1 lg:col-span-2 relative group rounded-lg border border-white/20 bg-slate-950/40 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-linear-to-b from-[#f5e3c3] to-[#a88244] rounded-md uppercase">
            <p className="text-black text-[10px] lg:text-sm font-semibold px-3 py-1">
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
            <div className="flex items-center gap-3 text-[11px] font-semibold mb-2">
              <span className="text-[#a88244] uppercase">
                {featuredPost.date}
              </span>
              <span className="font-light text-gray-300">|</span>
              <span className="text-[#f3d9a9] uppercase">
                {featuredPost.category}
              </span>
            </div>
            <Link href={`/news/${featuredPost.slug}`}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-[#f3d9a9] transition-colors line-clamp-2">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                {featuredPost.description}
              </p>
              <div className="inline-flex items-center text-xs font-semibold text-[#a88244] hover:text-[#f3d9a9] transition-colors group/btn">
                Đọc thêm
                <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-between">
          {recentPosts.map((post) => (
            <div
              key={post.title}
              className="group border border-white/20 bg-slate-950/40 flex flex-col justify-between rounded-lg overflow-hidden"
            >
              <Link href={`/news/${post.slug}`}>
                <div className="relative w-full h-45 lg:h-33.5 mb-3 lg:mb-1 overflow-hidden">
                  <Image
                    src={post.thumbnail_image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-center gap-3 text-[9px] font-semibold mb-1">
                  <span className="text-[#a88244] uppercase">{post.date}</span>
                  <span className="font-light text-gray-300">|</span>
                  <span className="text-[#f3d9a9] uppercase">
                    {post.category}
                  </span>
                </div>
                <Link href={`/news/${post.slug}`}>
                  <h3 className="text-sm font-bold text-slate-200 line-clamp-2 group-hover:text-[#f3d9a9] transition-colors">
                    {post.title}
                  </h3>
                  <div className="inline-flex items-center text-xs font-semibold text-[#a88244] hover:text-[#f3d9a9] transition-colors group/btn">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
        {gridPosts.map((post) => (
          <div
            key={post.title}
            className="group border border-white/20 bg-slate-950/40 flex flex-col justify-between rounded-lg overflow-hidden"
          >
            <Link href={`/news/${post.slug}`}>
              <div className="relative w-full h-45 lg:h-32.5 mb-3 lg:mb-1 overflow-hidden">
                <Image
                  src={post.thumbnail_image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4">
              <div className="flex items-center gap-3 text-[9px] font-semibold mb-1">
                <span className="text-[#a88244] uppercase">{post.date}</span>
                <span className="font-light text-gray-300">|</span>
                <span className="text-[#f3d9a9] uppercase">
                  {post.category}
                </span>
              </div>
              <Link href={`/news/${post.slug}`}>
                <h3 className="text-sm font-bold text-slate-200 line-clamp-2 group-hover:text-[#f3d9a9] transition-colors mb-3">
                  {post.title}
                </h3>
                <div className="inline-flex items-center text-[11px] font-semibold text-[#a88244] hover:text-[#f3d9a9] transition-colors group/btn">
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
