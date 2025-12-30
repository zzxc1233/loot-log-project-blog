import Header from "../components/Header"
import Article from "../components/ArticleSection"
import { BlogCard } from "@/components/BlogCard"

function HeroSection() {
    return (
        <>
            <Header />
            <Article className="hidden xl:inline" />
            <Article className="inline xl:hidden" />
            <BlogCard />
        </>
    )
}


export default HeroSection