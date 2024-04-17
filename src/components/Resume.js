import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Jagrati Mishra</h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="mailto:jagratimishra2222@gmail.com"
              className="text-gray-600 hover:text-blue-500"
            >
              jagratimishra2222@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:[your.phone.number]"
              className="text-gray-600 hover:text-blue-500"
            >
              7084801092
            </a>
          </li>
        </ul>
      </header>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p className="text-gray-700">
          Highly motivated Software Engineer with 2+ years of experience in
          building and maintaining web applications. Proven track record of
          increasing efficiency by 15% through code optimization. Skilled in
          JavaScript, React, and Python. Eager to leverage my expertise to
          contribute to a fast-paced development team.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        <ExperienceList />
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <EducationList />
      </section>
    </div>
  );
};

const ExperienceList = () => {
  const experiences = [
    {
      title: "[SDE 1]",
      company: "[Niral Networks PVT LTD.]",
      dates: "[1-11-2022]",
      location: "Bengaluru",
      achievements: [
        "Responsible for creating User Interface with chakra UI and JWT Token based auth",
        "Used fundamental of React , Functional component ,hooks, react-redux ,routing.",
        "Work with external JS library like Moment , SweetAlert2,React ApexCharts,React-d3-Tree",
      ],
    },
    {
      title: "[SDE Intern]",
      company: "[Nexthoughts ]",
      dates: "[1-11-2022]",
      location: "Bengaluru",
      achievements: [
        "Responsible for creating User Interface with chakra UI and JWT Token based auth",
        "Used fundamental of React , Functional component ,hooks, react-redux ,routing.",
        "Work with external JS library like Moment , SweetAlert2,React ApexCharts,React-d3-Tree",
      ],
    },
  ];

  return (
    <ul className="list-disc space-y-2">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} experience={experience} />
      ))}
    </ul>
  );
};

const ExperienceItem = ({ experience }) => {
  return (
    <li>
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">{experience.title}</h3>
          <p className="text-gray-600">
            {experience.company}, {experience.dates}
          </p>
        </div>
        <span className="text-gray-500">{experience.location}</span>
      </div>
      <ul className="list-disc pl-4 space-y-1">
        {experience.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </li>
  );
};

const EducationList = () => {
  const educations = [
    {
      Degree: "B.Tech",
      University: "Rajkiya Engineering college,azamgrah",
      dates: "1-11-2022",
    },
    {
      Degree: "Intermediate",
      University: "O.F Inter College",
      dates: "1-11-2022",
    },
  ];
  // Similar structure to ExperienceList, replace details with your education history
  return (
    <>
      <div className="grid grid-cols-6">
        <ul className="list-disc space-y-2 col-span-5">
          {educations.map((education) => (
            <EducationItem education={education}></EducationItem>
          ))}
        </ul>
        <SkillList />
      </div>
    </>
  );
};
const EducationItem = ({ education }) => {
  return (
    <>
      <li>
        <div className="flex justify-start bg-slate-300 m-10 w-fit p-4">
          <div className="grid grid-cols-1">
            <h3 className="font-bold-size">{education.Degree}</h3>
            <p className="text-gray-600">{education.University},</p>
            <p className="text-gray-800 text-2xl"> {education.dates}</p>
          </div>
          <span className="text-gray-500">{education.location}</span>
        </div>
      </li>
    </>
  );
};
const SkillList = () => {
  const skills = [
    { key: "Frontend", skills: "React , HTML , JavaScript" },
    { key: "Backend", skills: "Node , Express, Mongo" },
  ];

  return (
    <div className="mb-4  h-fit p-5 ">
      <h2 className="text-xl font-bold mb-2 flex-justify-end">Skills</h2>

      <ol className="list-decimal space-y-2 px-4">
        {skills.map((skill) => (
          <li key={skill} className="px-2 py-1 rounded">
            <p className="text-gray-600 text-1xl">{skill.key}</p>
            <p className="font-bold-size font-block">{skill.skills}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Resume;
