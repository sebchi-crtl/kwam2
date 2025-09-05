import Image from "next/image";

export default function Banner() {
  return (
    <div className="mx-auto">
      {/* <div className="flex justify-center mb-8">
        <div className="border-2 border-orange-300 px-4 py-2 rounded-full font-normal text-base font-rubik tracking-widest hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
          Coming Soon
        </div>
      </div> */}
      <section className="text-center max-w-4xl xl:max-w-5xl mx-auto px-6 mb-16 mt-16">
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-semibold text-gray-900 mb-6 font-rubik animate-fade-in-up">
        Why predict the future
        </h1>
        <div className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-rubik animate-fade-in-up-delay">
          <p className="mb-4">
          when we can build it?
          </p>
        </div>
      </section>
      <div className="flex justify-center w-full animate-fade-in-up-delay-2">
        <Image src="/image/landing/banner_hero.svg" className="w-full h-full object-cover max-md:hidden hover:scale-105 transition-transform duration-700" alt="banner" width={1000} height={1000} />
        <Image src="/image/landing/banner_hero_mobile.svg" className="w-full h-full object-cover max-md:block hidden hover:scale-105 transition-transform duration-700" alt="banner" width={1000} height={1000} />
      </div>
    </div>
  );
}
