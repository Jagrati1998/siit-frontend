import React from "react";
import SkillSet from "./SkillSet";
import BusinessCard from "./BusinessCrad";
import Experiance from "./Experiance"
import Award from './Award'
import Education from "./Education";
const About = () => {
    const education = {
        university: 'University of Pennsylvania',
        degree: 'Master of Science in Computer Science',
        dates: '2010-2012',
      };
  return (
    // <div className="container mx-auto px-4 py-8">
    //   <div className="flex flex-col md:flex-row ">
    //   <div className="container w-auto ">
    //     <img className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mb-4 md:mb-0" src="https://img.freepik.com/free-photo/view-graphic-3d-robot_23-2150849173.jpg" alt="Sophia Smith" />
    //     <SkillSet/>
    //    </div>
    //    <div class="h-full w-1 border-l border-gray-400 min-w-4 bg-gree"></div>

    //    <div className="container ">
    //     <div className="text-center md:text-left ml-0 md:ml-20 bg-green-800 p-9" >
    //       <h1 className="text-white  text-4xl font-bold mb-2">Sophia Smith</h1>
    //       <p className="text-white text-lg">Bank Teller</p>
    //       <p className="text-white text-base mt-4">
    //         Analytical, customer-oriented professional with years of extensive experience in providing exceptional customer service, administering customer transactions, and promoting company offerings in the banking industry. Exceptionally organized and focused, demonstrating an outstanding aptitude to manage and balance a variety of financial transactions in a fast-paced environment.
    //       </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 sm:grid-cols-6">
      <div className="col-span-1 p-4  border-r-4">
        <div className="container m-5">
          <img
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mb-4
         md:mb-0"
            src="https://img.freepik.com/free-photo/view-graphic-3d-robot_23-2150849173.jpg"
            alt="Sophia Smith"
          />
        </div>
        <SkillSet />
        <Award/>
      </div>
   
      <div class="col-span-5">
        <div className="text-center md:text-left ml-0 bg-green-800 p-9">
          <h1 className="text-white  text-4xl font-bold mb-2">Sophia Smith</h1>
          <p className="text-white text-lg">Bank Teller</p>
          <p className="text-white text-base mt-4">
            Analytical, customer-oriented professional with years of extensive
            experience in providing exceptional customer service, administering
            customer transactions, and promoting company offerings in the
            banking industry. Exceptionally organized and focused, demonstrating
            an outstanding aptitude to manage and balance a variety of financial
            transactions in a fast-paced environment.
          </p>
        </div>
        <div className="text-center md:text-left ml-0 md:ml-20 ">
        <BusinessCard/>
        </div>
        <Experiance/>
        <Education {...education} />
      </div>
    </div>
  );
};

export default About;
