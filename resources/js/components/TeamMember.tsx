import React from 'react';

function TeamMember({ pic, name, role, desc }: { pic: string; name: string; role: string; desc: string }) {
  return (
    <div 
      className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 
                 hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer"
    >
      <img 
        src={pic} 
        alt="Our Member"  
        className="rounded-lg shadow-lg w-full max-w-md border border-gray-200 dark:border-gray-700 
                        hover:scale-105 transition-transform duration-300"
      />
      <h2 className="text-indigo-300 text-3xl font-bold dark:text-indigo-400">{name}</h2>
      <h3 className="text-gray-500 dark:text-gray-400">{role}</h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}

export default TeamMember;
