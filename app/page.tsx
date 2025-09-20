import Navbar from "@/components/Navbar";
import Banner from "@/app/_components/home/Banner";
import Hero from "@/app/_components/home/Hero";
import Feature from "@/app/_components/home/Feature";
import Portfolio from "@/app/_components/home/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Hero />
      <div className="flex flex-col justify-center mt-6 bg-black dark:bg-white min-md:rounded-t-[9rem]">
        <Feature />
        <Portfolio />
      </div>
    </div>
  );
}
