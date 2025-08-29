import React from 'react'

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const MeetUs = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "EMMA RODRIGUEZ",
      title: "Yoga and Flexibility Instructor",
      image: "/image/team/emma.jpg"
    },
    {
      name: "MAYA LEE",
      title: "Nutrition Specialist",
      image: "/image/team/maya.jpg"
    },
    {
      name: "JORDAN SMITH",
      title: "Cardio Coach",
      image: "/image/team/jordan.jpg"
    },
    {
      name: "ALEX CARTER",
      title: "Head Trainer",
      image: "/image/team/alex.jpg"
    }
  ];

  // Create the exact 12-card layout with staggered positioning
  const gridCards = [
    // Row 1
    { member: teamMembers[0], color: "orange", offset: "translate-y-0" }, // Emma (orange) - top
    { member: teamMembers[1], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Maya (green) - lower
    { member: teamMembers[2], color: "orange", offset: "translate-y-0" }, // Jordan (orange) - top
    { member: teamMembers[0], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Emma (green) - lower
    
    // Row 2
    { member: teamMembers[1], color: "orange", offset: "translate-y-0" }, // Maya (orange) - top
    { member: teamMembers[3], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Alex (green) - lower
    { member: teamMembers[3], color: "orange", offset: "translate-y-0" }, // Alex (orange) - top
    { member: teamMembers[1], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Maya (green) - lower
    
    // Row 3
    { member: teamMembers[0], color: "orange", offset: "translate-y-0" }, // Emma (orange) - top
    { member: teamMembers[3], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Alex (green) - lower
    { member: teamMembers[2], color: "orange", offset: "translate-y-0" }, // Jordan (orange) - top
    { member: teamMembers[2], color: "green", offset: "translate-y-0 lg:translate-y-16" },  // Jordan (green) - lower
  ];

  return (
    <div className='bg-white w-full h-full min-md:rounded-t-[9rem] mx-auto'>
      <section className=' max-w-[120rem] mx-auto px-8 xl:px-24 mb-44 mt-32'>
        <h1 className='text-4xl md:text-45l xl:text-6xl font-semibold text-orange-900 mb-6 font-rubik flex flex-col text-center uppercase'>
          Meet The Team
          <span className='text-black/40 font-light text-xl xl:text-2xl font-rubik mt-4 normal-case'>
            The people behind our success
          </span>
        </h1>
        
        {/* Team Members Grid */}
        <div className='mt-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {gridCards.map((item, index) => (
              <div 
                key={`${item.member.name}-${index}`}
                className={`${item.offset}  rounded-2xl p-12 shadow-none border-0 transition-all duration-300 hover:scale-105 ${
                  item.color === 'orange'
                    ? ' bg-orange-400/50' 
                    : ' bg-green-400/50'
                }`}
              >
                <div className='flex flex-col items-center text-center'>
                  {/* Profile Image */}
                  <div className='w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-white shadow-lg'>
                    <div className='w-full h-full bg-gradient-to-br from-orange-200 to-green-200 flex items-center justify-center'>
                      <span className='text-2xl font-bold text-gray-600'>
                        {item.member.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className='font-bold text-lg text-gray-800 mb-2'>
                    {item.member.name}
                  </h3>
                  
                  {/* Title */}
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {item.member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeetUs
