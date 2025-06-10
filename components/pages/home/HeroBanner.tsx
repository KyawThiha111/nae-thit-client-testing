"use client";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroBanner() {
  const { t } = useTranslation();
  const navigate = useRouter();
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/imgs/banner.jpg"
          alt="Healthcare background"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl drop-shadow-md"
            style={{ lineHeight: "1.2" }}
          >
            Providing <span className=" text-primary">Quality Healthcare</span>{" "}
            with Affordable Solutions
          </h1>
          <p className="mt-6 mx-auto text-xl text-white drop-shadow-md">
            Nae Thit Kyan Mar (NTKM) is a pioneering healthcare social
            enterprise in Myanmar, committed to delivering affordable,
            comprehensive quality healthcare services through innovative
            solutions. With a strong focus on Liver Health (Hepatitis B & C,
            Fatty Liver), NCDs (Hypertension, Diabetes), and RMNCH
            (Reproductive, Maternal, Newborn, and Child Health), NTKM operates
            specialist clinics and retail pharmacies. We aim to transform
            healthcare accessibility with digital integration and provide
            impactful solutions to the people of Myanmar.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => navigate.push("/about-us")}
              className="bg-primary-dark text-white hover:bg-accent-orange px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
            >
              {t("explore_more")}
            </button>
            {/* <button className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-secondary md:py-4 md:text-lg md:px-10 transition duration-300">
                    Explore More
                  </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
