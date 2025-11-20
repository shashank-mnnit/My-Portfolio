import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/projects';

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {profile.about.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="bg-secondary p-8 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Skills & Tools</h3>
            
            <div className="mb-6">
              <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Design Tools</h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.soft.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.coursework.map((course) => (
                  <span key={course} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
