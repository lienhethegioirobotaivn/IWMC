import type { News } from "@/types/news";

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

  const featuredPost = posts[0];

  if (!featuredPost) return null;

  const recentPosts = posts.slice(1, 3);

  const gridPosts = posts.slice(3, 6);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-4">
        <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-lg border border-white/20 bg-slate-950/40 lg:col-span-2">
          <div className="absolute top-4 left-4 z-10 rounded-md bg-linear-to-b from-[#f5e3c3] to-[#a88244] uppercase">
            <p className="px-3 py-1 text-[10px] font-semibold text-black lg:text-sm">
              Nổi bật
            </p>
          </div>

          <Link href={`/news/${featuredPost.slug}`} prefetch={false}>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={featuredPost.thumbnail}
                alt={featuredPost.title}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 66vw"
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

            <Link href={`/news/${featuredPost.slug}`} prefetch={false}>
              <h2 className="mb-3 line-clamp-2 text-xl font-bold text-slate-100 transition-colors group-hover:text-[#f3d9a9] md:text-2xl">
                {featuredPost.title}
              </h2>

              <p className="mb-4 line-clamp-2 text-sm text-slate-400">
                {featuredPost.description}
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/20 bg-slate-950/40"
            >
              <Link href={`/news/${post.slug}`} prefetch={false}>
                <div className="relative mb-3 h-45 w-full overflow-hidden lg:mb-1 lg:h-33.5">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
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

                <Link href={`/news/${post.slug}`} prefetch={false}>
                  <h3 className="line-clamp-2 text-sm font-bold text-slate-200 transition-colors group-hover:text-[#f3d9a9]">
                    {post.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-6">
        {gridPosts.map((post) => (
          <div
            key={post.id}
            className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/20 bg-slate-950/40"
          >
            <Link href={`/news/${post.slug}`} prefetch={false}>
              <div className="relative mb-3 h-45 w-full overflow-hidden lg:mb-1 lg:h-32.5">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
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

              <Link href={`/news/${post.slug}`} prefetch={false}>
                <h3 className="mb-3 line-clamp-2 text-sm font-bold text-slate-200 transition-colors group-hover:text-[#f3d9a9]">
                  {post.title}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
