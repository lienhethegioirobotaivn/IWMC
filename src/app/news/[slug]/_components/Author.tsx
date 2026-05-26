import type { News } from "@/types/news/news";

import { Check } from "lucide-react";
import Image from "next/image";

export function Author({ post }: { post: News }) {
  if (!post.author) return null;

  return (
    <div className="mb-6 flex items-center gap-3 rounded-lg px-8 text-white lg:px-12">
      <div className="size-11 shrink-0 overflow-hidden rounded-full border border-gray-700 lg:size-12">
        <Image
          src={post.author.avatar || "/placeholder-avatar.png"}
          alt={post.author.name || "Author"}
          width={48}
          height={48}
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h3 className="font-semibold text-white">{post.author.name}</h3>

        <div className="mt-1 flex items-center gap-2 text-base text-gray-300">
          <span>{post.author.role}</span>

          <div className="relative flex size-5 items-center justify-center text-[#eacc9b]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute inset-0 size-full"
            >
              <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z" />
            </svg>

            <Check className="z-10 size-3 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
