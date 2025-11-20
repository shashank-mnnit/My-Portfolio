import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Contact from '../components/Contact';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-secondary min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <About />

        <section id="work" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-primary font-medium tracking-wide mb-2">PORTFOLIO</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard 
                    project={project} 
                    onClick={setSelectedProject} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Home;
