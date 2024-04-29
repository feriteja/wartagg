"use client";
import generateSlug from "@/lib/generateSlug";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardInfoType = {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
};

function ListCard(props: CardInfoType) {
  const slugTitle = generateSlug(props.title);

  return (
    <article className="group shadow-md rounded-sm relative">
      <Link
        href={{ pathname: `/news/${slugTitle}` }}
        onClick={() =>
          localStorage.setItem(`news-${slugTitle}`, JSON.stringify(props))
        }
      >
        <img
          alt={props.title}
          src={props.image}
          className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{props.title}</h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {props.description}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default ListCard;
