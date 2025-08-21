import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 mb-16 gap-8 flex flex-col  my-32">
      <p className=" font-rubik text-lg text-black/60 font-medium ">
        Trusted by
      </p>  
      <div className="flex justify-center max-w-xl mx-auto gap-8 border-b-2 border-neutral-200 py-6">
        <Image src="/image/landing/icon.svg" className="w-full h-8 xl:h-12 object-contain" alt="logo" width={100} height={100} />
        <Image src="/image/landing/Google.svg" className="w-full h-8 xl:h-12 object-contain" alt="logo" width={100} height={100} />
        <Image src="/image/landing/youtube.svg" className="w-full h-8 xl:h-12 object-contain" alt="logo" width={100} height={100} />
        <Image src="/image/landing/Discord.svg" className="w-full h-8 xl:h-12 object-contain" alt="logo" width={100} height={100} />
      </div>
    </section>
  );
}
