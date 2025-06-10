import Image from "next/image";
import React from "react";

const values = [
  {
    title: "Substainability",
    img: "/source/Substainability.png",
  },
  {
    title: "Learning",
    img: "/source/Learning.png",
  },
  {
    title: "Innovation",
    img: "/source/Innovation.png",
  },
  {
    title: "Leadership",
    img: "/source/Leadership.png",
  },
  {
    title: "Collaboration Teamwork",
    img: "/source/CollaborationTeamwork.png",
  },
];

export default function OurValues() {
  return (
    <section className=" bg-primary py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-[80px] text-center">
        Our <span className="text-white">Values</span>
      </h2>
      <div className=" h-2 bg-white hidden lg:block"></div>
      <div className=" container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 -mt-[55px]">
        {values.map((value, idx) => (
          <div key={idx} className="">
            <div className=" w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] shadow bg-white rounded-full grid place-items-center mx-auto ">
              <Image
                src={value.img}
                alt=""
                width={100}
                height={100}
                className=" w-10 sm:w-14 h-10 sm:h-14"
              />
            </div>
            <h3 className=" text-center font-semibold text-xl text-white mt-3">
              {value.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
