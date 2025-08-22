import Image from "next/image";
import { Card, CardTitle, CardHeader, CardContent } from "./ui/card";

export default function Banner() {
  return (
    <div className="bg-black w-full h-full min-md:rounded-t-[9rem] mx-auto">
      <section className="text-left max-w-[120rem] mx-auto px-8 xl:px-24 mb-44 mt-32">
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
              
              <div className="max-md:block hidden h-full w-full">
                <Image src="/image/landing/featured1_mobile.svg" className="w-full h-full object-contain" alt="logo" width={100} height={100} />
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:gap-8 mt-16">
            <Card className="bg-white border-0 shadow-none relative 3xl:px-5 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex justify-start items-start">
                  <p className="text-2xl xl:text-3xl 3xl:text-4xl font-semibold max-w-[18rem]">Safe and Secure Login</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-left text-black w-full text-lg xl:text-2xl 3xl:text-3xl font-light max-w-[14rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="min-md:absolute bottom-0 -right-[3.3rem] h-full">
                  <Image src="/image/landing/featured2.svg" className="w-[80%] max-md:w-[60%] h-full max-md:-mt-40 max-md:ml-38" alt="logo" width={100} height={100} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-none relative 3xl:px-5 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex justify-start items-start">
                  <p className="text-2xl xl:text-3xl 3xl:text-4xl font-semibold max-w-[20rem]">Stress-free booking and event planning</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-left text-black w-full text-xl xl:text-2xl 3xl:text-3xl font-light max-w-[15rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
                <div className="min-md:absolute -bottom-5  -right-[5rem] h-full">
                  <Image src="/image/landing/featured3.svg" className=" w-[80%] h-full max-md:-mt-24 max-md:ml-22" alt="logo" width={100} height={100} />
                </div>
                {/* <div className="max-md:block hidden h-full w-full">
                  <Image src="/image/landing/featured1_mobile.svg" className="w-full h-full object-contain" alt="logo" width={100} height={100} />
                </div> */}
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-none overflow-hidden 3xl:px-5">
              <CardHeader>
                <CardTitle className="flex justify-start items-start">
                  <p className="text-2xl xl:text-3xl 3xl:text-4xl font-semibold max-w-[20rem]">
                    Instant Payment-subscription
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-left text-black w-full text-xl xl:text-2xl 3xl:text-3xl font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-center items-center w-full h-full">
                  <Image src="/image/landing/featured4.svg" className=" h-full w-[50%] max-md:w-[70%] -mt-20" alt="logo" width={100} height={100} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}