import type { News } from "@/types/news/news";
import { Check } from "lucide-react";
import Image from "next/image";

export function Author({ post }: { post: News }) {
  return (
    <div className="flex items-center gap-3 rounded-lg text-white mb-6 px-8 lg:px-12">
      <div className="size-11 lg:size-12 rounded-full overflow-hidden shrink-0 border border-gray-700">
        <Image
          src={post.acf.author.avatar}
          alt={post.acf.author.name}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center gap-2 text-gray-300 text-base mt-1">
        <span>{post.acf.author.role}</span>

        <div className="relative flex items-center justify-center size-5 text-[#eacc9b]">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute inset-0 size-full"
          >
            <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z" />
          </svg>
          <Check className="text-black size-3 z-10" />
        </div>
      </div>
    </div>
  );
}
