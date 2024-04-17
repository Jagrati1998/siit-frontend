import React from 'react';

const BusinessCard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <header className="flex justify-between items-center mb-4">
      
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

  



  </div>
  );
};

const ProfilePicture = ({ src, alt }) => {
  return (
    <div className="h-20 w-full rounded-t-lg overflow-hidden">
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};

const ContactInfo = ({ name, website, phone, email }) => {
  return (
    <div className="flex flex-col justify-between">
      <h3 className="text-left font-bold text-gray-800">{name}</h3>
      <div className="text-left text-gray-500">
        <a href={website} className="underline">{website}</a>
      </div>
      <div className="text-left text-gray-500">{phone}</div>
      <div className="text-left text-gray-500">{email}</div>
    </div>
  );
};

export default BusinessCard;
