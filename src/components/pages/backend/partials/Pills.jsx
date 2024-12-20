import React from "react";

const Pills = ({ isActive }) => {
  return (
<<<<<<< HEAD
    <span className={`text-[8px]  rounded-full w-[50px] border text-center bg-opacity-20 ${
      isActive 
      ? "bg-success border-success text-success" 
      : "bg-gray-300 border-gray-600 text-gray-200"
      }`}
      >
      {isActive ? "Active" : "Inactive"}
      
=======
    <span
      className={`text-[8px] px-2 py-0.5  rounded-full  w-[50px]  text-center bg-opacity-20 border
      ${
        isActive
          ? " bg-success border-success text-success "
          : "bg-gray-300 border-gray-600 text-gray-200"
      }`}
    >
      {isActive ? "Active" : "Inactive"}
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
    </span>
  );
};

export default Pills;