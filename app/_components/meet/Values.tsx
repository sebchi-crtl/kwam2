import Image from "next/image";
import Target from '@/public/image/meet/target.svg'

export default function Values() {
    return (
        <div className="min-h-screen bg-black text-white py-18 relative overflow-hidden">
            {/* Title */}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-[#FD9717] mb-6">
                    Our Values
                </h1>
                
                {/* Introduction */}
                <p className="text-lg mb-12 text-gray-300 max-w-3xl">
                    We are a deeply mission driven company, and these are what we expect our team to emulate cause they are our core ideas we return to when making decisions
                </p>
                
                {/* Values List with Continuous Timeline */}
                <div className="relative">
                    {/* Central Orange Line */}
                    <div className="absolute left-8 top-0 w-1 h-full bg-[#FD9717]"></div>
                    
                    {/* Values positioned along the timeline */}
                    <div className="space-y-16">
                        {/* Value 1: Kindness */}
                        <div className="flex items-start space-x-6">
                            <div className="flex flex-col items-center w-16">
                                {/* Oval marker that connects seamlessly with the line */}
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">k</span> - Kindness
                                </h3>
                                <p className="text-gray-300">
                                    Always be curious, keep learning, and share what you know. Every worker takes personal responsibility to keep growing in skills and industry awareness.
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 2: Willingness for Growth */}
                        <div className="flex items-start space-x-6">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">W</span> - Willingness for Growth
                                </h3>
                                <p className="text-gray-300">
                                    Strong work ethic builds trust, ensures consistent results, and inspires others to give their best. We go the extra mile to ensure quality in everything we do
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 3: Accountability */}
                        <div className="flex items-start space-x-6">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">A</span> - Accountability
                                </h3>
                                <p className="text-gray-300">
                                    If we make mistakes, we own them, fix them, and learn from them.
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 4: Mastery */}
                        <div className="flex items-start space-x-6">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">M</span> - Mastery
                                </h3>
                                <p className="text-gray-300">
                                    We commit to doing our work with excellence, not just completion. We continuously refine our skills to become masters in our roles.
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 5: 2getherness */}
                        <div className="flex items-start space-x-6">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">2</span> - 2getherness
                                </h3>
                                <p className="text-gray-300">
                                    We collaborate instead of competing internally. We remember that no one succeeds alone – we grow stronger together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Dartboard Graphic - Bottom Right */}
            <div className="absolute w-[25rem] bottom-8 right-8">
                <div className="relative">
                    
                    {/* Dart */}
                    <div className="absolute -top-[24.8rem] -right-20 ">
                        <Image src={Target} alt="dfd" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}