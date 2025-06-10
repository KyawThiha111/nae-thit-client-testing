"use client";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    id: 1,
    name: "Subscidized Healthcare",
    img: "/source/heath_care.png",
    link: "/our-services",
    desc: "We provide subsidized healthcare through creating affordable subscription models designed to ease the cost burden of long-term care.",
  },
  {
    id: 2,
    name: "Telehealth",
    img: "/source/teleheath_care.png",
    link: "/our-services",
    desc: "We offer convenient virtual care with dedicated Patient Journey Partners (PJP) for smooth, connected care. No app download required, and accessible with or without internet—simply through Viber Platform.",
  },
  {
    id: 3,
    name: "Specialized Instead of Specialist",
    img: "/source/special_care.png",
    link: "/our-services",
    desc: "NTKM trains & empowers non-specialist doctors (e.g., MRCP-holding GPs) to deliver specialist-level care using standardized, evidence-based protocols.",
  },
];

export default function HomeServices() {
  const { t } = useTranslation();
  return (
    <section className=" py-10 bg-gray-50">
      <div className=" container">
        <div className="relative py-8 max-w-[200px] mx-auto">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 font-medium tracking-wider">
              {t("our_services")}
            </span>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          Explore Our <span className="text-yellow-400">Services</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${
                index === 1 ? "bg-green-300 text-white" : "bg-white"
              } shadow rounded-lg border px-6 py-8 text-center hover:bg-primary hover:text-white`}
            >
              <Image
                src={service.img}
                alt={service.name}
                width={60}
                height={60}
                className="mx-auto mb-4 filter group-hover:brightness-[5]"
              />
              <h3 className="font-semibold text-lg">{service.name}</h3>
              <p className=" group-hover:text-gray-100 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto text-center mt-7">
        <Link
          href={"/our-services"}
          className=" text-secondary font-medium underline"
        >
          {t("see_more")}
        </Link>
      </div>
    </section>
  );
}
