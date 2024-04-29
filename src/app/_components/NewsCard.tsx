"use client";
import generateSlug from "@/lib/generateSlug";
import moment from "moment";
import Link from "next/link";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  publishedAt: string;
  image: string;
};

function NewsCard(props: CardProps) {
  const slugTitle = generateSlug(props.title);
  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 ">
      <Link
        href={{ pathname: `/news/${slugTitle}` }}
        onClick={() =>
          localStorage.setItem(`news-${slugTitle}`, JSON.stringify(props))
        }
      >
        <img
          alt={props.title}
          src={props.image}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t h-full from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-white/90">
              {moment(props.publishedAt).format("Do MMM YYYY")}
            </time>

            <h3 className="mt-0.5 text-lg text-white">{props.title} </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              {props.description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default NewsCard;
