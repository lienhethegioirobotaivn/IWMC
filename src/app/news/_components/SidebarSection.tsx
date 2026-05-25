import { Sidebar } from "@/app/news/_components";

import { NewsService } from "@/services/news.service";

const SIDEBAR_POSTS_LIMIT = 5;

export async function SidebarSection() {
  const mostViewedPosts =
    await NewsService.getMostViewedNews(SIDEBAR_POSTS_LIMIT);

  return <Sidebar mostViewedPosts={mostViewedPosts} />;
}
