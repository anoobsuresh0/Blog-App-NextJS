"use client";
import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

const Categories = ({ categories }: { categories: any }) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[2].attributes.Title);
  }, [categories]);

  // Sort the categories in ascending order
  const sortedCategories = categories?.data?.sort((a: any, b: any) =>
    a.attributes.Title.localeCompare(b.attributes.Title)
  );

  return (
    <div className="flex gap-6 mb-8 ">
      {sortedCategories?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
