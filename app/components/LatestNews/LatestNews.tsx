import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import Image from "next/image";
import topPng from '@/public/top.png';
export async function LatestNews(p: {}) {
  const articles = await ArticleApi.fetchToday();
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image src={topPng} className="h-10 w-10" alt="Latest news icon" />
        <h1 className="text-4xl font-bold capitalize">Latest news</h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
