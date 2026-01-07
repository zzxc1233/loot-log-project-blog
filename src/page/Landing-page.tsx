import Header from "../components/Header"
import Article from "../components/blog/ArticleSearch"
import { BlogCard } from "@/components/blog/BlogCard"

function HeroSection() {
    return (
        <>
            <section className="xl:px-30 xl:py-14">
                <Header />
                <Article className="hidden xl:inline" />
                <Article className="inline xl:hidden" />
                <BlogCard />
            </section>
        </>
    )
}


export default HeroSection