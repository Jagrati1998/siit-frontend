// CertificatePage.js
import React from 'react';
import certificate from "./main.jpg"
import award from "./award.jpeg"
const CertificatePage = (props) => {
  return (
    <>
    <div className="bg-gray-800 text-white py-4">
    <div class="flex justify-between items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIIT Computer College</h1>
        <nav className="flex space-x-4">
          {/* Add your navigation links here */}
        </nav>
      </div>

      <button
        onClick={console.log()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10"
      >
        Certificate
      </button>
      <button
        onClick={console.log()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10"
      >
        Logout
      </button>
    </div>

    <main className="container mx-auto px-4 py-16"></main>
  </div>
    <div  className="flex justify-center items-center p-10 bg-gray-200">
    <div id="certificate">
    <div className="relative">
      <img src={certificate} alt="Image" className="w-full h-auto rounded-lg shadow-md" />
      <div className="text-container absolute top-0 left-0 flex justify-center mt- w-full h-full bg-transparent">
     
      <div className="certificate-content py-20 px-10 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800">CERTIFICATE</h1>
        </div>
        <div className="max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800">OF COMPLETION</h1>
        </div>
      
        <div className="max-w-xl mx-auto">
        <p className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800">
        This Certificate is awarded to
      </p>
        </div>
     
        <div className="max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800">
        Jagrati Mishra
      </h1>
        </div>
        <div className="max-w-xl mx-auto">
      <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, risus ut accumsan fermentum, lorem mauris faucibus ex, non hendrerit mi dui sit amet justo. dolor.
      </p>
    </div>
      </div>
     
      </div>
    </div>
    </div>
  </div>
  </>
  );
};

export default CertificatePage;
