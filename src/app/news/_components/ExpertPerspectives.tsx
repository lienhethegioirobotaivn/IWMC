import { NewsData } from "@/services/news.service";
import { PerspectiveService } from "@/services/perspective.service";
import Image from "next/image";
import Link from "next/link";

type ExpertPerspectivesProps = Pick<NewsData, "expert_perspectives"> & {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const revalidate = 60;

const ITEMS_PER_PAGE = 3;

export async function ExpertPerspectives({
  expert_perspectives,
  searchParams,
}: ExpertPerspectivesProps) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams?.page) || 1;

  const { posts: postsToDisplay } = await PerspectiveService.getPerspective({
    page: currentPage,
    perPage: ITEMS_PER_PAGE,
  });

  return (
    <section className="mt-12 border border-white/25 px-6 py-10 rounded-lg">
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-[#dfba7d] uppercase mb-1">
          {expert_perspectives.title}
        </h2>
        <p className="text-base text-slate-400">
          {expert_perspectives.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4">
        {postsToDisplay && postsToDisplay.length > 0 ? (
          postsToDisplay.map((post) => {
            const expertName = post.acf?.author.name || "";
            const expertRole = post.acf?.author.role || "";
            const expertAvatar = post.acf?.author.avatar || "";
            const quoteText = post.title?.rendered || "";

            const formattedDate = post.date
              ? new Date(post.date)
                  .toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  .toUpperCase()
              : "";

            return (
              <Link
                key={post.id}
                href={`/news/perspective/${post.slug}`}
                className="bg-slate-950/40 border border-white/20 p-4 flex gap-4 items-center rounded-lg hover:border-white/30 transition-colors"
              >
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={expertAvatar}
                    alt={expertName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <p className="text-sm lg:text-[15px] font-bold text-white/90 mb-2 line-clamp-2">
                    {quoteText}
                  </p>
                  <div>
                    <h4 className="text-xs lg:text-[13px] font-semibold text-[#dfba7d] mb-1">
                      - {expertName}
                    </h4>
                    <p className="text-[12px] text-gray-300 line-clamp-1">
                      {expertRole}
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-400">{formattedDate}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-3xl text-white/90 col-span-3 text-center">
            Không có góc nhìn chuyên gia nào.
          </p>
        )}
      </div>
    </section>
  );
}
