"use client";
// components/FacilitiesSlider.tsx

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useTranslation from "@/hooks/useTranslation";
import { useFacilities } from "@/hooks/api/facilities";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLangStore } from "@/hooks/useLangStore";
import { global_config } from "@/constant/config";

const facilities = [
  { id: 1, name: "NTKM – 1", img: "/imgs/ntkm_1.png", hours: "8am - 5pm" },
  { id: 2, name: "NTKM – 2", img: "/imgs/ntkm_2.png", hours: "9am - 6pm" },
  { id: 3, name: "NTKM – 3", img: "/imgs/ntkm_3.jpg", hours: "10am - 4pm" },
  { id: 4, name: "NTKM – 4", img: "/imgs/ntkm_1.png", hours: "10am - 5pm" },
  { id: 5, name: "NTKM – 5", img: "/imgs/ntkm_2.png", hours: "10am - 5pm" },
];

export default function FacilitiesSlider() {
  const { lang } = useLangStore();
  const { data, refetch, isLoading } = useFacilities({ lang });
  const { t } = useTranslation();
  const [activeFacilities, setActiveFacilities] =
    useState<TypeOfFacilities | null>(null);
  useEffect(() => {
    refetch();
  }, [lang]);
  if (isLoading) {
    return (
      <div className=" container py-10">
        <div className=" w-full h-60 bg-gray-200"></div>
      </div>
    );
  }
  return (
    <>
      <div className=" container">
        <div className="w-full py-10">
          <div className="relative py-8 max-w-[250px] mx-auto">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 font-medium tracking-wider">
                {t("clinics_pharmacies")}
              </span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">
            Explore Our <span className="text-yellow-500">Facilities</span>
          </h2>
          {data ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                // 1280: { slidesPerView: 4 },
              }}
              className="!pb-10"
            >
              {data?.facilities?.map((f: TypeOfFacilities) => (
                <SwiperSlide key={f._id}>
                  <div
                    className="rounded overflow-hidden shadow-lg"
                    onClick={() => setActiveFacilities(f)}
                  >
                    <img
                      src={global_config.base_url + `${f.photo}`}
                      alt={f.clinicname}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{f.clinicname}</h3>
                      <p className="text-sm text-gray-500">
                        <span className="text-black"> {f.address}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Opening Hours: {f.openinghr}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
      {activeFacilities?._id ? (
        <div className="  w-full h-screen fixed top-0 left-0 grid place-items-center bg-gray-800 bg-opacity-80 z-50">
          <div className="container ">
            <div className="w-full md:w-[450px] p-3 rounded-lg bg-white relative mx-auto">
              <button
                className="  absolute -top-3 -right-3 bg-primary p-2 rounded-full"
                onClick={() => setActiveFacilities(null)}
              >
                <X size={20} color="white" />
              </button>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.202361019662!2d96.2548748!3d16.865881299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c18d00231b55bb%3A0xe58f4045a74b5e72!2z4YCU4YCx4YC34YCe4YCF4YC64YCA4YC74YCU4YC64YC44YCZ4YCs4YCh4YCR4YCw4YC44YCA4YCv4YCG4YCx4YC44YCB4YCU4YC64YC4LeGBgyAoTmFlIFRoaXQgS3lhbm4gTWFyIFNwZWNpYWxpc3QgQ2xpbmljIDMp!5e0!3m2!1sen!2smm!4v1746555462956!5m2!1sen!2smm"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {activeFacilities.clinicname}
                </h3>
                <p className="text-sm text-gray-500">
                  Address: {activeFacilities.address}
                </p>
                <p className="text-sm text-gray-500">
                  Opening Hours: {activeFacilities.openinghr}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
