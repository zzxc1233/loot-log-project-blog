import Header from "../components/Header";
import Article from "../components/blog/ArticleSearch";
import { BlogCard } from "@/components/blog/BlogCard";
import { useState } from "react";

function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  return (
    <>
      <section className="xl:px-30 xl:py-14 bg-midnight-900 min-h-screen">
        <Header />
        <Article selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <BlogCard category={selectedCategory} />
      </section>
    </>
  );
}

export default HeroSection;
