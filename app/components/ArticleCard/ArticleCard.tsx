
import Image from "next/image";
import Link from "next/link";
import defaultNewsPng from "@/public/default-news.png";
import { CATEGORIES_ITEMS } from "@/constant";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";
import { Article } from "@/app/types/article-types";
export function ArticleCard(p: { article: Article }) {
  const categoryKey = p.article.category[0] as keyof typeof CATEGORIES_ITEMS;
  return (
    <Link
      href="#"
      className="space-y-4 block w-80 hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 py-4 px-6 rounded-xl shadow-sm"
    >
      <div className="capitalize">
        <div className="flex items-center gap-2">
          <div className="flex w-10 h-10 justify-center items-center border border-slate-300 rounded-full">
            <Image
              className="w-5 h-5"
              src={CATEGORIES_ITEMS[categoryKey].src}
              alt="Icon for category"
            />
          </div>
          <div className="font-bold text-md">{p.article.category}</div>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          Published : {new Date(p.article.pubDate).toDateString()}
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-semibold text-xl line-clamp-2 h-14">
          {p.article.title}
        </div>
        <ImageWithFallback
          className="h-40 rounded-lg"
          height={200}
          width={300}
          src={p.article.image_url || defaultNewsPng}
          alt="Image for article"
          fallback={defaultNewsPng}
        />
      </div>
    </Link>
  );
}
