import React from 'react';
import { Code, Database, Layout, PenTool as Tool, BookOpen } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['C', 'C++', 'Python', 'R Programming']
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['SQL', 'DBMS']
    },
    {
      title: 'Frontend Technologies',
      icon: <Layout size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Developer Tools',
      icon: <Tool size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['GitHub', 'VS Code', 'Colab', 'PyCharm']
    },
    {
      title: 'Libraries',
      icon: <BookOpen size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Keras', 'PyTorch']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3 text-gray-800 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-white">Skill Proficiency</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Python Development</span>
                  <span className="text-gray-700 dark:text-gray-300">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Data Analysis</span>
                  <span className="text-gray-700 dark:text-gray-300">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Web Development</span>
                  <span className="text-gray-700 dark:text-gray-300">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Database Management</span>
                  <span className="text-gray-700 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Machine Learning</span>
                  <span className="text-gray-700 dark:text-gray-300">70%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
