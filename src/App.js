import React, { useState } from 'react';
import ResumePage from "./components/Resume2"
import MainComponent from './components/MainComponent';
import Mainpage from './components/MainPage';
import Pdf from "./components/PDF"
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import RoutePage from './RoutePage';
function App() {
  const [fileName] = useState('example.pdf');
  return (
    <div >
      <RoutePage />
   
    </div>  );
}
export default App
