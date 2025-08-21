import Image from "next/image";
import { Card, CardTitle, CardHeader, CardContent } from "./ui/card";

export default function Banner() {
  return (
    <div className="bg-black w-full h-full min-md:rounded-t-[9rem] mx-auto">
      <section className="text-left max-w-[120rem] mx-auto px-8 xl:px-24 mb-16 mt-32">
        <h1 className="text-4xl text-left md:text-6xl xl:text-8xl font-semibold text-orange-400 mb-6 font-rubik flex flex-col">
          Featured Projects
          <span className="text-white font-light text-xl xl:text-2xl">
            A glimpse of attend
          </span>
        </h1>
        <div className="text-lg md:text-xl text-gray-600 leading-relaxed mt-12 mx-auto font-rubik">
          <Card className="bg-white border-0 shadow-none relative px-4 xl:px-10">
            <CardHeader>
              <CardTitle className="flex justify-start items-start">
                <Image src="/image/landing/Icon-black.svg" className=" w-full xl:w-[15rem] 3xl:w-[20rem] h-12 xl:h-26 object-contain" alt="logo" width={100} height={100} />
              </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-left text-black w-full xl:max-w-3xl 3xl:max-w-4xl text-2xl xl:text-3xl 3xl:text-[2.3rem] font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="min-md:absolute max-md:hidden bottom-0 right-[5rem] 3xl:right-[10rem]  h-full ">
                  <Image src="/image/landing/featured1buttom.svg" className=" w-full h-full " alt="logo" width={100} height={100} />
                  <Image src="/image/landing/featured1top.svg" className=" w-full -top-15 left-40 absolute h-full" alt="logo" width={100} height={100} />
                </div>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
