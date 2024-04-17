import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainComponent from './MainComponent';
import Modal from './Modal';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Pdf from "./PDF"
import { useNavigate } from 'react-router-dom';
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
     
        axios.get(`http://localhost:3001/api/${regno}/${name}`).then(res=>{
        
         setSerachedUser(res.data)
         if(res.data ===null)
         setisSearched(false)
         if(res.data !==null) 
         setisSearched(true)
         
        
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
        <h2 className="text-3xl font-bold mb-4">Find Your Certificate</h2>
        
  


        <div className=" justify-center mb-8">
          <div>
          <div className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-3 py-2 flex items-center">
            <input
              value={regno}
              onChange={(e)=>setRegNo(e.target.value)} 
              type="text"
              className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4"
              placeholder="Enter your certificate ID "
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
    
    </div>
    {isSearched && 
      <>

    {/* <PDFViewer width="100%" height="400px" showToolbar={false}>
    <Pdf
    serchedUser={serchedUser}
    />
  </PDFViewer> */}

    <PDFDownloadLink document={<Pdf serchedUser={serchedUser} />} fileName={fileName}>
      {({ blob, url, loading, error }) =>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Download PDF
        </button>
      </div>
      }
    </PDFDownloadLink>
    </>
    }
     {/* {isSearched&& <MainComponent serchedUser={serchedUser}/>} */}
     <Modal isOpen={isModalOpen} onClose={handleCloseModal} username={username} password={password} setUsername={setUsername} handleLogin={handleLogin} setPassword={setPassword}/>
     </>
  );
};

export default FindCertificate;
