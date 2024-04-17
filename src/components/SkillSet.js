import React from 'react';

const SkillsList = () => {
  const skills = [
    { name: 'Cash Drawer Balancing', icon: '' },
    { name: 'Cash Handling', icon: '' },
    { name: 'Customer Management', icon: '' },
    { name: 'Problem Solving', icon: '' },
    { name: 'Record-keeping & Documentation', icon: '' },
    { name: 'Excellent Customer Service', icon: '' },
    { name: 'Analytical & Critical Thinking', icon: '' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <ul className="list-none 4">
        {skills.map((skill, index) => (
          <li key={skill.name} className="flex items-center mb-1  bg-green-600 p-4 bottom-1">

            <span className="text-xs text-white">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
