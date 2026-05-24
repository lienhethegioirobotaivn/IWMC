"use client";

import { Input } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <div className="border border-white/20 bg-slate-950/20 p-4 rounded-lg">
      <h3 className="text-center lg:text-left text-xl lg:text-base font-bold text-slate-100 uppercase py-1 mb-4 border-b border-slate-800 pb-2">
        Dăng ký nhận bảng tin
      </h3>
      <p className="mb-6 text-slate-400 text-base lg:text-sm">
        Nhận những thông tin và phân tích giá trị mới nhất từ IWMC.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2 rounded-lg bg-slate-900/60 border border-white/5 focus-within:border-[#d5ad64] focus-within:ring-1 focus-within:ring-[#d5ad64] transition-all"
      >
        <Input
          type="email"
          placeholder="Nhập email của bạn"
          className="h-10 border-0 bg-transparent text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 px-3"
          required
        />
        <button
          type="submit"
          className="flex w-10 h-10 items-center justify-center rounded-lg bg-linear-to-br from-[#edc271] to-[#d5ad64] text-slate-950 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          aria-label="Submit email"
        >
          <ArrowRight className="h-5 w-5 stroke-[2.5]" />
        </button>
      </form>
    </div>
  );
}
