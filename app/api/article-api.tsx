import { Article, ArticleCategory, ArticleListResponse } from "../types/article-types";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_API_KEY}&q=news%20%20in%20english`
        )
      ).json()) as ArticleListResponse
    ).results;
  }

  static async fetchBasedOnCategory(id:ArticleCategory): Promise<Article[]> {
    return (
      (await (
        await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_API_KEY}&q=${id}`
        )
      ).json()) as ArticleListResponse
    ).results;
  }
}
