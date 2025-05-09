import React, { useState, useRef } from 'react';
import { FileText, Download } from 'lucide-react';

const Resume: React.FC = () => {
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>("/resume.pdf"); // Default resume URL
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDownloadClick = () => {
    if (resumeUrl) {
      setIsLoading(true);
      
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', 'Kurapati_Meghana_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Resume</span>
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
            <div className="flex flex-col items-center">
              <FileText size={64} className="text-indigo-600 dark:text-indigo-400 mb-6" />
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Download My Resume
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-lg">
                Click the button below to download my resume in PDF format.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button
                  onClick={handleDownloadClick}
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 flex items-center justify-center disabled:bg-gray-400"
                >
                  {isLoading ? (
                    <span>Downloading...</span>
                  ) : (
                    <>
                      <Download size={20} className="mr-2" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>
              </div>

              {resumeUrl && (
                <div className="mt-8 w-full max-w-md">
                  <div className="aspect-[1/1.414] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <embed
                      src={resumeUrl}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                      className="pointer-events-none"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
