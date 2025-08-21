import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white max-w-[90rem] mx-auto">
      <Navbar />
      <main className="pt-16">
        <Banner />
        <Hero />
      </main>
    </div>
  );
}
