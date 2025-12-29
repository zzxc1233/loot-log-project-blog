import Header from "./Header"
import Article from "./ArticleSection"

function HeroSection () {
  return (
    <>
      <Header />
      <div className="inline xl:hidden">
        <Article />
      </div>
      <div className="hidden xl:inline">
        <Article />
      </div>
    </>
  )
}


export default HeroSection