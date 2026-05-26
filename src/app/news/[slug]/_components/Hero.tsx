import { Button } from "@/components/ui";

import { News } from "@/types/news/news";

import { ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export function Hero({ post }: { post: News }) {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-black font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/news/NewsDetail/Hero.png"}
          alt="Background image"
          fill
          priority
          className="h-full w-full object-cover object-bottom-left opacity-40 lg:object-right"
        />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col px-8 py-8 md:px-12">
        <div>
          <div
            className="mb-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 text-sm lg:pb-0
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-[#b9934b]/60
            hover:[&::-webkit-scrollbar-thumb]:bg-[#b9934b]
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-[#1a1a1a]
            [&::-webkit-scrollbar]:h-0.5"
          >
            <Link href={"/"}>
              <p className="text-[#b9934b]">Trang chủ</p>
            </Link>

            <div className="flex items-center gap-2 text-[#f3d9a9]">
              <ChevronRight className="size-4 shrink-0" />

              <Link href={"/news"}>
                <p>Tin tức</p>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-[#f3d9a9]">
              <ChevronRight className="size-4 shrink-0" />

              <p>{post.category}</p>
            </div>

            {post.title && (
              <div className="flex shrink-0 items-center gap-2">
                <ChevronRight className="size-4 shrink-0 text-[#f3d9a9]" />

                <Link href={post.slug}>
                  <p className="text-gray-300">{post.title}</p>
                </Link>
              </div>
            )}
          </div>

          <div className="mb-2 flex items-center gap-5">
            <Button className="w-fit cursor-pointer rounded-lg bg-[#d5ad64] px-2 py-1 text-xs font-semibold text-black uppercase transition-all duration-200 hover:scale-102 hover:bg-[#c49a50] active:scale-95">
              {post.category}
            </Button>

            <p className="text-sm uppercase">{post.date}</p>
          </div>

          <h2 className="mb-4 text-[32px] font-bold text-white lg:mb-3 lg:w-190 lg:text-[36px] lg:leading-11">
            {post.title}
          </h2>

          <p className="text-base text-gray-200 opacity-95 md:text-[18px] lg:w-190 lg:text-gray-300">
            {post.description}
          </p>
        </div>
      </div>
    </section>
  );
}
