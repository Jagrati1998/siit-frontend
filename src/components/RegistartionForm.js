import React, { useState } from "react";
import FormPage from "./Form";
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    registrationNo: "",
    studentName: "",
    fatherName: "",
    courseName: "",
    duration: "",
    completedDate: "",
    issueDate: "",
    centerName: "",
    grade: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data
      console.log(formData);
    } else {
      // Form is invalid, set errors state
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Example validation rules (you can add more as needed)
    if (!data.registrationNo) {
      errors.registrationNo = "Registration No is required";
    }
    if (!data.studentName) {
      errors.studentName = "Student Name is required";
    }
    if (!data.fatherName) {
      errors.fatherName = "Father Name is required";
    }
    // Add more validation rules for other fields...

    return errors;
  };

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
            onClick={()=>{navigate('/show-certificate')}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10"
          >
            Certificate
          </button>
          <button
             onClick={()=>{navigate('/')}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10"
          >
            Logout
          </button>
        </div>

        <main className="container mx-auto px-4 py-16"></main>
      </div>
      <FormPage />

      {/* Modal */}
    </>
  );
};

export default Form;
