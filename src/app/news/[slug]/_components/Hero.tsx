import { Button } from "@/components/ui";
import { News } from "@/types/wordpress";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero({ post }: { post: News }) {
  return (
    <section className="relative flex flex-col justify-center bg-black overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/news/NewsDetail/Hero.png"}
          alt="Background image"
          fill
          priority
          className="w-full h-full object-cover object-bottom-left lg:object-right opacity-40"
        />
      </div>

      <div className="container relative z-10 mx-auto px-8 md:px-12 py-8 flex flex-col">
        <div>
          <div
            className="flex items-center mb-6 gap-2 text-sm overflow-x-auto whitespace-nowrap pb-2 lg:pb-0
                      [&::-webkit-scrollbar]:h-0.5
                    [&::-webkit-scrollbar-track]:bg-[#1a1a1a]
                      [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-[#b9934b]/60
                      [&::-webkit-scrollbar-thumb]:rounded-full
                    hover:[&::-webkit-scrollbar-thumb]:bg-[#b9934b]"
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

            {post.acf.topic && (
              <div className="flex items-center gap-2 text-[#f3d9a9]">
                <ChevronRight className="size-4 shrink-0" />
                <p>{post.acf.topic}</p>
              </div>
            )}

            {post.title.rendered && (
              <div className="flex items-center gap-2 shrink-0">
                <ChevronRight className="text-[#f3d9a9] size-4 shrink-0" />
                <Link href={post.slug}>
                  <p className="text-gray-300">{post.title.rendered}</p>
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-5 mb-2">
            <Button className="text-xs w-fit rounded-lg bg-[#d5ad64] px-2 py-1 font-semibold text-black hover:bg-[#c49a50] uppercase transition-all duration-200 hover:scale-102 cursor-pointer active:scale-95">
              {post.acf.topic}
            </Button>
            <p className="text-sm uppercase">
              {new Date(post.date).toLocaleDateString("vi-VN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <h2 className="lg:w-190 mb-4 lg:mb-3 text-white text-[32px] lg:text-[36px] font-bold lg:leading-11">
            {post.title.rendered}
          </h2>

          <p className="text-gray-200 lg:text-gray-300 text-base md:text-[18px] lg:w-190 opacity-95">
            {post.acf.description}
          </p>
        </div>
      </div>
    </section>
  );
}
