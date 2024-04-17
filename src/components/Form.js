import React, { useState } from "react";

const Form = () => {
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
    <div className="bg-gray-200  items-center justify-center  w-full">
      <h2 className="text-3xl font-bold mb-8 pt-6 ml-12"> Add Certificate </h2>
      <div className=" p-10 rounded-lg shadow-lg w-full bg-white">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="mb-4">
              <label
                htmlFor="registrationNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Registration No:
              </label>
              <input
                type="text"
                id="registrationNo"
                name="registrationNo"
                value={formData.registrationNo}
                onChange={handleChange}
                placeholder="Enter  Registration No"
                className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                  errors.registrationNo ? "border-red-500" : ""
                }`}
              />
              {errors.registrationNo && (
                <p className="text-red-500 text-xs italic">
                  {errors.registrationNo}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="registrationNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Student Name:
              </label>
              <input
                type="text"
                id="registrationNo"
                name="registrationNo"
                placeholder="Enter Student Name"
                value={formData.registrationNo}
                onChange={handleChange}
                className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                  errors.registrationNo ? "border-red-500" : ""
                }`}
              />
              {errors.registrationNo && (
                <p className="text-red-500 text-xs italic">
                  {errors.registrationNo}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="studentName"
                className="block text-gray-700 font-bold mb-2"
              >
                Father Name:
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Enter Father Name"
                value={formData.studentName}
                onChange={handleChange}
                className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                  errors.studentName ? "border-red-500" : ""
                }`}
              />
              {errors.studentName && (
                <p className="text-red-500 text-xs italic">
                  {errors.studentName}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="courseName"
              
              className="block text-gray-700 font-bold mb-2"
            >
              Course Name:
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              placeholder="Enter Course Name"
              onChange={handleChange}
              className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                errors.courseName ? "border-red-500" : ""
              }`}
            />
            {errors.courseName && (
              <p className="text-red-500 text-xs italic">{errors.courseName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="courseName"
              className="block text-gray-700 font-bold mb-2"
            >
              Duration:
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              placeholder="Enter Course Duration in days"
              onChange={handleChange}
              className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                errors.courseName ? "border-red-500" : ""
              }`}
            />
            {errors.courseName && (
              <p className="text-red-500 text-xs italic">{errors.courseName}</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="registrationNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Completed Date:
              </label>
              <input
              datepicker
                type="date"
                id="registrationNo"
                name="registrationNo"
                value={formData.registrationNo}
                placeholder="Enter Course Completion Date"
                onChange={handleChange}
                className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                  errors.registrationNo ? "border-red-500" : ""
                }`}
              />
              {errors.registrationNo && (
                <p className="text-red-500 text-xs italic">
                  {errors.registrationNo}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="studentName"
                className="block text-gray-700 font-bold mb-2"
              >
                Issue Date:
              </label>
              <input
                type="date"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                  errors.studentName ? "border-red-500" : ""
                }`}
              />
              {errors.studentName && (
                <p className="text-red-500 text-xs italic">
                  {errors.studentName}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="registrationNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Center Name:
              </label>
              <input
                type="text"
                id="registrationNo"
                name="registrationNo"
                value={formData.registrationNo}
                placeholder="Enter Center "
                onChange={handleChange}
                className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                  errors.registrationNo ? "border-red-500" : ""
                }`}
              />
              {errors.registrationNo && (
                <p className="text-red-500 text-xs italic">
                  {errors.registrationNo}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="studentName"
                className="block text-gray-700 font-bold mb-2"
              >
                Grade 
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Enter Grade"
                value={formData.studentName}
                onChange={handleChange}
                className={`w-full border   ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg pl-2  text-black py-4 ${
                  errors.studentName ? "border-red-500" : ""
                }`}
              />
              {errors.studentName && (
                <p className="text-red-500 text-xs italic">
                  {errors.studentName}
                </p>
              )}
            </div>
          </div>
          {/* Add more fields here */}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
