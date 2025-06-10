"use client";
import { useLangStore } from "@/hooks/useLangStore";
import React from "react";

export default function BaseUserInterface({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang } = useLangStore();
  return (
    <main className={`${lang === "en" ? "" : " text-[15px]"}`}>{children}</main>
  );
}
