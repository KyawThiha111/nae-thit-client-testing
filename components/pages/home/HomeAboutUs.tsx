"use client";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeAboutUs() {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      {/* About Us Section */}
      <section className=" container pb-16 pt-8">
        <div className="relative py-8 max-w-[200px] mx-auto">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 font-medium tracking-wider">
              {t("about_us")}
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-200 rounded-lg">
            <Image
              src={"/imgs/hands.jpg"}
              alt="About Us"
              width={800}
              height={600}
              priority={true}
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className=" text-lg md:text-3xl mb-3 font-bold text-accent-orange">
              Background
            </h2>
            <p className=" text-gray-600">
              In Myanmar, a few organizations are working under the social
              enterprise model, primarily adopting six key frameworks: credit
              unions, community-based organizations, non-governmental
              organizations with commercial arms, social firms, cooperatives,
              fair trade, and microfinance. For the betterment of the health of
              the people in Myanmar, Nae Thit Co.,Ltd By Guarantee, a social
              enterprise, was established in 2022 and provides quality
              healthcare services focusing on ...
            </p>
            <Link
              href={"/about-us#background"}
              className="text-primary-dark mt-4 text-sm inline-block font-medium"
            >
              {t("read_more")}
            </Link>
          </div>
        </div>
      </section>
      {/* Social Enterprise Section */}
      <section className=" container pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className=" order-2 md:order-1">
            <h3 className="text-lg md:text-3xl mb-3 font-bold text-accent-orange">
              A Reason To Smile
            </h3>
            <p className=" text-gray-700">
              In a world where most of non-profits focus solely on service, our
              social enterprise model inspires a new way forward: financialy
              viable, smartly funded, and diverstiified for lasting impact. We
              believe that substainable success not only changes lives but also
              builds a future where every smile counts. Join us in redefining
              change- because when passion is backed by sound business strategy,
              every step toward progress is a reason to smile.
            </p>
            {/* <button className="text-primary-dark mt-4 text-sm">
              {t("read_more")}
            </button> */}
          </div>
          <div className="bg-gray-300 rounded-lg order-1 md:order-2">
            <Image
              src={"/imgs/reason_smile.jpg"}
              alt="About Us"
              width={800}
              height={600}
              priority={true}
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
