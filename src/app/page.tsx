import { notFound } from "next/navigation";
import Hero from "./_components/Hero";
import NewsCard from "./_components/NewsCard";

export interface NewsType {
  totalArticles: number;
  articles: Article[];
}

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: Source;
}

export interface Source {
  name: string;
  url: string;
}

export default async function Home() {
  const newsDataResponse = await fetch(
    `${process.env.NEWS_API_URL}/top-headlines?category=general&lang=en&country=en&apikey=${process.env.NEWS_API_KEY}`,
    { next: { revalidate: 60 * 60 * 24 } }
  ).catch(() => notFound());

  if (!newsDataResponse.ok) {
    return <div>server error</div>;
  }

  const newsData = await newsDataResponse.json();

  const resultNewsData: Article[] = newsData.articles; // Assuming the data structure is { articles: CardInfoType[] }

  return (
    <main className="container mx-auto min-h-screen  items-center justify-between space-y-4">
      <Hero />
      <section className="grid grid-cols-12 gap-5 mx-8">
        {resultNewsData.map((data) => (
          <NewsCard {...data} key={data.url} />
        ))}
      </section>
    </main>
  );
}
