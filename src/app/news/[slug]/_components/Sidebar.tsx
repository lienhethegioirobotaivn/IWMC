import { Newsletter, InsightsBanner } from "@/app/news/[slug]/_components";

import type { News } from "@/types/wordpress";
import { decode } from "html-entities";

import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  posts: News[];
}

const TOPICS = [
  "Kinh tế vĩ mô",
  "Thị trường chứng khoán",
  "IPO",
  "Quản trị doanh nghiệp",
  "Quản lý gia sản",
  "Đầu tư",
  "M&A",
  "Chuyển đổi số",
];

export function Sidebar({ posts }: SidebarProps) {
  return (
    <div className="mt-8 space-y-8 lg:mt-0">
      <div className="rounded-lg border border-white/20 bg-slate-950/20 p-4">
        <h3 className="mb-4 border-b border-slate-800 pb-2 py-1 text-center text-xl font-bold uppercase text-slate-100 lg:text-left lg:text-base">
          Bài viết liên quan
        </h3>

        <div className="space-y-8 lg:space-y-4">
          {posts.map((post) => {
            return (
              <Link
                href={`/news/${post.slug}`}
                key={post.id}
                className="group grid gap-4 lg:grid-cols-12"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-md border border-white/10 lg:col-span-5 lg:h-[76.5px]">
                  <Image
                    src={post.acf.thumbnail_image}
                    alt={post.title.rendered}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1 text-[#b9934b] lg:col-span-7">
                  <div className="flex items-start gap-2 text-[12px] uppercase lg:gap-1 lg:text-[9px]">
                    <p className="shrink-0 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("vi-VN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>

                    <p className="shrink-0">|</p>

                    <p className="min-w-0 wrap-break-word">
                      {post.categories
                        ?.map((category) => decode(category.name))
                        .join(", ")}
                    </p>
                  </div>

                  <h4 className="line-clamp-2 text-[14.5px] font-semibold text-slate-300 transition-colors group-hover:text-[#dfba7d] lg:text-[14px]">
                    {post.title.rendered}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg border border-white/20 bg-slate-950/20 p-4">
        <h3 className="mb-4 border-b border-slate-800 pb-2 py-1 text-center text-xl font-bold uppercase text-slate-100 lg:text-left lg:text-base">
          Chủ đề nổi bật
        </h3>

        <div className="flex flex-wrap gap-3 lg:gap-4">
          {TOPICS.map((topic) => (
            <p
              key={topic}
              className="rounded-xs border border-slate-800 bg-slate-900/40 px-2.5 py-1 text-[14px] font-medium text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-[#dfba7d] lg:text-[12.5px]"
            >
              # {topic}
            </p>
          ))}
        </div>
      </div>

      <Newsletter />
      <InsightsBanner />
    </div>
  );
}
