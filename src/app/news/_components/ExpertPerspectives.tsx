"use client";

import { NewsData } from "@/services/news.service";
import Image from "next/image";

type ExpertPerspectivesProps = Pick<NewsData, "expert_perspectives">;

const EXPERTS = [
  {
    name: "ThS. Mai Nguyễn Hoàng Nam",
    role: "Thành viên sáng lập IWMC",
    quote: "Thị trường vốn Việt Nam: Sẵn sàng cho một chu kỳ tăng trưởng mới",
    avatar: "/news/Avatar3.png",
    date: "15 THÁNG 5, 2026",
  },
  {
    name: "ThS. Mai Nguyễn Hoàng Nam",
    role: "Thành viên sáng lập IWMC",
    quote: "Quản trị rủi ro trong bối cảnh bất định toàn cầu",
    avatar: "/news/Avatar3.png",
    date: "12 THÁNG 5, 2026",
  },
  {
    name: "ThS. Mai Nguyễn Hoàng Nam",
    role: "Thành viên sáng lập IWMC",
    quote: "Chuyển giao thế hệ: Nghệ thuật của sự trường tồn",
    avatar: "/news/Avatar3.png",
    date: "08 THÁNG 5, 2026",
  },
];

export function ExpertPerspectives({
  expert_perspectives,
}: ExpertPerspectivesProps) {
  return (
    <section className="mt-12 border border-white/25 px-6 py-10 rounded-lg">
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-[#dfba7d] uppercase mb-1">
          {expert_perspectives.title}
        </h2>
        <p className="text-base text-slate-400">
          {expert_perspectives.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4">
        {EXPERTS.map((expert, index) => (
          <div
            key={index}
            className="bg-slate-950/40 border border-white/20 p-4 flex gap-4 items-center rounded-lg hover:border-white/30 transition-colors"
          >
            <div className="relative w-24 h-full shrink-0 rounded-lg overflow-hidden">
              <Image
                src={expert.avatar}
                alt={expert.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-sm lg:text-[15px] font-bold text-white/90 mb-2">
                {expert.quote}
              </p>
              <div>
                <h4 className="text-xs lg:text-[13px] font-semibold text-[#dfba7d] mb-1">
                  - {expert.name}
                </h4>
                <p className="text-[12px] text-gray-300">{expert.role}</p>
              </div>
              <p className="text-[11px] text-gray-400">{expert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
