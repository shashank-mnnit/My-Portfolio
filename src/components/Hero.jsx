import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { profile } from '../data/projects';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-primary font-medium tracking-wide mb-4">HELLO, I'M SHASHANK</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Digital Experiences</span> with Purpose.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 mx-auto md:mx-0">
              {profile.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#work" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          {/* Optional: Add a hero image or abstract shape here */}
          {/* <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
             <div className="w-full aspect-square bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center">
                <span className="text-gray-600">Hero Image / 3D Element</span>
             </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
