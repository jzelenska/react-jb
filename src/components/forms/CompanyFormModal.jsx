import React, { useState } from "react";

const CompanyFormModal = ({ onSubmit, onClose, initialData }) => {
  const [form, setForm] = useState(
    initialData || { name: "", industry: "", website: "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Company" : "Create Company"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border p-2 rounded-lg"
          />
          <input
            name="industry"
            value={form.industry}
            onChange={handleChange}
            placeholder="Industry"
            className="w-full border p-2 rounded-lg"
          />
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full border p-2 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg"
          >
            Save
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

export default CompanyFormModal;






// import React, { useState } from "react";




// const CompanyFormModal = ({ onSubmit, onClose, initialData }) => {
//   const [form, setForm] = useState(
//     initialData || { name: "", industry: "", website: "" }
//   );

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-lg font-semibold mb-4">
//           {initialData ? "Edit Company" : "Create Company"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Company Name"
//             className="w-full border p-2 rounded-lg"
//           />
//           <input
//             name="industry"
//             value={form.industry}
//             onChange={handleChange}
//             placeholder="Industry"
//             className="w-full border p-2 rounded-lg"
//           />
//           <input
//             name="website"
//             value={form.website}
//             onChange={handleChange}
//             placeholder="Website"
//             className="w-full border p-2 rounded-lg"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded-lg"
//           >
//             Save
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

// export default CompanyFormModal;

