
export default function Mission() {
    return (
        <div className="relative max-w-7xl mx-auto max-md:px-2 text-foreground">
            {/* Top Line - neutral */}
            <div className="absolute top-0 min-md:left-0 w-[10%] h-1 bg-gray-700 animate-fade-in-up hover:bg-gray-900 transition-colors duration-300"></div>
            <div className="font-bold text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl animate-fade-in-up-delay hover:scale-105 transition-transform duration-300">
                The Mission
            </div>
            {/* Middle Line - neutral */}
            <div className="absolute 2xl:top-20 max-md:right-0 min-md:left-70 transform -translate-x-1/2 w-[15%] h-1 bg-gray-700 animate-fade-in-up-delay-2 hover:bg-gray-900 transition-colors duration-300"></div>
            
            {/* Content can be added here if needed */}
            <div className="container mx-auto px-4 py-8 text-xl mt-6 animate-fade-in-up-delay-3 hover:scale-[1.01] transition-transform duration-300 text-muted-foreground">
                Build, scale, and evolve products that matter - powered by cutting edge research, design, and 
                engineering - to deliver seamless, secure, future-proof platforms. From Attend to the next wave 
                of tools in productivity, financial technology, entertainment, and beyond.
            </div>
        </div>
    );
}