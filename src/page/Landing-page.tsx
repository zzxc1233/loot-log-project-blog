import Header from "../components/Header";
import ArticleSection from "../components/common/ArticleSection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function HeroSection() {
  return (
    <>
      <Navbar />
      <section className="px-4 sm:px-6 py-6 sm:py-10 xl:px-30 xl:py-14 bg-space-900 min-h-screen">
        <Header />
        <ArticleSection />
      </section>
      <Footer />
    </>
  );
}

export default HeroSection;
