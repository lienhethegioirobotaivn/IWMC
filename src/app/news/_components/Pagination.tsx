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

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-2 px-4 py-2 rounded-lg border border-slate-700 text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        <MoveLeft />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`w-10 h-10 rounded-lg border cursor-pointer transition ${
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
        className="ml-2 px-4 py-2 rounded-lg border border-slate-700 text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        <MoveRight />
      </button>
    </div>
  );
}
