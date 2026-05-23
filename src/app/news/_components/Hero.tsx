"use client";

import { NewsData } from "@/services/news.service";
import Image from "next/image";

type HeroProps = Pick<NewsData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative flex flex-col justify-center bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.background_image}
          alt="Hero Background Image"
          fill
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container z-10 mx-auto px-4 md:px-8 py-12 lg:py-16 flex flex-col items-center justify-center text-center">
        <div className="lg:mb-10 max-w-3xl">
          <h1 className="py-2 text-5xl lg:text-7xl font-bold bg-linear-to-b from-[#f5e3c3] via-[#dfba7d] to-[#a88244] bg-clip-text text-transparent uppercase tracking-wider mb-3">
            {hero.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-base lg:text-xl max-w-2xl mx-auto">
            {hero.sub_title}
          </p>
        </div>
      </div>
    </section>
  );
}
