import {
  AboutIWMC,
  BottomCTA,
  Hero,
  Mission,
  News,
  Programs,
} from "@/app/(home)/_components";

import { HomeService } from "@/services/home.service";
import { NewsService } from "@/services/news.service";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWMC - Hỗ trợ IPO - Quản lý Gia sản - Đào tạo Kế cận",
  description:
    "Những yếu tố doanh nghiệp cần chuẩn bị để IPO thuận lợi và bền vững.",
};

export default async function Home() {
  const [data, latestNews] = await Promise.all([
    HomeService.getData(),

    NewsService.getNews({
      page: 1,
      perPage: 3,
    }),
  ]);

  if (!data) return null;

  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero hero={data.hero} />

      <Mission mission={data.mission} />

      <AboutIWMC about_iwmc={data.about_iwmc} />

      <section id="program">
        <Programs programs={data.programs} />
      </section>

      <News news={data.news} posts={latestNews.posts} />

      <BottomCTA bottom_cta={data.bottom_cta} />
    </main>
  );
}
