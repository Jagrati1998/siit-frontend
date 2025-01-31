import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Modal = ({ isOpen, onClose }) => {
  const [userName,setUserName]=useState('')

  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   
  
  const handleLogin = () => {
    if(userName==="siit" && password==="1234")
    {
    localStorage.setItem('isTkksksksin', 'rt$U&u^5*jg');
    navigate('/add-certificate');
    }
   
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg onClick={onClose} className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Login</h3>
                    <div className="mt-2">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">User name</label>
                        <input w-full type="text" name="username" id="username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={userName} onChange={(e) => setUserName(e.target.value)} />
                      </div>
                      
                   
                   
                      <div className="mt-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" id="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleLogin} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
             Login
                </button>
                <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
