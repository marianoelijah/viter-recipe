import React from "react";

const Status = ({ text }) => {
  return (
    <span
      className={
        text === "Active"
          ? "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "Completed" || text === "Open"
          ? "bg-blue-100 text-primary text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "On-going"
          ? "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "Locked"
          ? "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
      }
    >
      {text}
    </span>
  );
};

<<<<<<< HEAD
export default Status;
=======
export default Status;
>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
