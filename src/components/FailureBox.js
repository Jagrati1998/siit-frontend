import React, { useState, useEffect } from 'react';

const SuccessBox = ({ message, duration, onClose,showConfirmation,setShowConfirmation}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Call onClose when the box disappears
      setShowConfirmation(false)
    }, duration);

    return () => {
        clearTimeout(timer);
        
    };
  }, [duration, onClose]);

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-red-500 text-white py-2 px-4 rounded shadow">
          <span className="block sm:inline">{message}</span>
          <button
            onClick={() => {
              setVisible(false);
              onClose(); // Call onClose when the box is closed manually
            }}
            className="float-right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default SuccessBox;