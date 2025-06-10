"use client";
import { useAboutUsBanner } from "@/hooks/api/about";
import { useLangStore } from "@/hooks/useLangStore";
import Image from "next/image";
import React, { useEffect } from "react";

export default function AboutUsBanner() {
  const { lang } = useLangStore();
  const { data, isLoading, refetch } = useAboutUsBanner({ lang });
  useEffect(() => {
    refetch();
  }, [lang]);
  if (isLoading) {
    return (
      <>
        <section className="relative bg-gray-200 text-white py-24 h-[200px]"></section>

        {/* About Description */}
        <section className="py-16 bg-white" id="background">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" min-h-[200px] bg-gray-200"></div>
            <div className=" min-h-[200px] lg:h-auto bg-gray-200 rounded-lg"></div>
          </div>
        </section>
      </>
    );
  }
  if (!data?.data) return <p>Data not found</p>;
  return (
    <>
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1
            className={`${
              lang === "en" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            } font-bold mb-4 text-center text-primary`}
          >
            {data?.data.title}
          </h1>
          <p
            className={`${
              lang === "en" ? "text-xl" : " mt-2"
            }  max-w-2xl text-center mx-auto`}
          >
            {data.data.about}
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-white" id="background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="">
            <h2
              className={`${
                lang === "en" ? "text-3xl" : "text-2xl md:text-3xl"
              }  font-bold text-accent-orange mb-6`}
            >
              {data.data.blog.title}
            </h2>
            <div className="space-y-6 font-medium text-gray-700">
              <p>{data.data.blog.content}</p>
            </div>
          </div>
          <div className=" min-h-[200px] lg:h-auto bg-gray-200 rounded-lg">
            <Image
              src={"/imgs/amo.jpg"}
              alt="background"
              width={500}
              height={500}
              className=" w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
