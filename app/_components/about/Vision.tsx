import Image from "next/image";
import Vision2 from '@/public/image/about/vision2.svg';
import Vision3 from '@/public/image/about/vision3.svg';

export default function Vision() {
    return (
        <div className="min-h-screen my-19 max-md:px-3">
            <div className="max-w-7xl mx-auto">
                <div className="flex max-md:flex-col flex-row w-full gap-4 md:gap-6 lg:gap-8">
                    {/* Left Panel - Vision Section */}
                    <div className="basis-2xl">
                        <div className="relative bg-[url(/image/about/vision1.svg)] bg-cover rounded-3xl p-6 md:p-8 lg:p-12 h-full min-h-[500px] md:min-h-[600px] overflow-hidden hover:scale-[1.02] transition-transform duration-500 animate-fade-in-up">
                            
                            {/* Vision Content */}
                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <h2 className="flex flex-col text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-5 animate-fade-in-up-delay">
                                    Our Vision
                                    
                                    <span className="font-sbold text-xl">
                                    To be the world&apos;s most trusted creator of digital products
                                    </span>
                                </h2>
                                <p className="text-lg md:text-xl lg:text-2xl  text-black leading-relaxed max-w-2xl animate-fade-in-up-delay-2">
                                Shaping industries, inspiring communities, and setting new standards in user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Panels - Photographs */}
                    <div className="basis-xl space-y-4 md:space-y-6">
                        
                        {/* Top Right Panel */}
                        <div className="relative rounded-3xl overflow-hidden h-60 md:h-68 lg:h-72 hover:scale-105 transition-transform duration-500 animate-fade-in-up-delay-3">
                            <Image 
                                src={Vision2} 
                                alt="Team collaboration in modern office" 
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        
                        {/* Bottom Right Panel */}
                        <div className="relative rounded-3xl overflow-hidden h-60 md:h-68 lg:h-72 hover:scale-105 transition-transform duration-500 animate-fade-in-up-delay-4">
                            <Image 
                                src={Vision3} 
                                alt="People collaborating at computer" 
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}