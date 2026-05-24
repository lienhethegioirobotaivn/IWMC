import type { News } from "@/types/wordpress";
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
      <div className="flex flex-col justify-center">
        <h3 className="text-[#dfc293] font-semibold text-[18px] lg:text-lg">
          {post.acf.author.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-300 text-base mt-1">
          <span>{post.acf.author.role}</span>
          <div className="rounded-full bg-[#eacc9b] p-px">
            <Check className="text-black size-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
