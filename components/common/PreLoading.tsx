"use client";
import { LoaderIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function PreLoading() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div
      className={`w-full h-screen  bg-blue-950 bg-opacity-90 grid place-items-center ${
        loading ? " fixed top-0 left-0 z-50" : "hidden"
      }`}
    >
      <LoaderIcon color="white" size={50} className=" animate-spin" />
    </div>
  );
}
