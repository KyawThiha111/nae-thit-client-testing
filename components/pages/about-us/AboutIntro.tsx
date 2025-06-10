"use client";
import { useAboutUsBanner } from "@/hooks/api/about";
import { useLangStore } from "@/hooks/useLangStore";
import React, { useEffect } from "react";

export default function AboutIntro() {
  const { lang } = useLangStore();
  const { data, isLoading, refetch } = useAboutUsBanner({ lang });
  useEffect(() => {
    refetch();
  }, [lang]);
  if (isLoading) {
    return (
      <section className=" py-16" id="intro">
        <div className=" container mx-auto bg-gray-200 h-[200px]"></div>
      </section>
    );
  }
  if (!data?.data) return <p>Data not found</p>;
  return (
    <>
      <section className=" py-16" id="intro">
        <div className=" container mx-auto">
          <h2 className=" text-xl lg:text-2xl font-bold text-center mb-3">
            HEALTH COMES FIRST :{" "}
            <span className=" text-primary-dark">
              {" "}
              Almost nothing else matter in its absence
            </span>
          </h2>
          <p>{data.data.introduction}</p>
        </div>
      </section>
      {/* <section className=" py-16" id="intro">
        <div className=" container mx-auto">
          <h2 className=" text-xl lg:text-2xl font-bold text-center mb-3">
            Introducing{" "}
            <span className=" text-primary-dark">Nae Thit Kyan Mar</span>
          </h2>
          <p>
            In 2022, Nae Thit Co., Ltd. By Guarantee, a social enterprise, was
            established and provides quality healthcare services to the
            community by forming Nae Thit Kyan Mar. Nae Thit Kyan Mar is a chain
            of clinics that fill the gap in the health services needed in the
            community by giving quality healthcare services at subsidized prices
            in innovative ways. We provide quality healthcare services with
            affordable prices to the community in urban and peri-urban areas.
            The aim of Nae Thit Kyan Mar Clinics is to provide value, not only
            to the patients but also to the community, changing lives and better
            social impact. The very first clinic of Nae Thit Kyan Mar is the
            clinic of South Okkalapa Township, Yangon formed in September 2022.
            Then, Nae Thit Kyan Mar developed its second community clinic in
            Dagon Seikkan Township, Yangon and provides the needs of primary
            health care, maternal and child health care, family health care
            services and tele health care services with subsidized prices.
            Moreover, Nae Thit Kyan Mar provides the quality medicines to the
            community and its business partners at fair prices. In 2023 July,
            Nae Thit Kyan Mar merged with B.K.Kee clinic and B.K.Kee clinic in
            South Dagon Township became the 3rd community clinic of Nae Thit
            Clinic chains.
          </p>
        </div>
      </section> */}
    </>
  );
}
