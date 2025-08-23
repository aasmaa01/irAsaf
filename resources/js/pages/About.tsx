import React from 'react';
import { useContext } from 'react';
import BackLW from "../../images/BackLW.jpg";
import Imene from "../../images/Imene.jpg";
import Rym from "../../images/Rym.jpg";
import Asma from "../../images/Asma.jpg";
import Sarah from "../../images/Sarah.jpg";
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import TeamMember from '@/components/TeamMember';

function About() {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto px-6 py-12 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-500 dark:text-indigo-400 mb-4 sm:mb-0">
          About IRASAF
        </h1>
        <AppearanceToggleDropdown />
      </div>

      <div
        className="w-full  h-96  bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BackLW})` }}
      >
        <div className="bg-white/80 dark:bg-gray-900/70 p-8 sm:p-16 rounded-lg max-w-3xl">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center sm:text-left">
            IRASAF is a family-driven e-commerce brand bringing together unique handmade and curated products.
            Our mission is to create a platform that showcases the creativity and craftsmanship of artisans
            while providing customers with exceptional quality and service.
          </p>
        </div>
      </div>


      <div className="w-full">
        <h2 className="text-3xl font-semibold text-indigo-400 dark:text-indigo-300 mb-6 text-center sm:text-left">
          Meet Our Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <TeamMember 
            pic={Imene}
            name="Soltani Imene" 
            role="Personalized Gifts"
            desc="Creates custom gift boxes, hand-written cards, and tailored keepsakes for any occasion."
          />
          <TeamMember 
            pic={Rym} 
            name="Soltani Rym" 
            role="Resin Art & Handmade jewelry" 
            desc="Designs resin wall clocks and elegant photo frames with premium finishes."
          />
          <TeamMember 
            pic={Asma} 
            name="Soltani Asma" 
            role="Developer & Watch Seller"
            desc="Leads the full‑stack platform (Laravel + React) and curates stylish wrist watches."
          />
          <TeamMember 
            pic={Sarah}
            name="Soltani Sarah" 
            role="Crochet"
            desc="Crafts unique crochet items, including bags, hats, and home decor."
          />
        </div>

      </div>

    </div>
  );
}

export default About;
