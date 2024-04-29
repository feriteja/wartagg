"use client";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function DetailPage({ params }: { params: { title: string } }) {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem(`news-${params.title}`);
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      router.replace("/");
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem(`news-${params.title}`);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      localStorage.removeItem(`news-${params.title}`);
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 mb-2">{data.description}</p>
      <div className="flex items-center mb-4">
        <span className="text-gray-500 mr-2">Published on:</span>
        <span>{new Date(data.publishedAt).toDateString()}</span>
      </div>
      <img
        src={data.image}
        alt={data.title}
        className="w-full mb-4 rounded-lg"
      />
      <p className="mb-4">{data.content}</p>
      <a
        href={data.url}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
      <p className="text-gray-500 mt-2">
        Source: {data.source.url}
        <a
          href={data.url}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.name}
        </a>
      </p>
    </div>
  );
}

export default DetailPage;
