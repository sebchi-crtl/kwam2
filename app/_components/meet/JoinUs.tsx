
export default function JoinUs(){
    return (
        <div className=" text-black relative max-w-6xl mx-auto max-md:px-2">
            {/* Top Text - Centered */}
            <div className="text-left pt-20">
                <h1 className="text-6xl font-bold text-[#FD9717]">
                    Come work with Us
                </h1>
                <p className="text-black max-w-3xl mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>                
            </div>
            
            {/* Bottom Left Section */}
            <div className=" flex items-center space-x-4">
                {/* Open Position Text */}
                <span className="text-2xl font-bold text-green-500">
                    Open position
                </span>
                
                {/* Circular Icon */}
                <div className="w-8 h-8 border-2 border-[#FD9717] rounded-full bg-white flex items-center justify-center">
                    {/* Right-pointing arrow */}
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M9 18L15 12L9 6" 
                            stroke="#FD9717" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}