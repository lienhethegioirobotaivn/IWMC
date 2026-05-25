"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(page));

    router.push(`/news?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  const visiblePages = [];

  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    visiblePages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-2 px-4 py-2 rounded-lg border border-slate-700 text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed active:scale-95"
      >
        <MoveLeft />
      </button>

      {visiblePages.map((page) => {
        return (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`w-10 h-10 rounded-lg border cursor-pointer transition active:scale-95 ${
              currentPage === page
                ? "bg-linear-to-b from-[#f5e3c3] to-[#a88244] text-black border-transparent"
                : "border-slate-700 text-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="ml-2 px-4 py-2 rounded-lg border border-slate-700 text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed active:scale-95"
      >
        <MoveRight />
      </button>
    </div>
  );
}
