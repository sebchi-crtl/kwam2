import Image from "next/image";

export default function Team() {

    const teamMembers: TeamMember[] = [
        {
          name: "Olivia",
          title: "Chief of Governance & Compliance",
          image: "/image/meet/oli.jpg",
          postion: "mt-3",
          height: "scale-140 "
        },
        {
          name: "Sebastine",
          title: "Executive Director",
          image: "/image/meet/seb.jpg",
          postion: "-mb-8",
          height: " h-48 "
        },
        {
          name: "Ifeoma",
          title: "Quality Assurance Lead",
          image: "/image/meet/ifeoma.jpg"
        },
        {
          name: "Ayobami",
          title: "Backend Engineer",
          image: "/image/meet/ayo.jpg",
          height: " h-49 "
        },
        {
          name: "Inioluwa",
          title: "FullStack Developer",
          image: "/image/meet/inioluwa.jpg",
          height: " h-50 "
        },
        {
          name: "Rahul",
          title: "UI/UX Designer",
          image: "/image/meet/rahul.jpg",
        }
    ];

    // Create the exact 12-card layout with staggered positioning
    const gridCards = [
        // Row 1
        { member: teamMembers[0], color: "orange", offset: "translate-y-0" }, // Emma (orange) - top
        { member: teamMembers[1], color: "orange", offset: "translate-y-0 lg:translate-y-16" },  // Maya (green) - lower
        { member: teamMembers[2], color: "orange", offset: "translate-y-0" }, // Jordan (orange) - top
        // { member: teamMembers[0], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Emma (green) - lower
        
        // Row 2
        { member: teamMembers[3], color: "orange", offset: "translate-y-0" }, // Maya (orange) - top
        { member: teamMembers[4], color: "orange", offset: "translate-y-0 lg:translate-y-16" },  // Alex (green) - lower
        { member: teamMembers[5], color: "orange", offset: "translate-y-0" }, // Alex (orange) - top
        // { member: teamMembers[1], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Maya (green) - lower
        
        // Row 3
        // { member: teamMembers[6], color: "orange", offset: "translate-y-0" }, // Emma (orange) - top
        // { member: teamMembers[3], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Alex (green) - lower
        // { member: teamMembers[2], color: "orange", offset: "translate-y-0" }, // Jordan (orange) - top
        // { member: teamMembers[2], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Jordan (green) - lower
    ];
    return(
        <div className='w-full h-full mx-auto bg-background text-foreground'>
            <section className=' max-w-[120rem] mx-auto px-8 xl:px-24 mb-44 mt-32'>
                <h1 className='text-4xl md:text-45l xl:text-6xl font-semibold text-foreground mb-6 font-rubik flex flex-col text-center uppercase'>
                Meet The Team
                <span className='text-black/40 font-light text-xl xl:text-2xl font-rubik mt-4 normal-case'>
                    <span className='text-muted-foreground'>The people behind our success</span>
                </span>
                </h1>
                
                {/* Team Members Grid */}
                <div className='mt-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                    {gridCards.map((item, index) => (
                    <div 
                        key={`${item.member.name}-${index}`}
                        className={`${item.offset}  rounded-2xl p-12 shadow-none border-0 transition-all duration-300 hover:scale-105 ${
                        item.color === 'orange'
                            ? ' bg-secondary' 
                            : ' bg-card'
                        }`}
                    >
                        <div className='flex flex-col items-center text-center py-12'>
                        {/* Profile Image */}
                        <div className='w-44 h-44 rounded-full mb-12 overflow-hidden '>
                            <div className='w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center'>
                              <span className={`text-2xl font-bold text-muted-foreground w-54 h-54 ${item.member.postion}`}>
                              <Image src={item.member.image} className={`w-full ${item.member.height}`} width={100} height={100} alt="" />
                            </span>
                            </div>
                        </div>
                        
                        <div className={` text-card-foreground rounded-md py-1 px-3 ${
                           item.color === 'green'
                            ? ' bg-secondary' 
                            : ' bg-card'
                          }`}  
                        >
                            {/* Name */}
                            <h3 className='font-bold text-lg text-foreground mb-2'>
                            {item.member.name}
                            </h3>
                            
                            {/* Title */}
                            <p className='text-sm text-muted-foreground leading-relaxed'>
                            {item.member.title}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </div>
    )
}