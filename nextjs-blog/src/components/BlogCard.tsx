import Image from "next/image";
import Link from "next/link";
import { ImageResponse } from "next/server";
import React from "react";

const BlogCard = ({ blg }: any) => {
  const truncateBlogDesc =
    blg.attributes.Description.length > 80
      ? blg.attributes.Description.substring(0, 80) + "..."
      : blg.attributes.Description;

  const imageUrl =
    "http://127.0.0.1:1337" + blg.attributes.Img.data.attributes.url;

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/blog/${blg.id}`}>
        <div>
          <Image
            width={900}
            height={300}
            layout="fill "
            objectFit="cover"
            src={imageUrl}
            alt=""
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {blg.attributes.Title}
          </h2>
          <p className="text-gray-600">{truncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
