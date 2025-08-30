import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 mb-16 gap-8 flex flex-col w-full my-16 xl:my-32">
      <p className="font-rubik text-lg text-black/60 font-medium animate-fade-in-up">
        Trusted by
      </p>  
      <div className="flex justify-center max-w-xl mx-auto gap-2 xl:gap-8 border-b-2 border-neutral-200 py-6 w-full animate-fade-in-up-delay">
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/image/landing/Icon.svg" className="w-full h-6 xl:h-12 object-contain" alt="logo" width={100} height={100} />
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/image/landing/Google.svg" className="w-full h-6 xl:h-12 object-contain" alt="logo" width={100} height={100} />
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/image/landing/youtube.svg" className="w-full h-6 xl:h-12 object-contain" alt="logo" width={100} height={100} />
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/image/landing/Discord.svg" className="w-full h-6 xl:h-12 object-contain" alt="logo" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}
