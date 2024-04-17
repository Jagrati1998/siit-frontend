import React from 'react';

const Award = ({ title, issuer, date, description }) => {
  return (
    <div className="flex flex-col p-4 border-b border-gray-200">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <div className="flex flex-row justify-between text-gray-500 items-center">
        <span>{issuer}</span>
        <span>{date}</span>
      </div>
      {description && <p className="text-gray-700 mt-2">{description}</p>}
    </div>
  );
};

const Awards = () => {
    const awards = [
        {
          title: 'Employee of the Month',
          issuer: 'ABC Company',
          date: 'May 2023',
          description: 'Recognized for outstanding performance and exceeding sales targets.',
        },
        {
          title: 'Innovation Award',
          issuer: 'Tech Innovation Summit',
          date: 'March 2023',
          description: 'Awarded for developing a novel solution that improved efficiency by 20%.',
        },
        // Add more award objects here...
      ];
      
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Awards</h2>
      {awards.map((award) => (
        <Award key={award.title} {...award} />
      ))}
    </div>
  );
};

export default Awards;
