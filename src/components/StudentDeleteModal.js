import axios from "axios";
import React from "react";
const UpdateStudentModel = (props) => {

 

  const handleSubmit = async () => {
    try {
      await axios
        .delete(`${process.env.React_App_Backend_Ip}/api/${props.userId}`,)
        .then((res) => {
          props.setShowConfirmation(true);
          props.setIsDelete(false)
        //   
        });
    } catch (error) {
     
    }

    // Handle form submission logic here
  };

 

  return (
    <>
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 overflow-y-auto h-screen w-screen px-4 py-6 sm:px-0">
      <div className="relative w-full max-w-sm mx-auto rounded-lg shadow-md">
        <div className="modal-content bg-white p-4">
        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    onClick={() => props.setIsDelete(false)}
                    className="h-6 w-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          onClick={()=>{handleSubmit()}}
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Delete Student
                        </button>
                        <button
                          onClick={() => props.setIsDelete(false)}
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Cancel
                        </button>
                      </div>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default UpdateStudentModel;
