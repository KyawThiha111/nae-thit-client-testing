"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";

const missions = [
  {
    title: "Provide Accessible and High-Quality Care",
    description:
      "Ensure that high-quality healthcare services are accessible to all, particularly underserved communities, through innovative and patient-centered approaches.",
  },
  {
    title: "Drive Innovation in Healthcare Delivery",
    description:
      "Continuously explore and implement cutting-edge healthcare technologies and practices to improve patient outcomes and operational efficiency.",
  },
  {
    title: "Promote Sustainable Healthcare Practices",
    description:
      "Integrate sustainable practices across all operations to maintain financial viability and environmental stewardship while delivering exceptional healthcare.",
  },
  {
    title: "Empower Healthcare Professionals",
    description:
      "Invest in the continuous education, training, and well-being of healthcare professionals to ensure the highest standard of care.",
  },
  {
    title: "Foster Community Health and Well-being",
    description:
      "Engage in community outreach and health education programs to promote preventive care and improve the overall health and well-being of the population.",
  },
  {
    title: "Ensure Ethical and Compassionate Care",
    description:
      "Uphold the highest ethical standards and compassion in all interactions with patients, staff, and partners, prioritizing their dignity and respect.",
  },
  {
    title: "Collaborate for Broader Impact",
    description:
      "Partner with local, regional, and international organizations to leverage resources, share knowledge, and amplify the impact on public health.",
  },
  {
    title: "Monitor and Evaluate for Continuous Improvement",
    description:
      "Implement robust monitoring and evaluation mechanisms to continuously assess and enhance the quality and effectiveness of healthcare services and organizational practices.",
  },
];

export default function OurMission() {
  const { t } = useTranslation();
  return (
    <section className=" bg-gray-50">
      <div className=" container px-4 py-10 overflow-x-hidden">
        <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          Our <span className="text-primary">Mission</span>
        </h2>
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
          style={{ height: "290px" }}
        >
          {missions.map((item, idx) => (
            <SwiperSlide key={idx} className="">
              <div className="bg-white px-6 py-10 rounded-xl text-center shadow relative h-full">
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <p className="italic text-gray-700 ">{item.description}</p>
                {/* <p className="text-sm text-gray-500">{t.location}</p> */}
                <div className=" w-full  absolute top-0 left-0">
                  <div className="w-14 h-14 rounded-full bg-primary text-white mx-auto -mt-7 grid place-items-center">
                    <span className=" text-3xl font-bold">{idx + 1}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper {
            overflow: visible;
          }
          .swiper-pagination-bullet {
            background-color: #d1d5db; /* gray-300 */
            opacity: 1;
            width: 12px;
            height: 5px;
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
