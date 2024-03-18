import Image from "next/image";
import Link from "next/link";
import { ImageResponse } from "next/server";
import React from "react";

const BlogCard = ({ blg }: any) => {
  const truncateBlogDesc =
    blg.attributes.Description.length > 80
      ? blg.attributes.Description.substring(0, 80) + "..."
      : blg.attributes.Description;
  const truncateBlogTitle =
    blg.attributes.Title.length > 30
      ? blg.attributes.Title.substring(0, 80) + "..."
      : blg.attributes.Title;

  const imageUrl =
    "http://127.0.0.1:1337" + blg.attributes.Img.data.attributes.url;

  return (
    <div className="rounded-lg  h-[400px] shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/blog/${blg.id}`}>
        <div>
          <Image
            width={900}
            height={300}
            objectFit="cover"
            src={imageUrl}
            alt=""
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {truncateBlogTitle}
          </h2>
          <p className="text-gray-600">{truncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
