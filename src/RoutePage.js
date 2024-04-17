import React, { useState } from 'react';
import ResumePage from "./components/Resume2"
import MainComponent from './components/MainComponent';
import Mainpage from './components/MainPage';
import RegistrationPage from "./components/RegistartionForm"
import Pdf from "./components/PDF"
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResigrationPage from "./components/RegistartionForm"
import ShowCertificate from "./components/CertificateList"
import FormikForm from "./components/FormikForm"
function RoutePage() {
 
  
 
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Mainpage />} />
    <Route path="/add-certificate" element={<ShowCertificate />} />
    <Route path="/show-certificate" element={<ShowCertificate />} />
    </Routes>
  </Router>
    

  )
   

}
export default RoutePage