
export default function Mission() {
    return (
        <div className="relative max-w-7xl mx-auto max-md:px-2">
            {/* Top Orange Line - covers approximately one-third of width */}
            <div className="absolute top-0 min-md:left-0 w-1/3 h-1 bg-[#FD9717] animate-fade-in-up hover:bg-orange-600 transition-colors duration-300"></div>
                <div className="font-bold text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl animate-fade-in-up-delay hover:scale-105 transition-transform duration-300">
                    The Mission Statement
                </div>
            {/* Middle Orange Line - centered and covers approximately one-quarter of width */}
            <div className="absolute 2xl:top-20 max-md:right-0 min-md:left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-[#FD9717] animate-fade-in-up-delay-2 hover:bg-orange-600 transition-colors duration-300"></div>
            
            {/* Content can be added here if needed */}
            <div className="container mx-auto px-4 py-8 text-xl mt-6 animate-fade-in-up-delay-3 hover:scale-[1.01] transition-transform duration-300">
                Build, scale, and evolve products that matter - powered by cutting edge research, design, and 
                engineering - to deliver seamless, secure, future-proof platforms. From Attend to the next wave 
                of tools in productivity, financial technology, entertainment, and beyond.
            </div>
        </div>
    );
}