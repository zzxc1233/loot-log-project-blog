import Header from "../components/Header";
import Article from "../components/blog/ArticleSearch";
import { BlogCard } from "../components/blog/BlogCard";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  return (
    <>
      <Navbar />
      <section className="xl:px-30 xl:py-14 bg-midnight-900 min-h-screen">
        <Header />
        <Article selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <BlogCard category={selectedCategory} />
      </section>
      <Footer />
    </>
  );
}

export default HeroSection;
