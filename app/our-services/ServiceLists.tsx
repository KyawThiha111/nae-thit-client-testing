"use client";
import { usePosts } from "@/hooks/api/post";
import React, { useState } from "react";

export default function ServiceLists() {
  const [page, setPage] = useState(1);
  const per_page = 10;
  const { data, isLoading, error } = usePosts({ page, per_page });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log(data, "data");
  return (
    <div>
      {/* <div>
        {data.posts.map((post: any, id: number) => (
          <div key={id}>{post.title}</div>
        ))}
      </div> */}
    </div>
  );
}
