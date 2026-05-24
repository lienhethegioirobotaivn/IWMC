import { Newsletter, InsightsBanner } from "@/app/news/[slug]/_components";
import type { News } from "@/types/wordpress";
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
    <div className="mt-8 lg:mt-0 space-y-8">
      <div className="border border-white/20 bg-slate-950/20 p-4 rounded-lg">
        <h3 className="text-center lg:text-left text-xl lg:text-base font-bold text-slate-100 uppercase py-1 mb-4 border-b border-slate-800 pb-2">
          Bài viết liên quan
        </h3>
        <div className="space-y-8 lg:space-y-4">
          {posts.map((post) => {
            return (
              <Link
                href={`/news/${post.slug}`}
                key={post.id}
                className="grid lg:grid-cols-12 gap-4 group"
              >
                <div className="lg:col-span-5 relative w-full h-40 lg:h-[76.5px] rounded-md border border-white/10 overflow-hidden">
                  <Image
                    src={post.acf.thumbnail_image}
                    alt={post.title.rendered}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-7 space-y-1 text-[#b9934b]">
                  <div className="flex text-[12px] lg:text-[9px] gap-2 lg:gap-1 uppercase items-start">
                    <p className="whitespace-nowrap shrink-0">
                      {new Date(post.date).toLocaleDateString("vi-VN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="shrink-0">|</p>
                    <p className="wrap-break-word min-w-0">{post.acf.topic}</p>
                  </div>
                  <h4 className="text-[14.5px] lg:text-[14px] font-semibold text-slate-300 group-hover:text-[#dfba7d] transition-colors line-clamp-2">
                    {post.title.rendered}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border border-white/20 bg-slate-950/20 p-4 rounded-lg">
        <h3 className="text-center lg:text-left text-xl lg:text-base font-bold text-slate-100 uppercase py-1 mb-4 border-b border-slate-800 pb-2">
          Chủ đề nổi bật
        </h3>
        <div className="flex flex-wrap gap-3 lg:gap-4">
          {TOPICS.map((topic) => (
            // <Link
            //   key={topic}
            //   href={`/news/${topic}`}
            //   className="text-[14px] lg:text-[12.5px] font-medium text-slate-400 bg-slate-900/40 hover:bg-slate-800/60 hover:text-[#dfba7d] border border-slate-800 px-2.5 py-1 transition-colors rounded-xs"
            // >
            //   # {topic}
            // </Link>
            <p
              key={topic}
              className="text-[14px] lg:text-[12.5px] font-medium text-slate-400 bg-slate-900/40 hover:bg-slate-800/60 hover:text-[#dfba7d] border border-slate-800 px-2.5 py-1 transition-colors rounded-xs"
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
