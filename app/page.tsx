import Aboutus from "@/components/home/Aboutus";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import LatestArticles from "@/components/home/LatestArticles";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Aboutus />
      <LatestArticles />
      <Footer />
    </main>
  );
}
