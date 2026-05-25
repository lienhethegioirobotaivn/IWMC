"use client";

import type { NewsCategory } from "@/types/news/news";

import { decode } from "html-entities";

import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  currentCategory: string;
  categories: NewsCategory[];
}

export function CategoryFilter({
  currentCategory,
  categories,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams);

    if (slug === "tat-ca") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }

    params.set("page", "1");

    router.push(`/news?${params.toString()}`, {
      scroll: false,
    });
  };

  const allCategories = [{ name: "Tất cả", slug: "tat-ca" }, ...categories];

  return (
    <div className="flex flex-wrap gap-2 lg:gap-4">
      {allCategories.map((cat) => {
        const isActive = currentCategory === cat.slug;

        return (
          <button
            key={cat.slug}
            onClick={() => handleCategoryChange(cat.slug)}
            className={`cursor-pointer rounded-lg border px-4 py-2 text-xs transition-all duration-300 lg:text-base active:scale-95 ${
              isActive
                ? "bg-linear-to-b from-[#f5e3c3] to-[#a88244] border-transparent text-slate-950"
                : "border-slate-800 bg-slate-900/50 text-slate-300 hover:border-[#f3d9a9] hover:text-[#f3d9a9]"
            }`}
          >
            {decode(cat.name)}
          </button>
        );
      })}
    </div>
  );
}
