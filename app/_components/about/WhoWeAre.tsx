import Image from "next/image";
import WhoWeAreImage from '@/public/image/about/whoweare.svg';
import { LuChartNoAxesCombined } from "react-icons/lu";

export default function WhoWeAre() {
    return (
        <div className="min-h-screen text-white flex max-md:flex-col max-w-[82rem] w-full mx-auto overflow-hidden font-rubik">
            {/* Orange Organic Shape Overlay */}
            <div className="xl:w-[50%] inset-0">
                <div className="w-full h-full">
                    {/* Orange organic shape using SVG */}
                    <div className="left-0 top-0 w-full h-full hover:scale-105 transition-transform duration-500 animate-fade-in-up">
                        <Image 
                            src={WhoWeAreImage} 
                            alt="Who We Are" 
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            
            {/* Content Overlay */}
            <div className="xl:w-[50%] z-10 p-8">
                
                {/* Top Right: Who we are? */}
                <div className="z-20">
                    <div className="text-left mt-20">
                        <h2 className="text-2xl font-bold text-[#FD9717] mb-2 animate-fade-in-up-delay">Who we are?</h2>
                        <div className="w-16 h-1 bg-[#FD9717] mr-auto animate-fade-in-up-delay-2"></div>
                    </div>
                    <div className="text-black font-semibold capitalize text-5xl xl:text-7xl animate-fade-in-up-delay-3 hover:scale-105 transition-transform duration-300">
                        lorem ipsum dolor sit amet ed  
                    </div>
                    <div className="text-neutral-500 font-medium text-xl mt-3 animate-fade-in-up-delay-4 hover:scale-[1.02] transition-transform duration-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="flex gap-6 items-start justify-start animate-fade-in-up-delay-5">
                        <LuChartNoAxesCombined className="text-8xl text-red-800 hover:scale-110 hover:text-red-700 transition-all duration-300" />
                        <div className="text-neutral-500 font-medium text-lg mt-5 hover:scale-[1.02] transition-transform duration-300">
                            <p className="font-semibold text-black text-xl">
                                Industrial Growth
                            </p>
                                Lorem ipsum dolor sit amet ed  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </div>
                    </div>
                </div>
                
             
            </div>
            
        </div>
    );
}