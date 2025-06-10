"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DaungMyiSection() {
  const handleClick = () => {
    window.location.href = "viber://chat?number=%2B959773371118";

    setTimeout(() => {
      window.location.href = "tel:+959773371118";
    }, 1500);
  };
  return (
    <section className=" relative">
      <div>
        <Image
          src={"/source/ddm_bg.png"}
          alt="ddm bg"
          width={1920}
          height={1920}
          className=" w-full h-auto hidden xl:inline-block"
        />
      </div>
      <div className=" xl:absolute w-full h-full top-0 left-0 ">
        <div className="container h-full grid grid-cols-1 xl:grid-cols-2">
          <div className=" flex flex-col justify-between">
            <div>
              <Image
                src={"/source/ddm_logo.png"}
                alt="ddm_logo"
                width={200}
                height={200}
                className="w-[200px] h-auto"
              />
            </div>
            <div className=" space-y-7">
              <h4 className=" text-xl uppercase font-medium text-base-ddm">
                Daung Daung Myi :
              </h4>
              <h2 className=" text-3xl lg:text-5xl font-bold text-primary">
                Feasible for All
              </h2>
              <p>
                Our D.D.M telehealth platform delivers accessible, convenient,
                and high-quality virtual healthcare to communities, with a
                particular focus on supporting individuals managing chronic
                diseases. No app downloads are required—patients can connect
                seamlessly with licensed and certified professionals, receive
                accurate e-prescriptions, and access reliable care , anywhere.
                Complementing this, we offer tailored virtual care experiences
                guided by dedicated Patient Journey Partners (PJPs), ensuring a
                smooth, connected continuum of care. Accessible even without
                internet—via the Viber platform—our solution removes traditional
                barriers to care.
              </p>
              <ul className=" space-y-3">
                <li>
                  <div className=" flex items-center gap-5">
                    <Image
                      src={"/source/check-mark.png"}
                      alt="mark"
                      width={100}
                      height={100}
                      className=" w-[25px] h-auto"
                    />
                    <p className=" text-base-ddm font-medium">
                      To provide accessible, convenience, reliable, and
                      high-quality telehealth services for not only local
                      patients but also migrants.
                    </p>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-5">
                    <Image
                      src={"/source/check-mark.png"}
                      alt="mark"
                      width={100}
                      height={100}
                      className=" w-[25px] h-auto"
                    />
                    <p className=" text-base-ddm font-medium">
                      Ensuring convenient and professional healthcare solutions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-5">
                    <Image
                      src={"/source/check-mark.png"}
                      alt="mark"
                      width={100}
                      height={100}
                      className=" w-[25px] h-auto"
                    />
                    <p className=" text-base-ddm font-medium">
                      Accessibility, Trust, Innovation, Care, Efficiency.
                    </p>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-5">
                    <Image
                      src={"/source/check-mark.png"}
                      alt="mark"
                      width={100}
                      height={100}
                      className=" w-[25px] h-auto"
                    />
                    <p className=" text-base-ddm font-medium">
                      No need to download any app for D.D.M Tele consultation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-5">
                    <Image
                      src={"/source/check-mark.png"}
                      alt="mark"
                      width={100}
                      height={100}
                      className=" w-[25px] h-auto"
                    />
                    <p className=" text-base-ddm font-medium">
                      Precisely Prescribe e-Prescription
                    </p>
                  </div>
                </li>
              </ul>
              <div>
                <button
                  onClick={handleClick}
                  className="px-8 py-3 border bg-base-ddm border-white text-base font-medium rounded-md text-white hover:bg-base-ddmdark hover:text-white md:py-4 md:text-lg md:px-10 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden xl:block"></div>
      </div>
    </section>
  );
}
