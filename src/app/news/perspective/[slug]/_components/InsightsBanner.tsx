"use client";

import { Download } from "lucide-react";

export function InsightsBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/20 bg-slate-950 p-6 shadow-xl md:p-8">
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/news/NewsDetail/InsightsBanner.png')",
        }}
      />

      <div className="relative z-10 flex flex-col items-start">
        <h2 className="mb-2 text-2xl lg:text-2xl font-extrabold text-white uppercase">
          IWMC Insights
        </h2>

        <h3 className="mb-3 text-lg lg:text-lg font-bold text-white/90">
          Báo cáo phân tích độc quyền
        </h3>

        <p className="mb-6 max-w-sm text-sm text-slate-400 sm:text-base">
          Nhận góc nhìn chuyên sâu về thị trường, kinh tế và chiến lược đầu tư.
        </p>

        <button className="flex items-center gap-3 rounded-xl bg-linear-to-br from-[#edc271] to-[#d5ad64] px-6 py-3 text-sm font-bold uppercase text-slate-950 shadow-lg shadow-amber-500/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
          Tải báo cáo mới nhất
          <Download className="h-4 w-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
