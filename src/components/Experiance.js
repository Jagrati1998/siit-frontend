import React from 'react';

const JobDescription = () => {
    const experiences = [
        {
          company: 'Double Star National Bank',
          location: 'Harrisburg, PA',
          title: 'Bank Teller',
          dates: '08/2017-Present',
          achievements: [
            'Administered the balancing of the branch\'s vaults, ATMs, TCDs, and TCRs with a daily total of more than $200K.',
            'Leveraged organizational and prioritization abilities to efficiently process 20+ transactions per hour, attending to 50+ customers on a daily basis.',
            'Established strong credibility with clients by providing accurate information to address concerns regarding their accounts and other bank products, resulting in achieving the highest rate of customer loyalty and retention.',
            'Served as a Team Lead in the absence of the supervisor to maintain seamless bank operations and procedures.',
          ],
        },
        {
            company: 'Double Star National Bank',
            location: 'Harrisburg, PA',
            title: 'Bank Teller',
            dates: '08/2017-Present',
            achievements: [
              'Administered the balancing of the branch\'s vaults, ATMs, TCDs, and TCRs with a daily total of more than $200K.',
              'Leveraged organizational and prioritization abilities to efficiently process 20+ transactions per hour, attending to 50+ customers on a daily basis.',
              'Established strong credibility with clients by providing accurate information to address concerns regarding their accounts and other bank products, resulting in achieving the highest rate of customer loyalty and retention.',
              'Served as a Team Lead in the absence of the supervisor to maintain seamless bank operations and procedures.',
            ],
          },
        // Add more experience objects here...
      ];
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Work Experience</h2>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} {...experience} />
      ))}
    </div>
  );
};

const ExperienceCard = ({ company, location, title, dates, achievements }) => {
  return (
    <div className="border-b border-gray-200 p-4 flex flex-col">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold text-gray-800">{company}</h3>
        <span className="text-gray-500">{location}</span>
      </div>
      <div className="text-gray-700">{title}</div>
      <div className="text-gray-500">{dates}</div>
      <ul className="list-disc pl-4 mt-2">
        {achievements.map((achievement) => (
          <li key={achievement} className="text-gray-700">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
