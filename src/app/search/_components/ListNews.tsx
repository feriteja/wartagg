"use client";
import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
import { notFound, useSearchParams } from "next/navigation";
import { Article } from "@/app/page";

function ListNews({}: any) {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const newsDataResponse = await fetch(
          `${process.env.NEXT_PUBLIC_NEWS_API_URL}/search?q="${title}"&country=us&lang=en&in=title&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
          { cache: "no-cache" }
        ).catch((err) => notFound());

        if (!newsDataResponse.ok) {
          return <div>server error</div>;
        }

        const newsData = await newsDataResponse.json();

        const resultNewsData: Article[] = newsData.articles; // Assuming the data structure is { articles: CardInfoType[] }
        setNewsData(resultNewsData);
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [title]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="space-y-6">
      {newsData.map((data, idx) => (
        <ListCard {...data} key={data.url} />
      ))}
    </div>
  );
}

export default ListNews;
