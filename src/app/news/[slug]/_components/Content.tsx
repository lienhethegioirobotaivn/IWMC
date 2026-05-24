import type { News } from "@/types/wordpress";
import Image from "next/image";

export function Content({ post }: { post: News }) {
  return (
    <div className="container mx-auto border border-white/20 bg-slate-950/20 p-4 lg:p-8 rounded-lg">
      <div>
        <div className="relative overflow-hidden mb-12">
          <section className="prose prose-invert max-w-none">
            <div className="w-full mb-6">
              <Image
                src={post.acf.thumbnail_image}
                alt="Thumbnail Image"
                width={1200}
                height={700}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
            <div
              className="text-white/80 text-base lg:text-[17px] leading-snug whitespace-pre-wrap
                [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-semibold
                [&_strong]:text-white
                [&_b]:text-white/90
                [&_b]:text-lg
                [&_b]:lg:text-[18px]
                [&_a]:text-blue-500
                hover:[&_a]:text-blue-600
                [&_img]:w-full
                [&_img]:h-auto
                [&_img]:rounded-2xl
                [&_img]:object-cover"
              dangerouslySetInnerHTML={{
                __html: post.acf?.content || "",
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
