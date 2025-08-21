import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 mb-16">
      <p className="text-background font-rubik text-2xl">
        Trusted by 100+ companies
      </p>  
      <div className="flex justify-center max-w-xl mx-auto">
        <Image src="/image/logo1.png" className="w-full h-8 object-contain" alt="logo" width={100} height={100} />
        <Image src="/image/logo2.png" className="w-full h-8 object-contain" alt="logo" width={100} height={100} />
        <Image src="/image/logo3.png" className="w-full h-8 object-contain" alt="logo" width={100} height={100} />
        <Image src="/image/logo4.png" className="w-full h-8 object-contain" alt="logo" width={100} height={100} />
      </div>
    </section>
  );
}
