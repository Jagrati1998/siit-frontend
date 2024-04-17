import React from 'react';

const Education = ({ university, degree, dates }) => {
    
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
      <div className="flex justify-between items-center mb-2">
  
    
        <h3 className="text-lg font-bold text-gray-800">{university}</h3>
        <span className="text-gray-500">{dates}</span>
      </div>
      <div className="text-gray-700">{degree}</div>
      <div className="flex justify-between items-center mb-2">
  
    
  <h3 className="text-lg font-bold text-gray-800">{university}</h3>
  <span className="text-gray-500">{dates}</span>
</div>
<div className="text-gray-700">{degree}</div>
<div className="flex justify-between items-center mb-2">
  
    
  <h3 className="text-lg font-bold text-gray-800">{university}</h3>
  <span className="text-gray-500">{dates}</span>
</div>
<div className="text-gray-700">{degree}</div>
    </div>
  );
};

export default Education;
