import Header from "../components/Header";
import Article from "../components/blog/ArticleSearch";
import { BlogCard } from "@/components/blog/BlogCard";

function HeroSection() {
  return (
    <>
      <section className="xl:px-30 xl:py-14 bg-midnight-900 min-h-screen">
        <Header />
        <Article />
        <BlogCard />
      </section>
    </>
  );
}

export default HeroSection;
