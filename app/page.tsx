import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white mt-5">
      <Navbar />
      <main className="pt-16">
        <Banner />
        <Hero />
        <div className="flex flex-col justify-center mt-6 bg-black min-md:rounded-t-[9rem]">
          <Feature />
          <Portfolio />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
