import Link from "next/link"

export default function JoinUs(){
    return (
        <div className="text-foreground relative max-w-6xl mx-auto max-md:px-4">
            {/* Top Text - Centered */}
            <div className="text-left pt-20">
                <h1 className="text-6xl font-bold text-gray-900 animate-fade-in-up hover:scale-105 transition-transform duration-300">
                    Come work with Us
                </h1>
                <p className="text-foreground max-w-3xl mt-3 animate-fade-in-up-delay">
                    Be part of something bold. Work with us to create meaningful change and grow your career.
                </p>                
            </div>
            
            {/* Bottom Left Section */}
            <Link target="_blank" href={"https://tally.so/r/3Xdprd"} className="flex items-center space-x-4 animate-fade-in-up-delay-2">
                {/* Open Position Text */}
                <span className="text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-300">
                    Open positions
                </span>
                
                {/* Circular Icon */}
                <div className="w-8 h-8 border-2 border-border rounded-full bg-background flex items-center justify-center hover:scale-110 hover:bg-secondary transition-all duration-300">
                    {/* Right-pointing arrow */}
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:translate-x-1 transition-transform duration-300"
                    >
                        <path 
                            d="M9 18L15 12L9 6" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Link>
        </div>
    );
}