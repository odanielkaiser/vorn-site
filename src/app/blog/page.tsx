import type { Metadata } from "next";
import { BlogPageClient } from "./blog-page-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre infraestrutura, segurança da informação, Linux, firewall, backup, LGPD e tecnologia para PMEs.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
