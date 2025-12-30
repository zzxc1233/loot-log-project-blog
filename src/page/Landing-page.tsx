import Header from "../components/Header"
import Article from "../components/ArticleSection"
import { BlogCard } from "@/components/BlogCard"

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