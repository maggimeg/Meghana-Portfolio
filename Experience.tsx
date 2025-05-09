import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900"></div>

            {/* Experience Card */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex md:flex-1 md:justify-end md:pr-8 mb-8 md:mb-0">
                  <div className="w-full md:w-auto md:max-w-sm bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-indigo-600 transform transition-transform duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Web Developer Intern</h3>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-3">
                      <Briefcase size={16} className="mr-2" />
                      <span>Bluestock Fintech</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>2023</span>
                    </div>
                    <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2">
                      <li>Contributed to the development of a stock analysis platform</li>
                      <li>Designed and implemented an IPO web application using modern frontend frameworks</li>
                      <li>Developed RESTful APIs for real-time stock data retrieval with Django</li>
                      <li>Collaborated with the team to enhance frontend usability and backend performance</li>
                      <li>Gained hands-on experience in full-stack development within a fintech environment</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center z-10 mb-8 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>

                <div className="md:flex-1 flex justify-start md:pl-8 md:block hidden">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-800 dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Looking for new opportunities!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
