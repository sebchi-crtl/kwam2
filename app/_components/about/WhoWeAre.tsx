import Image from "next/image";
import WhoWeAreImage from '@/public/image/about/whoweare.svg';
import { LuChartNoAxesCombined } from "react-icons/lu";

export default function WhoWeAre() {
    return (
        <div className="min-h-screen text-foreground flex max-md:flex-col max-w-[82rem] w-full mx-auto overflow-hidden font-rubik">
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
                        <h2 className="text-2xl font-bold text-foreground mb-2 animate-fade-in-up-delay">Who we are?</h2>
                        <div className="w-16 h-1 bg-primary mr-auto animate-fade-in-up-delay-2"></div>
                    </div>
                    <div className="text-foreground font-semibold capitalize text-5xl xl:text-7xl animate-fade-in-up-delay-3 hover:scale-105 transition-transform duration-300">
                        The geeks who turn research to revenue  
                    </div>
                    <div className="text-muted-foreground font-light text-xl mt-3 animate-fade-in-up-delay-4 hover:scale-[1.02] transition-transform duration-300">
                        KWAM2 is a product innovation studio, creating platforms that blend design,engineering, 
                        technology, and impact. 
                        Backed by our advanced R&D unit, we turn ambitious ideas into market-ready products. 
                        Attend is our flagship launch - redefining event discovery - and the first of many game-changing 
                        platforms in our pipeline
                    </div>
                    <div className="flex gap-6 items-start justify-start animate-fade-in-up-delay-5">
                        <LuChartNoAxesCombined className="text-8xl text-primary hover:scale-110 transition-all duration-300" />
                        <div className="text-muted-foreground font-medium text-lg mt-5 hover:scale-[1.02] transition-transform duration-300">
                            <p className="font-semibold text-foreground text-xl">
                                Industrial Growth
                            </p>
                            Products to businesses - repeatable GTM, strong unit economics, and multiple revenue lines 
                            from day one.
                        </div>
                    </div>
                </div>
                
             
            </div>
            
        </div>
    );
}