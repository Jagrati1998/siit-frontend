import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainComponent from './MainComponent';
import Modal from './Modal';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Pdf from "./PDF"
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
const FindCertificate = () => {
  const [fileName] = useState('example.pdf');
  const navigate = useNavigate();
    const [regno,setRegNo]=useState(null)
    const [name,setName]=useState(null)
    const [serchedUser,setSerachedUser]=useState(null)
    const [isSearched,setisSearched]=useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userFound,setUserFound]=useState(false)
    const [userData,setUserData]=useState({
      registrationNo:"",
      studentName: "",
      fatherName: "",
      courseName: "",
      duration: "",
      completedDate: "",
      issueDate: "",
      centerName: "",
      grade: "",
    });
   
    const handleLogin = () => {
      if( username==="admin" && password==="admin")
      navigate('/new-path');
      // Here you can perform login logic, for simplicity let's just log the username and password
      setIsLoggedIn(true)
     
    };
    const handleLoginClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    const serchUser=()=>{
     setUserFound(false)
        axios.get(`${process.env.React_App_Backend_Ip}/api/${regno}/${name}`).then(res=>{
        
         setSerachedUser(res.data)
         if(res.data ===null){
         setUserFound(true)
         setisSearched(false)}
         if(res.data !==null) {
         setUserData(res.data)
         setisSearched(true)
         }
        
        })
      }
      useEffect(() => {
        const loginState=localStorage.getItem('isTkksksksin');
        if( loginState==="rt$U&u^5*jg"){
          navigate("/show-certificate");
      
        }
      
        return () => {
          
        }
      }, [])
      
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
     
      <button onClick={handleLoginClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10">
        Login
      </button>
 

</div>

      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Find Student</h2>
        
  


        <div className=" justify-center mb-8">
          <div>
          <div className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-3 py-2 flex items-center">
            <input
              value={regno}
              onChange={(e)=>setRegNo(e.target.value)} 
              type="text"
              className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4"
              placeholder="Enter your reg no "
            />
             
           
            
          </div>
          <div className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-3 py-2 flex items-center mt-5">
            <input
              value={name}
              onChange={(e)=>setName(e.target.value)} 
              type="text"
              className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4"
              placeholder="Enter your  name"
            />
             
            <button type="button" className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow" onClick={()=>{serchUser()}}>
              Search
            </button>
            
          </div>
        </div>
        </div>
      </main>
      <div class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 hidden" id="user-not-found-modal">
 
</div>
    </div>
    {isSearched && 
      <>
<div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex justify-center min-h-screen  pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white  py-4 pb-4 sm:p-6 sm:pb-4">
                <div className=" bg-white px-4   ">
                  
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                 onClick={() => setisSearched(!isSearched)}
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
                  <div className="mt-3 text-center sm:mt-0  sm:text-left w-full  ">
                    <h3 className="text-lg leading-6 font-medium text-gray-600 bg-slate-100 p-5 mt-5">
                      Student Info
                    </h3>
                    <div className="mt-2"></div>
                    <Formik
                      initialValues={userData}
                      // validationSchema={validationSchema}
                      // onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-5 ">
                          <div >
                            <label
                              htmlFor="registrationNo"
                              className="block text-gray-700 font-bold mb-2"
                            >
                              Registration No:
                            </label>
                            <Field
                              type="text"
                              id="registrationNo"
                              disabled
                              name="registrationNo"
                              placeholder="Enter registration no"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage
                              name="registrationNo"
                              component="p"
                              className="text-red-500 text-xs italic"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-5 ">
                          <div className="mb-4">
                            <label
                              htmlFor="studentName"
                              className="block text-gray-700 font-bold mb-2"
                            >
                              Student Name:
                            </label>
                            <Field
                              type="text"
                              id="studentName"
                              name="studentName"
                              disabled
                              placeholder="Enter student name"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage
                              name="studentName"
                              component="p"
                              className="text-red-500 text-xs italic"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="fatherName"
                              className="block text-gray-700 font-bold mb-2"
                            >
                              Father Name:
                            </label>
                            <Field
                              type="text"
                              id="fatherName"
                              disabled
                              placeholder="Enter father name"
                              name="fatherName"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage
                              name="fatherName"
                              component="p"
                              className="text-red-500 text-xs italic"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="courseName"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Course Name:
                          </label>
                          <Field
                            type="text"
                            id="courseName"
                            name="courseName"
                            disabled
                            placeholder="Enter course name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                          <ErrorMessage
                            name="courseName"
                            component="p"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="duration"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Duration:
                          </label>
                          <Field
                            type="text"
                            id="duration"
                            name="duration"
                            disabled
                            placeholder="Enter duration in days"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                          <ErrorMessage
                            name="duration"
                            component="p"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 p-2">
                          <div className="mb-4">
                            <label
                              htmlFor="completedDate"
                              className="block text-gray-700 font-bold mb-2"
                            >
                              Completed Date:
                            </label>
                            <Field
                              type="date"
                              id="completedDate"
                              name="completedDate"
                              disabled
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage
                              name="completedDate"
                              component="p"
                              className="text-red-500 text-xs italic"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="issueDate"
                              className="block text-gray-700 font-bold mb-2"
                            >
                              Issue Date:
                            </label>
                            <Field
                              type="date"
                              id="issueDate"
                              disabled
                              name="issueDate"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage
                              name="issueDate"
                              component="p"
                              className="text-red-500 text-xs italic"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="centerName"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Center Name:
                          </label>
                          <Field
                            type="text"
                            id="centerName"
                            name="centerName"
                            placeholder="Enter center name"
                            disabled
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                          <ErrorMessage
                            name="centerName"
                            component="p"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="grade"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Grade:
                          </label>
                          <Field
                            component="select"
                            id="grade"
                            name="grade"
                            disabled
                            className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="">Select Grade</option>
                            <option value="A">A +</option>
                            <option value="A">A</option>
                            <option value="B">B +</option> 
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </Field>
                          <ErrorMessage
                            name="grade"
                            component="p"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
               
                <button onClick={() => setisSearched(!isSearched)}type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
                
              </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
        
    {/* <PDFViewer width="100%" height="400px" showToolbar={false}>
    <Pdf
    serchedUser={serchedUser}
    />
  </PDFViewer> */}

    
    </>
    }
    {  userFound && 
    <div className=" z-10 inset-0 overflow-y-auto">
    <div className="flex justify-center min-h-screen  pt-4 pb-20 text-center sm:block sm:p-0">
      <div
        className=" inset-0 transition-opacity"
        aria-hidden="true"
      >  <div class="bg-red-200 rounded-lg p-4 shadow-md text-center">
        <svg
                 onClick={() => setUserFound(false)}
                      className="h-10 w-10 text-blue-600"
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
    <h3 class="text-lg font-medium mb-2">Student Not Found</h3>
    <p>The  student you're looking  could not be found.</p>
   </div>
</div>   
</div>
  </div>}
     {/* {isSearched&& <MainComponent serchedUser={serchedUser}/>} */}
     <Modal isOpen={isModalOpen} onClose={handleCloseModal} username={username} password={password} setUsername={setUsername} handleLogin={handleLogin} setPassword={setPassword}/>
     </>
  );
};

export default FindCertificate;
