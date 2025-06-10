"use client";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";
import React from "react";

export default function HomeIntro() {
  const { t } = useTranslation();
  return (
    <section className=" py-16">
      <div className=" container mx-auto">
        <h2 className=" text-xl lg:text-2xl font-bold text-center mb-3">
          HEALTH COMES FIRST :{" "}
          <span className=" text-primary">
            Almost nothing else matter in its absence
          </span>
        </h2>
        <p>
          In September 2022, Nae Thit Co., Ltd. By Guarantee—a social
          enterprise—was established to create positive impact in health,
          education, and the economy of Myanmar. Its name, “Nae Thit Kyan Mar,”
          meaning “Healthy (Kyan Mar) New Day (Nae Thit),” reflects a hopeful
          vision: that everyone can start each day with a smile, feeling a sense
          of wellbeing and assurance like never before. Nae Thit Kyan Mar is a
          chain of clinics that fill the gap in the health services needed in
          the community by giving quality healthcare services at subsidized
          prices in innovative ways...
        </p>
        <div className="container mx-auto text-center mt-7">
          <Link
            href={"/about-us#intro"}
            className=" text-secondary font-medium underline"
          >
            {t("see_more")}
          </Link>
        </div>
      </div>
    </section>
  );
}
