import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <div className="min-h-screen bg-white mt-5">
      <Navbar />
      <main className="pt-16">
        <Banner />
        <Hero />
        <div className="flex justify-center mt-6">
          <Feature />
        </div>
      </main>
    </div>
  );
}
