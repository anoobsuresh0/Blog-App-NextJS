"use client";
import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

const Categories = ({ categories }: { categories: any }) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[2].attributes.Title);
  }, [categories]);

  // Separate the categories into two arrays: allCategories and sortedCategories
  const allCategories = categories?.data?.filter((category: any) => category.attributes.Title === "All");
  const sortedCategories = categories?.data?.filter((category: any) => category.attributes.Title !== "All")
    .sort((a: any, b: any) => a.attributes.Title.localeCompare(b.attributes.Title));

  return (
    <div className="flex gap-6 mb-8 ">
      {/* Display all categories first */}
      {allCategories?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
      {/* Display sorted categories */}
      {sortedCategories?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
