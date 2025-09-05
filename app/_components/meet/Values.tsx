import Image from "next/image";
import Target from '@/public/image/meet/target.svg'

export default function Values() {
    return (
        <div className="min-h-screen bg-black text-white py-18 relative overflow-hidden max-md:px-4">
            {/* Title */}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-[#FD9717] mb-6 animate-fade-in-up">
                    Our Values
                </h1>
                
                {/* Introduction */}
                {/* <p className="text-lg mb-12 text-gray-300 max-w-3xl animate-fade-in-up-delay">
                    We are a deeply mission driven company, and these are what we expect our team to emulate cause they are our core ideas we return to when making decisions
                </p> */}
                
                {/* Values List with Continuous Timeline */}
                <div className="relative">
                    {/* Central Orange Line */}
                    <div className="absolute left-8 top-0 w-1 h-full bg-[#FD9717] animate-fade-in-up-delay-2"></div>
                    
                    {/* Values positioned along the timeline */}
                    <div className="space-y-16">
                        {/* Value 1: Kindness */}
                        <div className="flex items-start space-x-6 animate-fade-in-up-delay-3 hover:translate-x-2 transition-transform duration-300">
                            <div className="flex flex-col items-center w-16">
                                {/* Oval marker that connects seamlessly with the line */}
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full hover:scale-110 transition-transform duration-300"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">K</span> - Kindness
                                </h3>
                                <p className="text-gray-300">
                                    We lead with respect and generosity. Feedback is direct and constructive; ego and drama don’t 
                                    exist in this organisation.
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 2: Willingness for Growth */}
                        <div className="flex items-start space-x-6 animate-fade-in-up-delay-4 hover:translate-x-2 transition-transform duration-300">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full hover:scale-110 transition-transform duration-300"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">W</span> - Willingness
                                </h3>
                                <p className="text-gray-300">
                                    We&apos;re learners with a bias to action. We stretch, ask questions, seek feedback, and turn 
                                    change into advantage.
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 3: Accountability */}
                        <div className="flex items-start space-x-6 animate-fade-in-up-delay-5 hover:translate-x-2 transition-transform duration-300">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full hover:scale-110 transition-transform duration-300"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">A</span> - Accountability
                                </h3>
                                <p className="text-gray-300">
                                    We own the outcome. We keep promises, measure results, and fix issues fast: no excuses, no 
                                    blame.
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 4: Mastery */}
                        <div className="flex items-start space-x-6 animate-fade-in-up-delay-6 hover:translate-x-2 transition-transform duration-300">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full hover:scale-110 transition-transform duration-300"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">M</span> - Mastery
                                </h3>
                                <p className="text-gray-300">
                                    We sweat the details. We document, test, and continually sharpen our craft to deliver 
                                    world-class work.
                                </p>
                            </div>
                        </div>
                        
                        {/* Value 5: 2getherness */}
                        <div className="flex items-start space-x-6 animate-fade-in-up-delay-7 hover:translate-x-2 transition-transform duration-300">
                            <div className="flex flex-col items-center w-16">
                                <div className="w-6 h-6 bg-[#FD9717] rounded-full hover:scale-110 transition-transform duration-300"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    <span className="text-[#FD9717] text-4xl">2</span> - 2getherness
                                </h3>
                                <p className="text-gray-300">
                                    We win as one TEAM. We share context, celebrate others, and prioritise collective success 
                                    over internal competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Dartboard Graphic - Bottom Right */}
            <div className="absolute w-[25rem] bottom-8 right-8 animate-fade-in-up-delay-8 hover:scale-105 transition-transform duration-500">
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