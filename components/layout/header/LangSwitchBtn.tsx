import { useLangStore } from "@/hooks/useLangStore";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function LangSwitchBtn({ isMobile }: { isMobile: boolean }) {
  const { lang, changeLang } = useLangStore();
  const changeLangFunction = () => {
    if (lang === "en") {
      changeLang("my");
    }
    if (lang === "my") {
      changeLang("en");
    }
  };
  return (
    <button
      onClick={changeLangFunction}
      className={`${
        isMobile ? " w-full" : "hidden min-w-[95px]"
      }  md:inline-block bg-secondary hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors`}
    >
      {lang === "en" ? "Myanmar" : "အင်္ဂလိပ်"}
    </button>
  );
}
