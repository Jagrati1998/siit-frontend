import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as Yup from "yup";
import ConfirmationBox from "./successbox";
import FailureBox from "./FailureBox";
const UpdateStudentModel = (props) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showFailBox, setShowFailBox] = useState(false);

  const [error, setError] = useState(null);
  const validationSchema = Yup.object().shape({
    registrationNo: Yup.string().required("Registration No is required"),
    studentName: Yup.string().required("Student Name is required"),
    fatherName: Yup.string().required("Father Name is required"),
    courseName: Yup.string().required("Course Name is required"),
    duration: Yup.string().required("Duration is required"),
    completedDate: Yup.date().required("Completed Date is required"),
    issueDate: Yup.date().required("Issue Date is required"),
    centerName: Yup.string().required("Center Name is required"),
    grade: Yup.string().required("Grade is required"),
  });
  const [userData, setUserData] = useState({
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

  const handleSubmit = async (values) => {
    try {
      await axios
        .put(`${process.env.React_App_Backend_Ip}/api/${props.userId}`, values)
        .then((res) => {
          props.setShowConfirmation(true);
          props.setIsUpdate(false)
        //   
        });
    } catch (error) {
      setShowFailBox(true);
      setError(error);
    }

    // Handle form submission logic here
  };

  const serchUser = () => {
    axios
      .get(
        `${process.env.React_App_Backend_Ip}/api/${props.regNo}/${props.name}`
      )
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    serchUser();

    return () => {};
  }, []);
  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex justify-center min-h-screen  pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
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
                    onClick={() => props.setIsUpdate(false)}
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
                    Update Student
                  </h3>
                  <div className="mt-2"></div>
                  <Formik
                    initialValues={userData}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                  >
                    <Form>
                      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-5 ">
                        <div>
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
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Update Student
                        </button>
                        <button
                          onClick={() => props.setIsUpdate(false)}
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
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

    
    </>
  );
};

export default UpdateStudentModel;
