import React, { useState } from "react";

const ApplicationFormModal = ({ onSubmit, onClose }) => {
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ coverLetter });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Apply for Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Write your cover letter..."
            className="w-full border p-2 rounded-lg h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg"
          >
            Submit Application
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 text-black p-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ApplicationFormModal;



// import React, { useState } from "react";

// const ApplicationFormModal = ({ onSubmit, onClose }) => {
//   const [coverLetter, setCoverLetter] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ coverLetter });
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-lg font-semibold mb-4">Apply for Job</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <textarea
//             value={coverLetter}
//             onChange={(e) => setCoverLetter(e.target.value)}
//             placeholder="Write your cover letter..."
//             className="w-full border p-2 rounded-lg h-32"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded-lg"
//           >
//             Submit Application
//           </button>
//         </form>
//         <button
//           onClick={onClose}
//           className="mt-4 w-full bg-gray-300 text-black p-2 rounded-lg"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApplicationFormModal;

