import Header from "./Header"
import Article from "./ArticleSection"

function HeroSection() {
    return (
        <>
            <section className="min-h-screen bg-brown-100 py-10 px-4 xl:px-30 xl:py-15">
                <Header />
                <div className="hidden xl:inline">
                    <Article />
                </div>
                <div className="inline xl:hidden">
                    <Article />
                </div>
            </section >
        </>
    )
}


export default HeroSection