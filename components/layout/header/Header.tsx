"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LangSwitchBtn from "./LangSwitchBtn";
import { useLangStore } from "@/hooks/useLangStore";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";

const navItems = [
  {
    name: "Home",
    name_mm: "မူလ",
    hasDropdown: false,
    link: "/",
    //   dropdownItems: ["Home 1", "Home 2", "Home 3"],
  },
  {
    name: "About",
    name_mm: "ကျွန်ုပ်တို့အကြောင်း",
    hasDropdown: true,
    link: "/about-us",
    dropdownItems: [
      { name: "About Us", name_mm: "ကျွန်ုပ်တို့အကြောင်း", link: "/about-us" },
      {
        name: "Meet The Team",
        name_mm: "အဖွဲ့ဝင်များ",
        link: "/about-us#our-team",
      },
    ],
  },
  {
    name: "Our Services",
    name_mm: "ဝန်ဆောင်မှုများ",
    hasDropdown: false,
    link: "/our-services",
  },
  {
    name: "Blogs",
    name_mm: "ဘလော့များ",
    hasDropdown: false,
    link: "/blogs",
    // dropdownItems: ["Blog 1", "Blog 2"],
  },

  // {
  //   name: "Pages",
  //   hasDropdown: true,
  //   dropdownItems: ["Page 1", "Page 2", "Page 3"],
  // },
  // {
  //   name: "Donation",
  //   hasDropdown: true,
  //   dropdownItems: ["Donate 1", "Donate 2"],
  // },
  // {
  //   name: "Event",
  //   hasDropdown: true,
  //   dropdownItems: ["Event 1", "Event 2", "Event 3"],
  // },

  {
    name: "Contact Us",
    name_mm: "ဆက်သွယ်ရန်",
    hasDropdown: false,
    link: "/contact-us",
  },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { lang } = useLangStore();
  const { t } = useTranslation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center h-[75px]">
          {/* Logo */}
          <div
            className=" flex items-center select-none cursor-pointer py-4"
            onClick={() => router.push("/")}
          >
            <Image
              src={"/source/logo.png"}
              alt="logo"
              width={100}
              height={100}
              className=" w-[60px] h-auto"
            />
            <span className=" text-lg font-semibold text-accent-orange">
              {t("title")}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full py-6 group"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <button
                  className={`  flex items-center font-medium ${
                    activeDropdown === item.name
                      ? "text-blue-600"
                      : "text-secondary hover:text-blue-600"
                  } transition-colors`}
                  onClick={() => !item.hasDropdown && router.push(item.link)}
                >
                  {lang === "en" ? item.name : item.name_mm}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-2 group-hover:rotate-180
                      transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-[70px] w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.link}
                        href={`${dropdownItem.link}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-secondary"
                      >
                        {lang === "en"
                          ? dropdownItem.name
                          : dropdownItem.name_mm}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Join Button */}
          <div className="py-4 hidden lg:block">
            <LangSwitchBtn isMobile={false} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div className="absolute inset-y-0 right-0 w-4/5 bg-white shadow-xl">
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="px-6">
            {navItems.map((item) => (
              <div key={item.name} className="mb-4">
                <button
                  className={`flex items-center justify-between font-medium w-full py-2 ${
                    activeDropdown === item.name
                      ? "text-blue-600"
                      : "text-secondary hover:text-blue-600"
                  }`}
                  onClick={() => {
                    item.hasDropdown &&
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      );
                    !item.hasDropdown && router.push(item.link);
                    !item.hasDropdown && setMobileMenuOpen(false);
                  }}
                >
                  {lang === "en" ? item.name : item.name_mm}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 ml-1 transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.link}
                        href="#"
                        className="block py-1 text-gray-600 hover:text-blue-600"
                        onClick={() => {
                          router.push(dropdownItem.link);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {lang === "en"
                          ? dropdownItem.name
                          : dropdownItem.name_mm}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <LangSwitchBtn isMobile={true} />
          </nav>
        </div>
      </div>
    </header>
  );
}
