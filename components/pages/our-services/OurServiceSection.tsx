"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useTranslation from "@/hooks/useTranslation";
import { useFacilities } from "@/hooks/api/facilities";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLangStore } from "@/hooks/useLangStore";
import Image from "next/image";
import React from "react";

const services = [
  "Consultation",
  "Online Pharmacy",
  "Telehealth",
  "Vaccination",
  "Subscidized Healthcare Programs",
  //   "Laboratory tests",
  //   "ECG and USG",
  //   "Family planning",
  //   "Subsidized healthcare",
  // "Medical check-up",
  // "Dental care",
  // "Eye care",
];

export default function OurServiceSection() {
  return (
    <section className=" py-16 bg-gray-50">
      <div className=" container">
        {/* <div className="relative py-8 max-w-[200px] mx-auto">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t-2 border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 font-medium tracking-wider">
                    Our Services
                  </span>
                </div>
              </div> */}
        <h3 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          Our <span className="text-yellow-400">Services</span>
        </h3>
        {/* <div className="grid md:grid-cols-3 gap-6">
          {.map((service, index) => (
            <div
              key={index}
              className={`group rounded-lg border px-6 py-10 text-center hover:bg-primary hover:text-white`}
            >
              <Image
                src={"/icons/building.png"}
                alt={service}
                width={30}
                height={30}
                className="mx-auto mb-4 filter group-hover:brightness-[5]"
              />
              <h3 className="font-semibold text-lg">{service}</h3>
              <p className=" text-gray-500 group-hover:text-gray-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                adipisci.
              </p>
            </div>
          ))}
        </div> */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {services.map((f, idx) => (
            <SwiperSlide key={f}>
              <div className="rounded overflow-hidden shadow-lg">
                <img
                  src={"/imgs/default.png"}
                  alt={f}
                  className="w-full h-48 object-cover"
                />
                <div
                  className={`p-4 ${
                    idx === 2 ? "bg-green-300" : "bg-primary"
                  } text-white`}
                >
                  <h3 className="text-lg font-semibold text-center">{f}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #d1d5db; /* gray-300 */
            opacity: 1;
            width: 15px;
            height: 4px;
            border-radius: 3px;
          }

          .swiper-pagination-bullet-active {
            background-color: #ffc63e; /* amber-500 */
          }
        `}</style>
      </div>
    </section>
  );
}
