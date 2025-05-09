import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-indigo-400 mb-2">Kurapati Meghana</h3>
              <p className="text-gray-400">Computer Science Student & Python Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/maggimeg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@email.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Kurapati Meghana. All rights reserved.
              </p>
              
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  About
                </a>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Experience
                </a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Projects
                </a>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Skills
                </a>
                <a href="#resume" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Resume
                </a>
              </nav>
            </div>
            
            <div className="flex justify-center mt-6">
              <p className="text-gray-500 text-xs flex items-center">
                <span>Designed and built with React & Tailwind CSS</span>
                <ExternalLink size={12} className="ml-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
