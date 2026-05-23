"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = [
  "Tất cả",
  "Thị trường",
  "Đầu tư",
  "Quản trị doanh nghiệp",
  "IPO & Thị trường vốn",
  "Gia sản",
  "Sự kiện",
  "IWMC Insights",
];

export function CategoryFilter({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("category", category);
    params.set("page", "1");

    router.push(`/news?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2 lg:gap-4">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 text-xs lg:text-base rounded-lg transition-all duration-300 cursor-pointer border ${
            currentCategory === category
              ? "bg-linear-to-b from-[#f5e3c3] to-[#a88244] text-slate-950 border-transparent"
              : "bg-slate-900/50 text-slate-300 border-slate-800 hover:border-[#f3d9a9] hover:text-[#f3d9a9]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
