import BlogDetail from "@/components/pages/blogs/BlogDetail";
import React from "react";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return <BlogDetail blogId={params.id} />;
}
