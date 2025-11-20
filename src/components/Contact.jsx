import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, FileText } from 'lucide-react';
import { profile } from '../data/projects';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary font-medium tracking-wide mb-4">GET IN TOUCH</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Create Something Amazing Together.</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hi, I'm always open to discussing new opportunities and ideas.
          </p>

          <div className="flex flex-col items-center justify-center gap-8 mb-16">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href={`mailto:${profile.socials.email}`} 
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                Say Hello
              </a>
              <a 
                href={profile.socials.resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
              >
                <FileText size={20} />
                Resume
              </a>
            </div>
            
            <a href={`mailto:${profile.socials.email}`} className="text-xl text-gray-300 hover:text-primary transition-colors">
              {profile.socials.email}
            </a>

            <div className="flex gap-4">
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-white hover:bg-primary hover:text-white transition-all border border-white/10">
                <Linkedin size={20} />
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-white hover:bg-primary hover:text-white transition-all border border-white/10">
                <Github size={20} />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-white hover:bg-primary hover:text-white transition-all border border-white/10">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <footer className="text-gray-500 text-sm border-t border-white/10 pt-8">
            <p>© {new Date().getFullYear()} Shashank Shekhar. All rights reserved.</p>
            <p className="mt-2">Designed & Built with React & Tailwind CSS</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
