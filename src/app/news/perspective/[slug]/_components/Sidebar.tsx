import { Newsletter, InsightsBanner } from "@/app/news/[slug]/_components";

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

export function Sidebar() {
  return (
    <div className="mt-8 space-y-8 lg:mt-0">
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
