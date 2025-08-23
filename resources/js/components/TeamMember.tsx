import React from 'react';
import { useContext } from 'react';

function TeamMember({ pic, name, role, desc }: { pic: string; name: string; role: string; desc: string }) {



  
  const [highlighted, setHighlighted] = React.useState(false);

  const handleHighlight = () => {
    setHighlighted(!highlighted);
  }
/*  const handleFullDescription= ()=>{
    setFullDescription(!fullDescription);
  } */
  return (
    <div 
      className={`flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 
                 hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer
                 ${highlighted ? "bg-yellow-200 dark:bg-yellow-400" : "bg-white dark:bg-gray-800" } `}>
                 
      <button className="rounded-md " onClick={()=>{
        handleHighlight();
      }}>

        <span className="sr-only">Highlight {name}'s picture</span>
        <img 
          src={pic} 
          alt={name}
          className="rounded-lg shadow-lg w-full max-w-md border border-gray-200 dark:border-gray-700 
                          hover:scale-105 transition-transform duration-300"

        />
      
      </button>
      
      <h2 className="text-indigo-300 text-3xl font-bold dark:text-indigo-400">{name}</h2>
      <h3 className="text-gray-500 dark:text-gray-400">{role}</h3>
      <p className={`text-lg  leading-relaxed ${highlighted ? " dark:text-gray-700 text-gray-800":"text-gray-700 dark:text-gray-300"}`}>{desc}</p>
      <button 
      
      className="mt-auto px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Say Hi!
      </button>
        
    </div>
  );
}

export default TeamMember;
