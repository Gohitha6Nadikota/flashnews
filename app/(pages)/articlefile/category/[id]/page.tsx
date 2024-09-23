import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import { CATEGORIES_ITEMS } from "@/constant";
import { Article, ArticleCategory } from "@/app/types/article-types";
import Image from "next/image";
import spark from '@/public/spark.png'

export default async function ArticlesByCategoryPage(p: {
  params: { id: ArticleCategory; articles: Article[] };
}) {
  const categoryKey = p.params.id as keyof typeof CATEGORIES_ITEMS;
  const articles = await ArticleApi.fetchBasedOnCategory(p.params.id);
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image
        src={CATEGORIES_ITEMS[categoryKey].src}
          className="h-10 w-10"
          alt="Latest news icon"
        />
        <h1 className="text-4xl font-bold capitalize">
          {p.params.id} news
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
