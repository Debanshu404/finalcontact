import React, { useState } from 'react'
import JobApplicationForm from './JobApplicationForm';
import ActualJob from './ActualJob';



function App() {
  const [count, setCount] = useState(0)
  const [activeView, setActiveView] = useState('job');
  
  return (
    <>
      {/* If you want these other components, consider organizing them better */}
      {/* <JobApplicationForm/>
      <ActualJob/>
      <ContactUs/>
       */}
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Opportunities</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Box - Job */}
            <div 
              onClick={() => setActiveView('job')}
              className={`flex-1 p-6 rounded-lg shadow-sm border-2 cursor-pointer transition-all duration-300 ${
                activeView === 'job' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">Jobs</h2>
                {activeView === 'job' && (
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Active</span>
                )}
              </div>
              <p className="mt-2 text-gray-600">Browse full-time employment opportunities</p>
            </div>
            
            {/* Right Box - Internship */}
            <div 
              onClick={() => setActiveView('internship')}
              className={`flex-1 p-6 rounded-lg shadow-sm border-2 cursor-pointer transition-all duration-300 ${
                activeView === 'internship' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">Internships</h2>
                {activeView === 'internship' && (
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Active</span>
                )}
              </div>
              <p className="mt-2 text-gray-600">Explore internship programs and opportunities</p>
            </div>
          </div>
          
          {/* Component Display Area - Changed bg-black to bg-white */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[400px]">
            {activeView === 'job' ? (
              <div className="animate-fadeIn">
             <ActualJob/>{/* Make sure this component exists */}
              </div>
            ) : (
              <div className="animate-fadeIn">
                z<JobApplicationForm/> {/* Make sure this component exists */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App