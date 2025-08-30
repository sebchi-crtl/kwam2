
export default function Mission() {
    return (
        <div className=" relative max-w-7xl mx-auto max-md:px-2">
            {/* Top Orange Line - covers approximately one-third of width */}
            <div className="absolute top-0 min-md:left-0 w-1/3 h-1 bg-[#FD9717]"></div>
                <div className="font-bold text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                    Our Mission Statement
                </div>
            {/* Middle Orange Line - centered and covers approximately one-quarter of width */}
            <div className="absolute 2xl:top-20 max-md:right-0 min-md:left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-[#FD9717]"></div>
            
            {/* Content can be added here if needed */}
            <div className="container mx-auto px-4 py-8 text-xl mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

            </div>
        </div>
    );
}