"use client";
import { useBlogDetail } from "@/hooks/api/blog";
import { useLangStore } from "@/hooks/useLangStore";
import { formattedDate } from "@/libs/format.date";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

// type BlogType = {
//   success: boolean;
//   blog: {
//     title: string;
//     description: string;
//     postdate: string;
//     timelength: string;
//     category: string;
//   };
// };

export default function BlogDetail({ blogId }: { blogId: string }) {
  const { lang } = useLangStore();
  const { data, isLoading, refetch } = useBlogDetail(blogId, { lang });
  useEffect(() => {
    refetch();
  }, [lang]);
  if (isLoading) {
    return (
      <div className=" container py-5">
        <div className=" max-w-[500px] mx-auto py-10 bg-gray-100 min-h-[calc(100vh-100px)]"></div>
      </div>
    );
  }
  return (
    <>
      {data ? (
        <div className=" container">
          <div className=" max-w-[500px] mx-auto py-10">
            <div className=" mb-5 flex items-center gap-3 font-medium">
              <ChevronLeft size={20} />
              <Link href={"/blogs"}>Back</Link>
            </div>
            <h1 className=" text-xl md:text-3xl font-bold">
              {data?.blog?.title}
            </h1>
            <div className=" mt-3">
              <div className="flex space-x-2 text-sm text-gray-500">
                <time dateTime="2023-10-15">
                  {formattedDate(data.blog.postdate)}
                </time>
                <span>•</span>
                <span>{data.blog.timelength} read</span>
              </div>
            </div>
            <div className=" mb-5 mt-3">
              <Image
                src={data.blog.image}
                alt="clinic"
                width={500}
                height={500}
                className=" w-full h-auto"
              />
            </div>
            <div>
              <p>{data.blog.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
